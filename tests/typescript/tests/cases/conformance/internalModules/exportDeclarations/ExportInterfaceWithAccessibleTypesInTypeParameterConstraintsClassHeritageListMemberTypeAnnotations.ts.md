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
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 41
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
                      "start": 52,
                      "end": 53
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 53,
                      "end": 61
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 52,
                    "end": 62
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
                      "start": 71,
                      "end": 72
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 74,
                        "end": 80
                      },
                      "start": 72,
                      "end": 80
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 71,
                    "end": 81
                  }
                ],
                "start": 42,
                "end": 87
              },
              "declare": false,
              "start": 26,
              "end": 87
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 19,
            "end": 87
          },
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
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 117
                        },
                        "typeArguments": null,
                        "start": 112,
                        "end": 117
                      },
                      "start": 110,
                      "end": 117
                    },
                    "start": 104,
                    "end": 117
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 123
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 125,
                          "end": 126
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 122,
                        "end": 126
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 128,
                          "end": 129
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 131,
                          "end": 132
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 128,
                        "end": 132
                      }
                    ],
                    "start": 120,
                    "end": 134
                  },
                  "definite": false,
                  "start": 104,
                  "end": 134
                }
              ],
              "declare": false,
              "start": 100,
              "end": 135
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 93,
            "end": 135
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point3d",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 165
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 179
                  },
                  "typeArguments": null,
                  "start": 174,
                  "end": 179
                }
              ],
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
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 191
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 193,
                        "end": 199
                      },
                      "start": 191,
                      "end": 199
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 190,
                    "end": 200
                  }
                ],
                "start": 180,
                "end": 206
              },
              "declare": false,
              "start": 148,
              "end": 206
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 141,
            "end": 206
          },
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
                    "name": "Origin3d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point3d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 233,
                          "end": 240
                        },
                        "typeArguments": null,
                        "start": 233,
                        "end": 240
                      },
                      "start": 231,
                      "end": 240
                    },
                    "start": 223,
                    "end": 240
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 245,
                          "end": 246
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 248,
                          "end": 249
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 245,
                        "end": 249
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 251,
                          "end": 252
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 254,
                          "end": 255
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 251,
                        "end": 255
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 258
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 260,
                          "end": 261
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 257,
                        "end": 261
                      }
                    ],
                    "start": 243,
                    "end": 263
                  },
                  "definite": false,
                  "start": 223,
                  "end": 263
                }
              ],
              "declare": false,
              "start": 219,
              "end": 264
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 212,
            "end": 264
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 291
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPoint",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 298
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 307,
                        "end": 312
                      },
                      "typeArguments": null,
                      "start": 307,
                      "end": 312
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 292,
                    "end": 312
                  }
                ],
                "start": 291,
                "end": 313
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "start",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPoint",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 335,
                              "end": 341
                            },
                            "typeArguments": null,
                            "start": 335,
                            "end": 341
                          },
                          "start": 333,
                          "end": 341
                        },
                        "start": 328,
                        "end": 341
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "end",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPoint",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 348,
                              "end": 354
                            },
                            "typeArguments": null,
                            "start": 348,
                            "end": 354
                          },
                          "start": 346,
                          "end": 354
                        },
                        "start": 343,
                        "end": 354
                      }
                    ],
                    "returnType": null,
                    "start": 323,
                    "end": 356
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "start",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 370
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPoint",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 378
                        },
                        "typeArguments": null,
                        "start": 372,
                        "end": 378
                      },
                      "start": 370,
                      "end": 378
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 365,
                    "end": 379
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "end",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 391
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPoint",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 399
                        },
                        "typeArguments": null,
                        "start": 393,
                        "end": 399
                      },
                      "start": 391,
                      "end": 399
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 388,
                    "end": 400
                  }
                ],
                "start": 313,
                "end": 406
              },
              "declare": false,
              "start": 277,
              "end": 406
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 270,
            "end": 406
          }
        ],
        "start": 12,
        "end": 408
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 408
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 408
}
```
