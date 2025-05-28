__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 471,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 65,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 65,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 26,
          "decorators": [],
          "name": "ClassInterface",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 26,
          "end": 29,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 27,
              "end": 28,
              "name": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
                "decorators": [],
                "name": "C",
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
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 32,
          "end": 65,
          "key": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 46,
            "end": 53,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 52,
              "end": 53,
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 56,
            "end": 62,
            "objectType": {
              "type": "TSTypeReference",
              "start": 56,
              "end": 57,
              "typeName": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 58,
              "end": 61,
              "typeName": {
                "type": "Identifier",
                "start": 58,
                "end": 61,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "optional": false,
          "readonly": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 89,
        "decorators": [],
        "name": "InstanceInterface",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 89,
        "end": 92,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 90,
            "end": 91,
            "name": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "I",
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
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 95,
        "end": 142,
        "members": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 101,
            "end": 123,
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "start": 105,
                "end": 119,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 112,
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 112,
                  "end": 119,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 114,
                    "end": 119,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 114,
                      "end": 117
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 120,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 122,
                "end": 123,
                "typeName": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 128,
            "end": 140,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 128,
              "end": 137,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 140,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 139,
                "end": 140,
                "typeName": {
                  "type": "Identifier",
                  "start": 139,
                  "end": 140,
                  "decorators": [],
                  "name": "I",
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
      "type": "TSTypeAliasDeclaration",
      "start": 144,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 160,
        "decorators": [],
        "name": "Constructor",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 160,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 161,
            "end": 177,
            "name": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 177,
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 179,
            "end": 186,
            "name": {
              "type": "Identifier",
              "start": 179,
              "end": 180,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 183,
              "end": 186
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 190,
        "end": 230,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 190,
            "end": 207,
            "typeName": {
              "type": "Identifier",
              "start": 190,
              "end": 204,
              "decorators": [],
              "name": "ClassInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 204,
              "end": 207,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 205,
                  "end": 206,
                  "typeName": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 210,
            "end": 230,
            "typeName": {
              "type": "Identifier",
              "start": 210,
              "end": 227,
              "decorators": [],
              "name": "InstanceInterface",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 227,
              "end": 230,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 228,
                  "end": 229,
                  "typeName": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 232,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 251,
        "decorators": [],
        "name": "cloneClass",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 251,
        "end": 278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 252,
            "end": 277,
            "name": {
              "type": "Identifier",
              "start": 252,
              "end": 253,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 277,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 273,
                "decorators": [],
                "name": "Constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 273,
                "end": 277,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 274,
                    "end": 276,
                    "members": []
                  }
                ]
              }
            },
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
          "start": 279,
          "end": 295,
          "decorators": [],
          "name": "OriginalClass",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 292,
            "end": 295,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 294,
              "end": 295,
              "typeName": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "T",
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
        "start": 296,
        "end": 299,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 298,
          "end": 299,
          "typeName": {
            "type": "Identifier",
            "start": 298,
            "end": 299,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 300,
        "end": 471,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 306,
            "end": 437,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 312,
              "end": 332,
              "decorators": [],
              "name": "AnotherOriginalClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 341,
              "end": 354,
              "decorators": [],
              "name": "OriginalClass",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 355,
              "end": 437,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 365,
                  "end": 431,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 376,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 376,
                    "end": 431,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 377,
                        "end": 391,
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 384,
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 384,
                          "end": 391,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 386,
                            "end": 391,
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 386,
                              "end": 389
                            }
                          }
                        },
                        "value": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 393,
                      "end": 431,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 407,
                          "end": 421,
                          "expression": {
                            "type": "CallExpression",
                            "start": 407,
                            "end": 421,
                            "callee": {
                              "type": "Super",
                              "start": 407,
                              "end": 412
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "start": 413,
                                "end": 420,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 416,
                                  "end": 420,
                                  "decorators": [],
                                  "name": "args",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 442,
            "end": 469,
            "argument": {
              "type": "Identifier",
              "start": 449,
              "end": 469,
              "decorators": [],
              "name": "AnotherOriginalClass",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
