__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 483,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Entity",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 14,
        "end": 82,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 14,
            "end": 44,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 20,
                "end": 42,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 28,
                  "name": "someDate",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 41,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 30,
                    "end": 41,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 30,
                        "end": 34,
                        "typeName": {
                          "type": "Identifier",
                          "start": 30,
                          "end": 34,
                          "name": "Date",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSNullKeyword",
                        "start": 37,
                        "end": 41
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 48,
            "end": 81,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 48,
                "end": 63,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 50,
                    "end": 61,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 52,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSTypeLiteral",
                "start": 66,
                "end": 81,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 68,
                    "end": 79,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 68,
                      "end": 70,
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 70,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 72,
                        "end": 78
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 84,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 104,
        "name": "RowRendererMeta",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 104,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 122,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "name": "TInput",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 120,
              "end": 122,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 126,
        "end": 232,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 133,
          "end": 152,
          "name": {
            "type": "Identifier",
            "start": 133,
            "end": 136,
            "name": "key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 140,
            "end": 152,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 146,
              "end": 152,
              "typeName": {
                "type": "Identifier",
                "start": 146,
                "end": 152,
                "name": "TInput",
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
          "type": "TSTypeLiteral",
          "start": 155,
          "end": 229,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 157,
              "end": 166,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 157,
                "end": 160,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 160,
                "end": 165,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 162,
                  "end": 165,
                  "typeName": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 165,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 167,
              "end": 183,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 167,
                "end": 174,
                "name": "caption",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 174,
                "end": 182,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 176,
                  "end": 182
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 184,
              "end": 227,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 184,
                "end": 193,
                "name": "formatter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 194,
                "end": 226,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 196,
                  "end": 226,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 197,
                      "end": 215,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 202,
                        "end": 215,
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "start": 204,
                          "end": 215,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 204,
                            "end": 210,
                            "typeName": {
                              "type": "Identifier",
                              "start": 204,
                              "end": 210,
                              "name": "TInput",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 211,
                            "end": 214,
                            "typeName": {
                              "type": "Identifier",
                              "start": 211,
                              "end": 214,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 217,
                    "end": 226,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 220,
                      "end": 226
                    }
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 140,
          "end": 152,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 146,
            "end": 152,
            "typeName": {
              "type": "Identifier",
              "start": 146,
              "end": 152,
              "name": "TInput",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 133,
          "end": 136,
          "name": "key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 234,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 250,
        "name": "RowRenderer",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 250,
        "end": 269,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 251,
            "end": 268,
            "name": {
              "type": "Identifier",
              "start": 251,
              "end": 257,
              "name": "TInput",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 266,
              "end": 268,
              "members": []
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 272,
        "end": 326,
        "objectType": {
          "type": "TSTypeReference",
          "start": 272,
          "end": 295,
          "typeName": {
            "type": "Identifier",
            "start": 272,
            "end": 287,
            "name": "RowRendererMeta",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 287,
            "end": 295,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 288,
                "end": 294,
                "typeName": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 294,
                  "name": "TInput",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 296,
          "end": 325,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 302,
            "end": 325,
            "typeName": {
              "type": "Identifier",
              "start": 302,
              "end": 317,
              "name": "RowRendererMeta",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 317,
              "end": 325,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 318,
                  "end": 324,
                  "typeName": {
                    "type": "Identifier",
                    "start": 318,
                    "end": 324,
                    "name": "TInput",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 482,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 360,
            "name": "test",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 339,
              "end": 360,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 341,
                "end": 360,
                "typeName": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 352,
                  "name": "RowRenderer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 352,
                  "end": 360,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 353,
                      "end": 359,
                      "typeName": {
                        "type": "Identifier",
                        "start": 353,
                        "end": 359,
                        "name": "Entity",
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
          "init": {
            "type": "ObjectExpression",
            "start": 363,
            "end": 482,
            "properties": [
              {
                "type": "Property",
                "start": 369,
                "end": 384,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 372,
                  "name": "key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 374,
                  "end": 384,
                  "value": "someDate",
                  "raw": "'someDate'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 390,
                "end": 408,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 397,
                  "name": "caption",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 399,
                  "end": 408,
                  "value": "My Date",
                  "raw": "'My Date'"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 414,
                "end": 466,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 423,
                  "name": "formatter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 425,
                  "end": 466,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 426,
                      "end": 431,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "ConditionalExpression",
                    "start": 436,
                    "end": 466,
                    "test": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 441,
                      "name": "value",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "start": 444,
                      "end": 460,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 444,
                        "end": 458,
                        "object": {
                          "type": "Identifier",
                          "start": 444,
                          "end": 449,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 458,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 463,
                      "end": 466,
                      "value": "-",
                      "raw": "'-'"
                    }
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
