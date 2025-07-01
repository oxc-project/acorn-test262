__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 28,
                      "end": 31
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "get",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 42,
                            "end": 44
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 45,
                            "end": 48
                          },
                          "start": 42,
                          "end": 48
                        },
                        "typeArguments": null,
                        "start": 35,
                        "end": 48
                      },
                      "start": 33,
                      "end": 48
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 24,
                    "end": 49
                  }
                ],
                "start": 18,
                "end": 51
              },
              "start": 16,
              "end": 51
            },
            "start": 14,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 51
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 84
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "set",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 99,
                                "end": 101
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 102,
                                "end": 105
                              },
                              "start": 99,
                              "end": 105
                            },
                            "typeArguments": null,
                            "start": 92,
                            "end": 105
                          },
                          "start": 90,
                          "end": 105
                        },
                        "start": 85,
                        "end": 105
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 77,
                    "end": 107
                  }
                ],
                "start": 71,
                "end": 109
              },
              "start": 69,
              "end": 109
            },
            "start": 67,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 67,
          "end": 109
        }
      ],
      "declare": true,
      "start": 53,
      "end": 109
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 142
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "get",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 146,
                        "end": 152
                      },
                      "start": 144,
                      "end": 152
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 135,
                    "end": 153
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 162,
                      "end": 165
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "set",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "c3",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 180,
                                "end": 182
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 183,
                                "end": 186
                              },
                              "start": 180,
                              "end": 186
                            },
                            "typeArguments": null,
                            "start": 173,
                            "end": 186
                          },
                          "start": 171,
                          "end": 186
                        },
                        "start": 166,
                        "end": 186
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 158,
                    "end": 188
                  }
                ],
                "start": 129,
                "end": 190
              },
              "start": 127,
              "end": 190
            },
            "start": 125,
            "end": 190
          },
          "init": null,
          "definite": false,
          "start": 125,
          "end": 190
        }
      ],
      "declare": true,
      "start": 111,
      "end": 190
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 199
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 215
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 219,
                    "end": 221
                  },
                  "typeArguments": null,
                  "start": 219,
                  "end": 221
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 222,
                    "end": 227
                  },
                  "start": 222,
                  "end": 227
                },
                "start": 219,
                "end": 228
              },
              "start": 217,
              "end": 228
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 208,
            "end": 229
          }
        ],
        "start": 202,
        "end": 231
      },
      "declare": false,
      "start": 192,
      "end": 231
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 240
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 256
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 266
                      },
                      "typeArguments": null,
                      "start": 264,
                      "end": 266
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 267,
                        "end": 272
                      },
                      "start": 267,
                      "end": 272
                    },
                    "start": 264,
                    "end": 273
                  },
                  "start": 262,
                  "end": 273
                },
                "start": 257,
                "end": 273
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 249,
            "end": 275
          }
        ],
        "start": 243,
        "end": 277
      },
      "declare": false,
      "start": 233,
      "end": 277
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 286
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 302
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              },
              "start": 304,
              "end": 312
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 295,
            "end": 313
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 322,
              "end": 325
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 335
                      },
                      "typeArguments": null,
                      "start": 333,
                      "end": 335
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 336,
                        "end": 341
                      },
                      "start": 336,
                      "end": 341
                    },
                    "start": 333,
                    "end": 342
                  },
                  "start": 331,
                  "end": 342
                },
                "start": 326,
                "end": 342
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 318,
            "end": 344
          }
        ],
        "start": 289,
        "end": 346
      },
      "declare": false,
      "start": 279,
      "end": 346
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 346
}
```
