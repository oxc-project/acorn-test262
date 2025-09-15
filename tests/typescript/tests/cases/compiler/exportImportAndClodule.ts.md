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
        "name": "K",
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
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 32
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
                      "start": 43,
                      "end": 54
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
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 68,
                                "end": 74
                              },
                              "start": 66,
                              "end": 74
                            },
                            "start": 62,
                            "end": 74
                          },
                          "readonly": false,
                          "static": false,
                          "start": 55,
                          "end": 74
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 76,
                        "end": 79
                      },
                      "expression": false,
                      "start": 54,
                      "end": 79
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 43,
                    "end": 79
                  }
                ],
                "start": 33,
                "end": 85
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 85
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 85
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 107,
                "end": 108
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 130,
                            "end": 131
                          },
                          "init": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 134,
                            "end": 136
                          },
                          "definite": false,
                          "start": 130,
                          "end": 136
                        }
                      ],
                      "declare": false,
                      "start": 126,
                      "end": 137
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 119,
                    "end": 137
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 163,
                        "end": 168
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 183,
                              "end": 184
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 186,
                                "end": 192
                              },
                              "start": 184,
                              "end": 192
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 183,
                            "end": 193
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
                              "start": 206,
                              "end": 207
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 209,
                                "end": 215
                              },
                              "start": 207,
                              "end": 215
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 206,
                            "end": 216
                          }
                        ],
                        "start": 169,
                        "end": 226
                      },
                      "declare": false,
                      "start": 153,
                      "end": 226
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 146,
                    "end": 226
                  }
                ],
                "start": 109,
                "end": 232
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 97,
              "end": 232
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 90,
            "end": 232
          }
        ],
        "start": 12,
        "end": 234
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 234
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 245,
        "end": 246
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 267,
                "end": 268
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 271,
                  "end": 272
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 274
                },
                "start": 271,
                "end": 274
              },
              "importKind": "value",
              "start": 260,
              "end": 275
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 253,
            "end": 275
          }
        ],
        "start": 247,
        "end": 277
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 235,
      "end": 277
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
            "name": "o",
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
                      "start": 287,
                      "end": 291
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 293,
                        "end": 299
                      },
                      "start": 291,
                      "end": 299
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 287,
                    "end": 299
                  }
                ],
                "start": 285,
                "end": 301
              },
              "start": 283,
              "end": 301
            },
            "start": 282,
            "end": 301
          },
          "init": null,
          "definite": false,
          "start": 282,
          "end": 301
        }
      ],
      "declare": false,
      "start": 278,
      "end": 302
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 308
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "optional": false,
              "computed": false,
              "start": 315,
              "end": 318
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Hello",
                "raw": "'Hello'",
                "start": 319,
                "end": 326
              }
            ],
            "start": 311,
            "end": 327
          },
          "definite": false,
          "start": 307,
          "end": 327
        }
      ],
      "declare": false,
      "start": 303,
      "end": 328
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
            "name": "p",
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
                      "start": 338,
                      "end": 339
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 341,
                        "end": 347
                      },
                      "start": 339,
                      "end": 347
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 338,
                    "end": 348
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
                      "start": 349,
                      "end": 350
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 352,
                        "end": 358
                      },
                      "start": 350,
                      "end": 358
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 349,
                    "end": 359
                  }
                ],
                "start": 336,
                "end": 361
              },
              "start": 334,
              "end": 361
            },
            "start": 333,
            "end": 361
          },
          "init": null,
          "definite": false,
          "start": 333,
          "end": 361
        }
      ],
      "declare": false,
      "start": 329,
      "end": 361
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
            "name": "p",
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
                      "type": "Identifier",
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 370
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 372
                    },
                    "start": 369,
                    "end": 372
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 373,
                    "end": 378
                  },
                  "start": 369,
                  "end": 378
                },
                "typeArguments": null,
                "start": 369,
                "end": 378
              },
              "start": 367,
              "end": 378
            },
            "start": 366,
            "end": 378
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 378
        }
      ],
      "declare": false,
      "start": 362,
      "end": 379
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 379
}
```
