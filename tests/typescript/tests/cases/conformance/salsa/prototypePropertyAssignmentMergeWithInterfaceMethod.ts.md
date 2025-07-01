__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "lf",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transaction",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 109
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "attach",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 122
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "query",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "query",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 130,
                                "end": 135
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Builder",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 136,
                                "end": 143
                              },
                              "start": 130,
                              "end": 143
                            },
                            "typeArguments": null,
                            "start": 130,
                            "end": 143
                          },
                          "start": 128,
                          "end": 143
                        },
                        "start": 123,
                        "end": 143
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 146,
                          "end": 153
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 154,
                                "end": 159
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 160,
                                      "end": 166
                                    },
                                    "typeArguments": null,
                                    "start": 160,
                                    "end": 166
                                  }
                                ],
                                "start": 159,
                                "end": 167
                              },
                              "start": 154,
                              "end": 167
                            }
                          ],
                          "start": 153,
                          "end": 168
                        },
                        "start": 146,
                        "end": 168
                      },
                      "start": 144,
                      "end": 168
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 116,
                    "end": 168
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "begin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 178
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "scope",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 191
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "schema",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 192,
                                      "end": 198
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Table",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 199,
                                      "end": 204
                                    },
                                    "start": 192,
                                    "end": 204
                                  },
                                  "typeArguments": null,
                                  "start": 192,
                                  "end": 204
                                }
                              ],
                              "start": 191,
                              "end": 205
                            },
                            "start": 186,
                            "end": 205
                          },
                          "start": 184,
                          "end": 205
                        },
                        "start": 179,
                        "end": 205
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 215
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 216,
                              "end": 220
                            }
                          ],
                          "start": 215,
                          "end": 221
                        },
                        "start": 208,
                        "end": 221
                      },
                      "start": 206,
                      "end": 221
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 173,
                    "end": 221
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "commit",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 232
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 236,
                          "end": 243
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 244,
                              "end": 248
                            }
                          ],
                          "start": 243,
                          "end": 249
                        },
                        "start": 236,
                        "end": 249
                      },
                      "start": 234,
                      "end": 249
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 226,
                    "end": 249
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 258
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "queries",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 268,
                              "end": 273
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "query",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 274,
                                      "end": 279
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Builder",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 280,
                                      "end": 287
                                    },
                                    "start": 274,
                                    "end": 287
                                  },
                                  "typeArguments": null,
                                  "start": 274,
                                  "end": 287
                                }
                              ],
                              "start": 273,
                              "end": 288
                            },
                            "start": 268,
                            "end": 288
                          },
                          "start": 266,
                          "end": 288
                        },
                        "start": 259,
                        "end": 288
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 291,
                          "end": 298
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 299,
                                "end": 304
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 305,
                                      "end": 310
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Object",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 311,
                                            "end": 317
                                          },
                                          "typeArguments": null,
                                          "start": 311,
                                          "end": 317
                                        }
                                      ],
                                      "start": 310,
                                      "end": 318
                                    },
                                    "start": 305,
                                    "end": 318
                                  }
                                ],
                                "start": 304,
                                "end": 319
                              },
                              "start": 299,
                              "end": 319
                            }
                          ],
                          "start": 298,
                          "end": 320
                        },
                        "start": 291,
                        "end": 320
                      },
                      "start": 289,
                      "end": 320
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 254,
                    "end": 320
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "rollback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 333
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 337,
                          "end": 344
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 345,
                              "end": 349
                            }
                          ],
                          "start": 344,
                          "end": 350
                        },
                        "start": 337,
                        "end": 350
                      },
                      "start": 335,
                      "end": 350
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 325,
                    "end": 350
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stats",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 355,
                      "end": 360
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TransactionStats",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 364,
                          "end": 380
                        },
                        "typeArguments": null,
                        "start": 364,
                        "end": 380
                      },
                      "start": 362,
                      "end": 380
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 355,
                    "end": 380
                  }
                ],
                "start": 110,
                "end": 384
              },
              "declare": false,
              "start": 88,
              "end": 384
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 81,
            "end": 384
          }
        ],
        "start": 77,
        "end": 386
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 56,
      "end": 386
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 386
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "lf",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 2
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Transaction",
            "optional": false,
            "typeAnnotation": null,
            "start": 3,
            "end": 14
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 14
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 28,
            "end": 30
          },
          "expression": false,
          "start": 17,
          "end": 30
        },
        "start": 0,
        "end": 30
      },
      "directive": null,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "lf",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 109
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Transaction",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 121
              },
              "optional": false,
              "computed": false,
              "start": 107,
              "end": 121
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 131
            },
            "optional": false,
            "computed": false,
            "start": 107,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "begin",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 137
          },
          "optional": false,
          "computed": false,
          "start": 107,
          "end": 137
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "scope",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 154
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 156,
            "end": 158
          },
          "expression": false,
          "start": 140,
          "end": 158
        },
        "start": 107,
        "end": 158
      },
      "directive": null,
      "start": 107,
      "end": 159
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 159
}
```
