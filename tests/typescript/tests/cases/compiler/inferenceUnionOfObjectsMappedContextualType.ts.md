__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 482,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 82,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null
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
                  "decorators": [],
                  "name": "someDate",
                  "optional": false,
                  "typeAnnotation": null
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
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null
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
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "RowRendererMeta",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null
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
        "key": {
          "type": "Identifier",
          "start": 133,
          "end": 136,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": null
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
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
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
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "caption",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "formatter",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "value",
                      "optional": false,
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
                              "decorators": [],
                              "name": "TInput",
                              "optional": false,
                              "typeAnnotation": null
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
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
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
        "optional": false,
        "readonly": null
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
        "decorators": [],
        "name": "RowRenderer",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "TInput",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "RowRendererMeta",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "TInput",
                  "optional": false,
                  "typeAnnotation": null
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
              "decorators": [],
              "name": "RowRendererMeta",
              "optional": false,
              "typeAnnotation": null
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
                    "decorators": [],
                    "name": "TInput",
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 329,
      "end": 482,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 335,
          "end": 482,
          "id": {
            "type": "Identifier",
            "start": 335,
            "end": 360,
            "decorators": [],
            "name": "test",
            "optional": false,
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
                  "decorators": [],
                  "name": "RowRenderer",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "Entity",
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
          "init": {
            "type": "ObjectExpression",
            "start": 363,
            "end": 482,
            "properties": [
              {
                "type": "Property",
                "start": 369,
                "end": 384,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 372,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 374,
                  "end": 384,
                  "value": "someDate",
                  "raw": "'someDate'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 390,
                "end": 408,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 397,
                  "decorators": [],
                  "name": "caption",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 399,
                  "end": 408,
                  "value": "My Date",
                  "raw": "'My Date'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 414,
                "end": 466,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 423,
                  "decorators": [],
                  "name": "formatter",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 425,
                  "end": 466,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 426,
                      "end": 431,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ConditionalExpression",
                    "start": 436,
                    "end": 466,
                    "test": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 441,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
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
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 458,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "alternate": {
                      "type": "Literal",
                      "start": 463,
                      "end": 466,
                      "value": "-",
                      "raw": "'-'"
                    }
                  },
                  "id": null,
                  "generator": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
