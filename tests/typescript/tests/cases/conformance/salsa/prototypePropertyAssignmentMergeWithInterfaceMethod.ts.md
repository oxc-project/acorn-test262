__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 386,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 56,
      "end": 386,
      "id": {
        "type": "Identifier",
        "start": 74,
        "end": 76,
        "decorators": [],
        "name": "lf",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 77,
        "end": 386,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 81,
            "end": 384,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 88,
              "end": 384,
              "id": {
                "type": "Identifier",
                "start": 98,
                "end": 109,
                "decorators": [],
                "name": "Transaction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 110,
                "end": 384,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 116,
                    "end": 168,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 122,
                      "decorators": [],
                      "name": "attach",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 123,
                        "end": 143,
                        "decorators": [],
                        "name": "query",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 128,
                          "end": 143,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 130,
                            "end": 143,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 130,
                              "end": 143,
                              "left": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 135,
                                "decorators": [],
                                "name": "query",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 136,
                                "end": 143,
                                "decorators": [],
                                "name": "Builder",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 144,
                      "end": 168,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 146,
                        "end": 168,
                        "typeName": {
                          "type": "Identifier",
                          "start": 146,
                          "end": 153,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 153,
                          "end": 168,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 154,
                              "end": 167,
                              "typeName": {
                                "type": "Identifier",
                                "start": 154,
                                "end": 159,
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 159,
                                "end": 167,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 160,
                                    "end": 166,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 160,
                                      "end": 166,
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 173,
                    "end": 221,
                    "key": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 178,
                      "decorators": [],
                      "name": "begin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 179,
                        "end": 205,
                        "decorators": [],
                        "name": "scope",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 184,
                          "end": 205,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 186,
                            "end": 205,
                            "typeName": {
                              "type": "Identifier",
                              "start": 186,
                              "end": 191,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 191,
                              "end": 205,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 192,
                                  "end": 204,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 192,
                                    "end": 204,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 192,
                                      "end": 198,
                                      "decorators": [],
                                      "name": "schema",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 199,
                                      "end": 204,
                                      "decorators": [],
                                      "name": "Table",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 206,
                      "end": 221,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 208,
                        "end": 221,
                        "typeName": {
                          "type": "Identifier",
                          "start": 208,
                          "end": 215,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 215,
                          "end": 221,
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 216,
                              "end": 220
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 226,
                    "end": 249,
                    "key": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 232,
                      "decorators": [],
                      "name": "commit",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 234,
                      "end": 249,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 236,
                        "end": 249,
                        "typeName": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 243,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 243,
                          "end": 249,
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 244,
                              "end": 248
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 254,
                    "end": 320,
                    "key": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 258,
                      "decorators": [],
                      "name": "exec",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 259,
                        "end": 288,
                        "decorators": [],
                        "name": "queries",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 266,
                          "end": 288,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 268,
                            "end": 288,
                            "typeName": {
                              "type": "Identifier",
                              "start": 268,
                              "end": 273,
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 273,
                              "end": 288,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 274,
                                  "end": 287,
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "start": 274,
                                    "end": 287,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 274,
                                      "end": 279,
                                      "decorators": [],
                                      "name": "query",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 280,
                                      "end": 287,
                                      "decorators": [],
                                      "name": "Builder",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 289,
                      "end": 320,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 291,
                        "end": 320,
                        "typeName": {
                          "type": "Identifier",
                          "start": 291,
                          "end": 298,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 298,
                          "end": 320,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 299,
                              "end": 319,
                              "typeName": {
                                "type": "Identifier",
                                "start": 299,
                                "end": 304,
                                "decorators": [],
                                "name": "Array",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 304,
                                "end": 319,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 305,
                                    "end": 318,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 305,
                                      "end": 310,
                                      "decorators": [],
                                      "name": "Array",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "start": 310,
                                      "end": 318,
                                      "params": [
                                        {
                                          "type": "TSTypeReference",
                                          "start": 311,
                                          "end": 317,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 311,
                                            "end": 317,
                                            "decorators": [],
                                            "name": "Object",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "typeArguments": null
                                        }
                                      ]
                                    }
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 325,
                    "end": 350,
                    "key": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 333,
                      "decorators": [],
                      "name": "rollback",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 335,
                      "end": 350,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 337,
                        "end": 350,
                        "typeName": {
                          "type": "Identifier",
                          "start": 337,
                          "end": 344,
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 344,
                          "end": 350,
                          "params": [
                            {
                              "type": "TSVoidKeyword",
                              "start": 345,
                              "end": 349
                            }
                          ]
                        }
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 355,
                    "end": 380,
                    "key": {
                      "type": "Identifier",
                      "start": 355,
                      "end": 360,
                      "decorators": [],
                      "name": "stats",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 362,
                      "end": 380,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 364,
                        "end": 380,
                        "typeName": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 380,
                          "decorators": [],
                          "name": "TransactionStats",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 159,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 31,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 30,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 14,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 2,
            "decorators": [],
            "name": "lf",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 3,
            "end": 14,
            "decorators": [],
            "name": "Transaction",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 17,
          "end": 30,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 28,
            "end": 30,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 159,
      "expression": {
        "type": "AssignmentExpression",
        "start": 107,
        "end": 158,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 107,
          "end": 137,
          "object": {
            "type": "MemberExpression",
            "start": 107,
            "end": 131,
            "object": {
              "type": "MemberExpression",
              "start": 107,
              "end": 121,
              "object": {
                "type": "Identifier",
                "start": 107,
                "end": 109,
                "decorators": [],
                "name": "lf",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 110,
                "end": 121,
                "decorators": [],
                "name": "Transaction",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 122,
              "end": 131,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 137,
            "decorators": [],
            "name": "begin",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 140,
          "end": 158,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 149,
              "end": 154,
              "decorators": [],
              "name": "scope",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 156,
            "end": 158,
            "body": []
          },
          "expression": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
