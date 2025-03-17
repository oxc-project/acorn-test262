__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 445,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 20,
        "name": "ExtendedService",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 23,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 22,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
        "start": 26,
        "end": 125,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 33,
          "end": 45,
          "name": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 38,
            "end": 45,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 44,
              "end": 45,
              "typeName": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
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
          "type": "TSIntersectionType",
          "start": 48,
          "end": 122,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 48,
              "end": 52,
              "objectType": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 55,
              "end": 122,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 65,
                  "end": 88,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 78,
                    "name": "__$daemonMode",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 97,
                  "end": 116,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 106,
                    "name": "__$action",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 38,
          "end": 45,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 44,
            "end": 45,
            "typeName": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
          "start": 33,
          "end": 34,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 128,
      "end": 192,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 140,
        "name": "Service",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 140,
        "end": 143,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 141,
            "end": 142,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
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
        "start": 146,
        "end": 191,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 153,
          "end": 165,
          "name": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 158,
            "end": 165,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 164,
              "end": 165,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
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
          "type": "TSIntersectionType",
          "start": 168,
          "end": 188,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 168,
              "end": 172,
              "objectType": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 175,
              "end": 188,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 176,
                  "end": 187,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 178,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 181,
                      "end": 187
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 158,
          "end": 165,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 164,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
          "start": 153,
          "end": 154,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 194,
      "end": 444,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 201,
        "end": 444,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 207,
            "end": 444,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 220,
              "name": "createService",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 223,
              "end": 444,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 275,
                  "name": "ServiceCtr",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 242,
                    "end": 275,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 244,
                      "end": 275,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 244,
                          "end": 262,
                          "typeName": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 259,
                            "name": "ExtendedService",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 259,
                            "end": 262,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 260,
                                "end": 261,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 260,
                                  "end": 261,
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
                        {
                          "type": "TSTypeReference",
                          "start": 265,
                          "end": 275,
                          "typeName": {
                            "type": "Identifier",
                            "start": 265,
                            "end": 272,
                            "name": "Service",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 272,
                            "end": 275,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 273,
                                "end": 274,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 273,
                                  "end": 274,
                                  "name": "T",
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
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 281,
                "end": 444,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 287,
                    "end": 442,
                    "expression": {
                      "type": "CallExpression",
                      "start": 287,
                      "end": 442,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 287,
                        "end": 318,
                        "object": {
                          "type": "CallExpression",
                          "start": 287,
                          "end": 310,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 298,
                            "object": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 293,
                              "name": "Object",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 298,
                              "name": "keys",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 299,
                              "end": 309,
                              "name": "ServiceCtr",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 318,
                          "name": "forEach",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 319,
                          "end": 441,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 319,
                              "end": 322,
                              "name": "key",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 326,
                            "end": 441,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 336,
                                "end": 380,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 342,
                                    "end": 379,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 342,
                                      "end": 348,
                                      "name": "method",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 351,
                                      "end": 379,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 352,
                                        "end": 362,
                                        "name": "ServiceCtr",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "TSAsExpression",
                                        "start": 364,
                                        "end": 378,
                                        "expression": {
                                          "type": "Identifier",
                                          "start": 364,
                                          "end": 367,
                                          "name": "key",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeOperator",
                                          "start": 371,
                                          "end": 378,
                                          "operator": "keyof",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "start": 377,
                                            "end": 378,
                                            "typeName": {
                                              "type": "Identifier",
                                              "start": 377,
                                              "end": 378,
                                              "name": "T",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeArguments": null
                                          }
                                        }
                                      },
                                      "computed": true,
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "const",
                                "declare": false
                              },
                              {
                                "type": "VariableDeclaration",
                                "start": 389,
                                "end": 435,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 395,
                                    "end": 434,
                                    "id": {
                                      "type": "ObjectPattern",
                                      "start": 395,
                                      "end": 425,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 396,
                                          "end": 409,
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 396,
                                            "end": 409,
                                            "name": "__$daemonMode",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "start": 396,
                                            "end": 409,
                                            "name": "__$daemonMode",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "optional": false
                                        },
                                        {
                                          "type": "Property",
                                          "start": 411,
                                          "end": 420,
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 411,
                                            "end": 420,
                                            "name": "__$action",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "start": 411,
                                            "end": 420,
                                            "name": "__$action",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "optional": false
                                        },
                                        {
                                          "type": "Property",
                                          "start": 422,
                                          "end": 424,
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 422,
                                            "end": 424,
                                            "name": "id",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "start": 422,
                                            "end": 424,
                                            "name": "id",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ],
                                      "decorators": [],
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 428,
                                      "end": 434,
                                      "name": "method",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "const",
                                "declare": false
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 223,
                "end": 226,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 224,
                    "end": 225,
                    "name": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 225,
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
              "returnType": null
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
