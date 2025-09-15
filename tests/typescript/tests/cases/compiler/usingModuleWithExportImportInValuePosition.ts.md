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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 26
                  },
                  "init": {
                    "type": "Literal",
                    "value": "hello world",
                    "raw": "'hello world'",
                    "start": 29,
                    "end": 42
                  },
                  "definite": false,
                  "start": 25,
                  "end": 42
                }
              ],
              "declare": false,
              "start": 21,
              "end": 42
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 14,
            "end": 42
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 61
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
                      "start": 72,
                      "end": 83
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 94,
                                "end": 100
                              },
                              "start": 92,
                              "end": 100
                            },
                            "start": 91,
                            "end": 100
                          },
                          "readonly": false,
                          "static": false,
                          "start": 84,
                          "end": 100
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 112,
                                "end": 118
                              },
                              "start": 110,
                              "end": 118
                            },
                            "start": 109,
                            "end": 118
                          },
                          "readonly": false,
                          "static": false,
                          "start": 102,
                          "end": 118
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 120,
                        "end": 123
                      },
                      "expression": false,
                      "start": 83,
                      "end": 123
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 72,
                    "end": 123
                  }
                ],
                "start": 62,
                "end": 129
              },
              "abstract": false,
              "declare": false,
              "start": 50,
              "end": 129
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 129
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
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
                        "name": "Id",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 180,
                        "end": 182
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 197,
                              "end": 201
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 203,
                                "end": 209
                              },
                              "start": 201,
                              "end": 209
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 197,
                            "end": 210
                          }
                        ],
                        "start": 183,
                        "end": 220
                      },
                      "declare": false,
                      "start": 170,
                      "end": 220
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 163,
                    "end": 220
                  }
                ],
                "start": 153,
                "end": 226
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 141,
              "end": 226
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 134,
            "end": 226
          }
        ],
        "start": 12,
        "end": 228
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 228
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 240
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 262
              },
              "moduleReference": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 265,
                "end": 266
              },
              "importKind": "value",
              "start": 254,
              "end": 267
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 247,
            "end": 267
          }
        ],
        "start": 241,
        "end": 269
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 229,
      "end": 269
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
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
            "start": 275,
            "end": 284
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 288
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 290
              },
              "optional": false,
              "computed": false,
              "start": 287,
              "end": 290
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 291,
              "end": 292
            },
            "optional": false,
            "computed": false,
            "start": 287,
            "end": 292
          },
          "definite": false,
          "start": 275,
          "end": 292
        }
      ],
      "declare": false,
      "start": 271,
      "end": 293
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 303,
                      "end": 304
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 306,
                        "end": 312
                      },
                      "start": 304,
                      "end": 312
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 303,
                    "end": 313
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 314,
                      "end": 315
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 317,
                        "end": 323
                      },
                      "start": 315,
                      "end": 323
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 314,
                    "end": 324
                  }
                ],
                "start": 301,
                "end": 326
              },
              "start": 299,
              "end": 326
            },
            "start": 298,
            "end": 326
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 334
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 336
                },
                "optional": false,
                "computed": false,
                "start": 333,
                "end": 336
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 342
              },
              "optional": false,
              "computed": false,
              "start": 333,
              "end": 342
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 343,
                "end": 344
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 346,
                "end": 347
              }
            ],
            "start": 329,
            "end": 348
          },
          "definite": false,
          "start": 298,
          "end": 348
        }
      ],
      "declare": false,
      "start": 294,
      "end": 349
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 363
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 365,
                        "end": 371
                      },
                      "start": 363,
                      "end": 371
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 359,
                    "end": 371
                  }
                ],
                "start": 357,
                "end": 373
              },
              "start": 355,
              "end": 373
            },
            "start": 354,
            "end": 373
          },
          "init": null,
          "definite": false,
          "start": 354,
          "end": 373
        }
      ],
      "declare": false,
      "start": 350,
      "end": 374
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 382,
                        "end": 383
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 384,
                        "end": 385
                      },
                      "start": 382,
                      "end": 385
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 386,
                      "end": 387
                    },
                    "start": 382,
                    "end": 387
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 390
                  },
                  "start": 382,
                  "end": 390
                },
                "typeArguments": null,
                "start": 382,
                "end": 390
              },
              "start": 380,
              "end": 390
            },
            "start": 379,
            "end": 390
          },
          "init": null,
          "definite": false,
          "start": 379,
          "end": 390
        }
      ],
      "declare": false,
      "start": 375,
      "end": 391
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 391
}
```
