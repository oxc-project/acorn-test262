__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IArguments",
        "optional": false,
        "typeAnnotation": null,
        "start": 11,
        "end": 21
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 22,
        "end": 24
      },
      "declare": false,
      "start": 1,
      "end": 24
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 46
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 75
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pattern",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 85,
                      "end": 91
                    },
                    "start": 83,
                    "end": 91
                  },
                  "start": 76,
                  "end": 91
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 100
                  },
                  "typeArguments": null,
                  "start": 94,
                  "end": 100
                },
                "start": 92,
                "end": 100
              },
              "body": null,
              "expression": false,
              "start": 60,
              "end": 101
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 53,
            "end": 101
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 128
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "pattern",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 138,
                      "end": 144
                    },
                    "start": 136,
                    "end": 144
                  },
                  "start": 129,
                  "end": 144
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "flags",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 153,
                      "end": 159
                    },
                    "start": 151,
                    "end": 159
                  },
                  "start": 146,
                  "end": 159
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 168
                  },
                  "typeArguments": null,
                  "start": 162,
                  "end": 168
                },
                "start": 160,
                "end": 168
              },
              "body": null,
              "expression": false,
              "start": 113,
              "end": 169
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 106,
            "end": 169
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 193
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 215
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pattern",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 225,
                              "end": 231
                            },
                            "start": 223,
                            "end": 231
                          },
                          "start": 216,
                          "end": 231
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 215,
                      "end": 233
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 204,
                    "end": 233
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 253
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pattern",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 263,
                              "end": 269
                            },
                            "start": 261,
                            "end": 269
                          },
                          "start": 254,
                          "end": 269
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "flags",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 278,
                              "end": 284
                            },
                            "start": 276,
                            "end": 284
                          },
                          "start": 271,
                          "end": 284
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 253,
                      "end": 286
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 242,
                    "end": 286
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 295,
                      "end": 299
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 308,
                              "end": 314
                            },
                            "start": 306,
                            "end": 314
                          },
                          "start": 300,
                          "end": 314
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSStringKeyword",
                            "start": 317,
                            "end": 323
                          },
                          "start": 317,
                          "end": 325
                        },
                        "start": 315,
                        "end": 325
                      },
                      "body": null,
                      "expression": false,
                      "start": 299,
                      "end": 326
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 295,
                    "end": 326
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 339
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 348,
                              "end": 354
                            },
                            "start": 346,
                            "end": 354
                          },
                          "start": 340,
                          "end": 354
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 357,
                          "end": 364
                        },
                        "start": 355,
                        "end": 364
                      },
                      "body": null,
                      "expression": false,
                      "start": 339,
                      "end": 365
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 335,
                    "end": 365
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "source",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 374,
                      "end": 380
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 382,
                        "end": 388
                      },
                      "start": 380,
                      "end": 388
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 374,
                    "end": 389
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "global",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 404
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 406,
                        "end": 413
                      },
                      "start": 404,
                      "end": 413
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 398,
                    "end": 414
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ignoreCase",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 423,
                      "end": 433
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 435,
                        "end": 442
                      },
                      "start": 433,
                      "end": 442
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 423,
                    "end": 443
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "multiline",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 452,
                      "end": 461
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 463,
                        "end": 470
                      },
                      "start": 461,
                      "end": 470
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 452,
                    "end": 471
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "lastIndex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 480,
                      "end": 489
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 491,
                        "end": 498
                      },
                      "start": 489,
                      "end": 498
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 480,
                    "end": 499
                  }
                ],
                "start": 194,
                "end": 505
              },
              "abstract": false,
              "declare": false,
              "start": 181,
              "end": 505
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 174,
            "end": 505
          }
        ],
        "start": 47,
        "end": 507
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 27,
      "end": 507
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 1,
  "end": 507
}
```
