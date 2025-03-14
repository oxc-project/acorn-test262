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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 20,
        "decorators": [],
        "name": "ExtendedService",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 26,
        "end": 125,
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 33,
          "end": 34,
          "decorators": [],
          "name": "K",
          "optional": false
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
              "indexType": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
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
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 78,
                    "decorators": [],
                    "name": "__$daemonMode",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 87,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 97,
                  "end": 116,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 106,
                    "decorators": [],
                    "name": "__$action",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 107,
                    "end": 115,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    }
                  }
                }
              ]
            }
          ]
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 128,
      "end": 192,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 140,
        "decorators": [],
        "name": "Service",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 146,
        "end": 191,
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "K",
          "optional": false
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
              "indexType": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 171,
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 171,
                  "decorators": [],
                  "name": "K",
                  "optional": false
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 168,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
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
                  "key": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 178,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 187,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 181,
                      "end": 187
                    }
                  }
                }
              ]
            }
          ]
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 194,
      "end": 444,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 201,
        "end": 444,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 207,
            "end": 444,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 207,
              "end": 220,
              "decorators": [],
              "name": "createService",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 223,
              "end": 444,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 319,
                          "end": 441,
                          "async": false,
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
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 342,
                                      "end": 348,
                                      "decorators": [],
                                      "name": "method",
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "start": 351,
                                      "end": 379,
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "start": 352,
                                        "end": 362,
                                        "decorators": [],
                                        "name": "ServiceCtr",
                                        "optional": false
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "TSAsExpression",
                                        "start": 364,
                                        "end": 378,
                                        "expression": {
                                          "type": "Identifier",
                                          "start": 364,
                                          "end": 367,
                                          "decorators": [],
                                          "name": "key",
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
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const"
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
                                    "definite": false,
                                    "id": {
                                      "type": "ObjectPattern",
                                      "start": 395,
                                      "end": 425,
                                      "decorators": [],
                                      "optional": false,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 396,
                                          "end": 409,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 396,
                                            "end": 409,
                                            "decorators": [],
                                            "name": "__$daemonMode",
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": true,
                                          "value": {
                                            "type": "Identifier",
                                            "start": 396,
                                            "end": 409,
                                            "decorators": [],
                                            "name": "__$daemonMode",
                                            "optional": false
                                          }
                                        },
                                        {
                                          "type": "Property",
                                          "start": 411,
                                          "end": 420,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 411,
                                            "end": 420,
                                            "decorators": [],
                                            "name": "__$action",
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": true,
                                          "value": {
                                            "type": "Identifier",
                                            "start": 411,
                                            "end": 420,
                                            "decorators": [],
                                            "name": "__$action",
                                            "optional": false
                                          }
                                        },
                                        {
                                          "type": "Property",
                                          "start": 422,
                                          "end": 424,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 422,
                                            "end": 424,
                                            "decorators": [],
                                            "name": "id",
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": true,
                                          "value": {
                                            "type": "Identifier",
                                            "start": 422,
                                            "end": 424,
                                            "decorators": [],
                                            "name": "id",
                                            "optional": false
                                          }
                                        }
                                      ]
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 428,
                                      "end": 434,
                                      "decorators": [],
                                      "name": "method",
                                      "optional": false
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const"
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 319,
                              "end": 322,
                              "decorators": [],
                              "name": "key",
                              "optional": false
                            }
                          ]
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 287,
                        "end": 318,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 287,
                          "end": 310,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 299,
                              "end": 309,
                              "decorators": [],
                              "name": "ServiceCtr",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 287,
                            "end": 298,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 287,
                              "end": 293,
                              "decorators": [],
                              "name": "Object",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 294,
                              "end": 298,
                              "decorators": [],
                              "name": "keys",
                              "optional": false
                            }
                          },
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 318,
                          "decorators": [],
                          "name": "forEach",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 232,
                  "end": 275,
                  "decorators": [],
                  "name": "ServiceCtr",
                  "optional": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 244,
                            "end": 259,
                            "decorators": [],
                            "name": "ExtendedService",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 265,
                          "end": 275,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 265,
                            "end": 272,
                            "decorators": [],
                            "name": "Service",
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 223,
                "end": 226,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 224,
                    "end": 225,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 225,
                      "decorators": [],
                      "name": "T",
                      "optional": false
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
