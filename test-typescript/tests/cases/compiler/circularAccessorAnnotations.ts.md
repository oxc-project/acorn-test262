__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 346,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 51,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 18,
                "end": 51,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 24,
                    "end": 49,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 31,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 33,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 35,
                        "end": 48,
                        "exprName": {
                          "type": "TSQualifiedName",
                          "start": 42,
                          "end": 48,
                          "left": {
                            "type": "Identifier",
                            "start": 42,
                            "end": 44,
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 45,
                            "end": 48,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 53,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 109,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 71,
                "end": 109,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 77,
                    "end": 107,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 81,
                      "end": 84,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 85,
                        "end": 105,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 90,
                          "end": 105,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 92,
                            "end": 105,
                            "exprName": {
                              "type": "TSQualifiedName",
                              "start": 99,
                              "end": 105,
                              "left": {
                                "type": "Identifier",
                                "start": 99,
                                "end": 101,
                                "decorators": [],
                                "name": "c2",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 102,
                                "end": 105,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 190,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 129,
                "end": 190,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 135,
                    "end": 153,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 139,
                      "end": 142,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "get",
                    "optional": false,
                    "params": [],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 144,
                      "end": 152,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 146,
                        "end": 152
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 158,
                    "end": 188,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 162,
                      "end": 165,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "set",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 166,
                        "end": 186,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 171,
                          "end": 186,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 173,
                            "end": 186,
                            "exprName": {
                              "type": "TSQualifiedName",
                              "start": 180,
                              "end": 186,
                              "left": {
                                "type": "Identifier",
                                "start": 180,
                                "end": 182,
                                "decorators": [],
                                "name": "c3",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 183,
                                "end": 186,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": null,
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 192,
      "end": 231,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 202,
        "end": 231,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 208,
            "end": 229,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 215,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 228,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 219,
                "end": 228,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 222,
                  "end": 227,
                  "literal": {
                    "type": "Literal",
                    "start": 222,
                    "end": 227,
                    "raw": "\"foo\"",
                    "value": "foo",
                    "regex": null,
                    "bigint": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 219,
                  "end": 221,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 221,
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 233,
      "end": 277,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 240,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 243,
        "end": 277,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 249,
            "end": 275,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 253,
              "end": 256,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 257,
                "end": 273,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 262,
                  "end": 273,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 264,
                    "end": 273,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 267,
                      "end": 272,
                      "literal": {
                        "type": "Literal",
                        "start": 267,
                        "end": 272,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 264,
                      "end": 266,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 266,
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 279,
      "end": 346,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 284,
        "end": 286,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 289,
        "end": 346,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 295,
            "end": 313,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 299,
              "end": 302,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 312,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 318,
            "end": 344,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 322,
              "end": 325,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 326,
                "end": 342,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 331,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "start": 333,
                    "end": 342,
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 336,
                      "end": 341,
                      "literal": {
                        "type": "Literal",
                        "start": 336,
                        "end": 341,
                        "raw": "\"foo\"",
                        "value": "foo",
                        "regex": null,
                        "bigint": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 333,
                      "end": 335,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 333,
                        "end": 335,
                        "decorators": [],
                        "name": "T3",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
