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
          "name": "ClassInterface",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "C",
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
          "start": 32,
          "end": 65,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 39,
            "end": 53,
            "name": {
              "type": "Identifier",
              "start": 39,
              "end": 42,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "C",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "key",
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
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "key": {
            "type": "Identifier",
            "start": 39,
            "end": 42,
            "name": "key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 89,
        "name": "InstanceInterface",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "I",
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
                "argument": {
                  "type": "Identifier",
                  "start": 108,
                  "end": 112,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "Constructor",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 177,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 177,
                "name": "Object",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "ClassInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "name": "InstanceInterface",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "I",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "name": "cloneClass",
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
          "start": 279,
          "end": 295,
          "name": "OriginalClass",
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
                "name": "T",
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
        "start": 300,
        "end": 471,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 306,
            "end": 437,
            "id": {
              "type": "Identifier",
              "start": 312,
              "end": 332,
              "name": "AnotherOriginalClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 341,
              "end": 354,
              "name": "OriginalClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 355,
              "end": 437,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 365,
                  "end": 431,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 365,
                    "end": 376,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 376,
                    "end": 431,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "RestElement",
                        "start": 377,
                        "end": 391,
                        "argument": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 384,
                          "name": "args",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "decorators": [],
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
                            "arguments": [
                              {
                                "type": "SpreadElement",
                                "start": 413,
                                "end": 420,
                                "argument": {
                                  "type": "Identifier",
                                  "start": 416,
                                  "end": 420,
                                  "name": "args",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "directive": null
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ReturnStatement",
            "start": 442,
            "end": 469,
            "argument": {
              "type": "Identifier",
              "start": 449,
              "end": 469,
              "name": "AnotherOriginalClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 262,
              "end": 277,
              "typeName": {
                "type": "Identifier",
                "start": 262,
                "end": 273,
                "name": "Constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
