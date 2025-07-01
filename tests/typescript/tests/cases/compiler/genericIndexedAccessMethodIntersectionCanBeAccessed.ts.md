__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtendedService",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 20
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 33,
          "end": 34
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "typeArguments": null,
            "start": 44,
            "end": 45
          },
          "start": 38,
          "end": 45
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "typeArguments": null,
                "start": 48,
                "end": 49
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 51
                },
                "typeArguments": null,
                "start": 50,
                "end": 51
              },
              "start": 48,
              "end": 52
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__$daemonMode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 78
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 81,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 65,
                  "end": 88
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__$action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 106
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 109,
                      "end": 115
                    },
                    "start": 107,
                    "end": 115
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 97,
                  "end": 116
                }
              ],
              "start": 55,
              "end": 122
            }
          ],
          "start": 48,
          "end": 122
        },
        "optional": false,
        "readonly": null,
        "start": 26,
        "end": 125
      },
      "declare": false,
      "start": 0,
      "end": 126
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Service",
        "optional": false,
        "typeAnnotation": null,
        "start": 133,
        "end": 140
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 142
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 141,
            "end": 142
          }
        ],
        "start": 140,
        "end": 143
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 165
            },
            "typeArguments": null,
            "start": 164,
            "end": 165
          },
          "start": 158,
          "end": 165
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 169
                },
                "typeArguments": null,
                "start": 168,
                "end": 169
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 170,
                  "end": 171
                },
                "typeArguments": null,
                "start": 170,
                "end": 171
              },
              "start": 168,
              "end": 172
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 178
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 181,
                      "end": 187
                    },
                    "start": 179,
                    "end": 187
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 176,
                  "end": 187
                }
              ],
              "start": 175,
              "end": 188
            }
          ],
          "start": 168,
          "end": 188
        },
        "optional": false,
        "readonly": null,
        "start": 146,
        "end": 191
      },
      "declare": false,
      "start": 128,
      "end": 192
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createService",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 220
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 225
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 224,
                    "end": 225
                  }
                ],
                "start": 223,
                "end": 226
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ServiceCtr",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExtendedService",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 244,
                            "end": 259
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 260,
                                  "end": 261
                                },
                                "typeArguments": null,
                                "start": 260,
                                "end": 261
                              }
                            ],
                            "start": 259,
                            "end": 262
                          },
                          "start": 244,
                          "end": 262
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Service",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 265,
                            "end": 272
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 273,
                                  "end": 274
                                },
                                "typeArguments": null,
                                "start": 273,
                                "end": 274
                              }
                            ],
                            "start": 272,
                            "end": 275
                          },
                          "start": 265,
                          "end": 275
                        }
                      ],
                      "start": 244,
                      "end": 275
                    },
                    "start": 242,
                    "end": 275
                  },
                  "start": 232,
                  "end": 275
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 287,
                              "end": 293
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "keys",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 294,
                              "end": 298
                            },
                            "optional": false,
                            "computed": false,
                            "start": 287,
                            "end": 298
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ServiceCtr",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 299,
                              "end": 309
                            }
                          ],
                          "optional": false,
                          "start": 287,
                          "end": 310
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 311,
                          "end": 318
                        },
                        "optional": false,
                        "computed": false,
                        "start": 287,
                        "end": 318
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 319,
                              "end": 322
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "method",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 342,
                                      "end": 348
                                    },
                                    "init": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ServiceCtr",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 352,
                                        "end": 362
                                      },
                                      "property": {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 364,
                                          "end": 367
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeOperator",
                                          "operator": "keyof",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "T",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 377,
                                              "end": 378
                                            },
                                            "typeArguments": null,
                                            "start": 377,
                                            "end": 378
                                          },
                                          "start": 371,
                                          "end": 378
                                        },
                                        "start": 364,
                                        "end": 378
                                      },
                                      "optional": false,
                                      "computed": true,
                                      "start": 351,
                                      "end": 379
                                    },
                                    "definite": false,
                                    "start": 342,
                                    "end": 379
                                  }
                                ],
                                "declare": false,
                                "start": 336,
                                "end": 380
                              },
                              {
                                "type": "VariableDeclaration",
                                "kind": "const",
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "id": {
                                      "type": "ObjectPattern",
                                      "decorators": [],
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "__$daemonMode",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 396,
                                            "end": 409
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "__$daemonMode",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 396,
                                            "end": 409
                                          },
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "optional": false,
                                          "start": 396,
                                          "end": 409
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "__$action",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 411,
                                            "end": 420
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "__$action",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 411,
                                            "end": 420
                                          },
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "optional": false,
                                          "start": 411,
                                          "end": 420
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "id",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 422,
                                            "end": 424
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "id",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 422,
                                            "end": 424
                                          },
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "optional": false,
                                          "start": 422,
                                          "end": 424
                                        }
                                      ],
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 395,
                                      "end": 425
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "method",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 428,
                                      "end": 434
                                    },
                                    "definite": false,
                                    "start": 395,
                                    "end": 434
                                  }
                                ],
                                "declare": false,
                                "start": 389,
                                "end": 435
                              }
                            ],
                            "start": 326,
                            "end": 441
                          },
                          "id": null,
                          "generator": false,
                          "start": 319,
                          "end": 441
                        }
                      ],
                      "optional": false,
                      "start": 287,
                      "end": 442
                    },
                    "directive": null,
                    "start": 287,
                    "end": 442
                  }
                ],
                "start": 281,
                "end": 444
              },
              "id": null,
              "generator": false,
              "start": 223,
              "end": 444
            },
            "definite": false,
            "start": 207,
            "end": 444
          }
        ],
        "declare": false,
        "start": 201,
        "end": 444
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 194,
      "end": 444
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 444
}
```
