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
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 34
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
                    "start": 45,
                    "end": 46
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 48,
                      "end": 54
                    },
                    "start": 46,
                    "end": 54
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 45,
                  "end": 55
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
                    "start": 64,
                    "end": 65
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 67,
                      "end": 73
                    },
                    "start": 65,
                    "end": 73
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 64,
                  "end": 74
                }
              ],
              "start": 35,
              "end": 80
            },
            "declare": false,
            "start": 19,
            "end": 80
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
                          "start": 105,
                          "end": 110
                        },
                        "typeArguments": null,
                        "start": 105,
                        "end": 110
                      },
                      "start": 103,
                      "end": 110
                    },
                    "start": 97,
                    "end": 110
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
                          "start": 115,
                          "end": 116
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 118,
                          "end": 119
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 115,
                        "end": 119
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
                          "start": 121,
                          "end": 122
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 124,
                          "end": 125
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 121,
                        "end": 125
                      }
                    ],
                    "start": 113,
                    "end": 127
                  },
                  "definite": false,
                  "start": 97,
                  "end": 127
                }
              ],
              "declare": false,
              "start": 93,
              "end": 128
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 86,
            "end": 128
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
                "start": 151,
                "end": 158
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
                    "start": 167,
                    "end": 172
                  },
                  "typeArguments": null,
                  "start": 167,
                  "end": 172
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
                  }
                ],
                "start": 173,
                "end": 199
              },
              "declare": false,
              "start": 141,
              "end": 199
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 134,
            "end": 199
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
                          "start": 226,
                          "end": 233
                        },
                        "typeArguments": null,
                        "start": 226,
                        "end": 233
                      },
                      "start": 224,
                      "end": 233
                    },
                    "start": 216,
                    "end": 233
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
                          "start": 238,
                          "end": 239
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 241,
                          "end": 242
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 238,
                        "end": 242
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
                          "start": 244,
                          "end": 245
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 247,
                          "end": 248
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 244,
                        "end": 248
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
                          "start": 250,
                          "end": 251
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 253,
                          "end": 254
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 250,
                        "end": 254
                      }
                    ],
                    "start": 236,
                    "end": 256
                  },
                  "definite": false,
                  "start": 216,
                  "end": 256
                }
              ],
              "declare": false,
              "start": 212,
              "end": 257
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 205,
            "end": 257
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
                "start": 280,
                "end": 284
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
                      "start": 285,
                      "end": 291
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 300,
                        "end": 305
                      },
                      "typeArguments": null,
                      "start": 300,
                      "end": 305
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 285,
                    "end": 305
                  }
                ],
                "start": 284,
                "end": 306
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
                              "start": 328,
                              "end": 334
                            },
                            "typeArguments": null,
                            "start": 328,
                            "end": 334
                          },
                          "start": 326,
                          "end": 334
                        },
                        "start": 321,
                        "end": 334
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
                              "start": 341,
                              "end": 347
                            },
                            "typeArguments": null,
                            "start": 341,
                            "end": 347
                          },
                          "start": 339,
                          "end": 347
                        },
                        "start": 336,
                        "end": 347
                      }
                    ],
                    "returnType": null,
                    "start": 316,
                    "end": 349
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
                      "start": 359,
                      "end": 364
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
                          "start": 366,
                          "end": 372
                        },
                        "typeArguments": null,
                        "start": 366,
                        "end": 372
                      },
                      "start": 364,
                      "end": 372
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 359,
                    "end": 373
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
                      "start": 382,
                      "end": 385
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
                          "start": 387,
                          "end": 393
                        },
                        "typeArguments": null,
                        "start": 387,
                        "end": 393
                      },
                      "start": 385,
                      "end": 393
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 382,
                    "end": 394
                  }
                ],
                "start": 306,
                "end": 400
              },
              "declare": false,
              "start": 270,
              "end": 400
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 263,
            "end": 400
          }
        ],
        "start": 12,
        "end": 402
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 402
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 402
}
```
