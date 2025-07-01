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
        "start": 7,
        "end": 8
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
                "start": 28,
                "end": 29
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
                      "start": 40,
                      "end": 51
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
                                "start": 65,
                                "end": 71
                              },
                              "start": 63,
                              "end": 71
                            },
                            "start": 59,
                            "end": 71
                          },
                          "readonly": false,
                          "static": false,
                          "start": 52,
                          "end": 71
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 73,
                        "end": 76
                      },
                      "expression": false,
                      "start": 51,
                      "end": 76
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 40,
                    "end": 76
                  }
                ],
                "start": 30,
                "end": 82
              },
              "abstract": false,
              "declare": false,
              "start": 22,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 82
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
                "start": 101,
                "end": 102
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
                            "start": 124,
                            "end": 125
                          },
                          "init": {
                            "type": "Literal",
                            "value": 12,
                            "raw": "12",
                            "start": 128,
                            "end": 130
                          },
                          "definite": false,
                          "start": 124,
                          "end": 130
                        }
                      ],
                      "declare": false,
                      "start": 120,
                      "end": 131
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 113,
                    "end": 131
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
                        "start": 157,
                        "end": 162
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
                              "start": 177,
                              "end": 178
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 180,
                                "end": 186
                              },
                              "start": 178,
                              "end": 186
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 177,
                            "end": 187
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
                              "start": 200,
                              "end": 201
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 203,
                                "end": 209
                              },
                              "start": 201,
                              "end": 209
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 200,
                            "end": 210
                          }
                        ],
                        "start": 163,
                        "end": 220
                      },
                      "declare": false,
                      "start": 147,
                      "end": 220
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 140,
                    "end": 220
                  }
                ],
                "start": 103,
                "end": 226
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 94,
              "end": 226
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 87,
            "end": 226
          }
        ],
        "start": 9,
        "end": 228
      },
      "kind": "module",
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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 237
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
                "start": 258,
                "end": 259
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 263
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "L",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 264,
                  "end": 265
                },
                "start": 262,
                "end": 265
              },
              "importKind": "value",
              "start": 251,
              "end": 266
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 244,
            "end": 266
          }
        ],
        "start": 238,
        "end": 268
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 229,
      "end": 268
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
                      "start": 278,
                      "end": 282
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 284,
                        "end": 290
                      },
                      "start": 282,
                      "end": 290
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 278,
                    "end": 290
                  }
                ],
                "start": 276,
                "end": 292
              },
              "start": 274,
              "end": 292
            },
            "start": 273,
            "end": 292
          },
          "init": null,
          "definite": false,
          "start": 273,
          "end": 292
        }
      ],
      "declare": false,
      "start": 269,
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 299
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
                "start": 306,
                "end": 307
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "optional": false,
              "computed": false,
              "start": 306,
              "end": 309
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Hello",
                "raw": "'Hello'",
                "start": 310,
                "end": 317
              }
            ],
            "start": 302,
            "end": 318
          },
          "definite": false,
          "start": 298,
          "end": 318
        }
      ],
      "declare": false,
      "start": 294,
      "end": 319
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
                      "start": 329,
                      "end": 330
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 332,
                        "end": 338
                      },
                      "start": 330,
                      "end": 338
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 329,
                    "end": 339
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
                      "start": 340,
                      "end": 341
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 343,
                        "end": 349
                      },
                      "start": 341,
                      "end": 349
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 340,
                    "end": 350
                  }
                ],
                "start": 327,
                "end": 352
              },
              "start": 325,
              "end": 352
            },
            "start": 324,
            "end": 352
          },
          "init": null,
          "definite": false,
          "start": 324,
          "end": 352
        }
      ],
      "declare": false,
      "start": 320,
      "end": 352
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
                      "start": 360,
                      "end": 361
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 362,
                      "end": 363
                    },
                    "start": 360,
                    "end": 363
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 364,
                    "end": 369
                  },
                  "start": 360,
                  "end": 369
                },
                "typeArguments": null,
                "start": 360,
                "end": 369
              },
              "start": 358,
              "end": 369
            },
            "start": 357,
            "end": 369
          },
          "init": null,
          "definite": false,
          "start": 357,
          "end": 369
        }
      ],
      "declare": false,
      "start": 353,
      "end": 370
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 370
}
```
