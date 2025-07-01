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
        "name": "global",
        "optional": false,
        "typeAnnotation": null,
        "start": 8,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 55,
                    "end": 72
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 91,
                                "end": 97
                              },
                              "start": 89,
                              "end": 97
                            },
                            "start": 88,
                            "end": 97
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 100,
                            "end": 102
                          },
                          "start": 98,
                          "end": 102
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null,
                        "start": 87,
                        "end": 103
                      }
                    ],
                    "start": 73,
                    "end": 113
                  },
                  "declare": false,
                  "start": 45,
                  "end": 113
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Element",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 139
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
                          "name": "__domBrand",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 154,
                          "end": 164
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 166,
                            "end": 170
                          },
                          "start": 164,
                          "end": 170
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 154,
                        "end": 171
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 184,
                          "end": 192
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Element",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 194,
                                "end": 201
                              },
                              "typeArguments": null,
                              "start": 194,
                              "end": 201
                            },
                            "start": 194,
                            "end": 203
                          },
                          "start": 192,
                          "end": 203
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 184,
                        "end": 204
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 217,
                          "end": 222
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "members": [],
                            "start": 224,
                            "end": 226
                          },
                          "start": 222,
                          "end": 226
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 217,
                        "end": 227
                      }
                    ],
                    "start": 140,
                    "end": 237
                  },
                  "declare": false,
                  "start": 122,
                  "end": 237
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementAttributesProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 256,
                    "end": 281
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
                          "name": "props",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 284,
                          "end": 289
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 291,
                            "end": 294
                          },
                          "start": 289,
                          "end": 294
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 284,
                        "end": 295
                      }
                    ],
                    "start": 282,
                    "end": 297
                  },
                  "declare": false,
                  "start": 246,
                  "end": 297
                },
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ElementChildrenAttribute",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 316,
                    "end": 340
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
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 343,
                          "end": 351
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 353,
                            "end": 356
                          },
                          "start": 351,
                          "end": 356
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 343,
                        "end": 357
                      }
                    ],
                    "start": 341,
                    "end": 359
                  },
                  "declare": false,
                  "start": 306,
                  "end": 359
                }
              ],
              "start": 35,
              "end": 365
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 21,
            "end": 365
          }
        ],
        "start": 15,
        "end": 367
      },
      "kind": "global",
      "declare": true,
      "global": true,
      "start": 0,
      "end": 367
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "dom",
          "optional": false,
          "typeAnnotation": null,
          "start": 384,
          "end": 387
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 394
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 395,
                "end": 402
              },
              "start": 391,
              "end": 402
            },
            "typeArguments": null,
            "start": 391,
            "end": 402
          },
          "start": 389,
          "end": 402
        },
        "body": null,
        "expression": false,
        "start": 375,
        "end": 403
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 368,
      "end": 403
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 403
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "predom",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 23
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "JSX",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 43
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IntrinsicElements",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 81
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 100,
                                  "end": 106
                                },
                                "start": 98,
                                "end": 106
                              },
                              "start": 97,
                              "end": 106
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 109,
                              "end": 111
                            },
                            "start": 107,
                            "end": 111
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null,
                          "start": 96,
                          "end": 112
                        }
                      ],
                      "start": 82,
                      "end": 122
                    },
                    "declare": false,
                    "start": 54,
                    "end": 122
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Element",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 148
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
                            "name": "__predomBrand",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 163,
                            "end": 176
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 178,
                              "end": 182
                            },
                            "start": 176,
                            "end": 182
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 163,
                          "end": 183
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 196,
                            "end": 204
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Element",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 206,
                                  "end": 213
                                },
                                "typeArguments": null,
                                "start": 206,
                                "end": 213
                              },
                              "start": 206,
                              "end": 215
                            },
                            "start": 204,
                            "end": 215
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 196,
                          "end": 216
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 229,
                            "end": 234
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 236,
                              "end": 238
                            },
                            "start": 234,
                            "end": 238
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 229,
                          "end": 239
                        }
                      ],
                      "start": 149,
                      "end": 249
                    },
                    "declare": false,
                    "start": 131,
                    "end": 249
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementAttributesProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 293
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
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 296,
                            "end": 301
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 303,
                              "end": 306
                            },
                            "start": 301,
                            "end": 306
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 296,
                          "end": 307
                        }
                      ],
                      "start": 294,
                      "end": 309
                    },
                    "declare": false,
                    "start": 258,
                    "end": 309
                  },
                  {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ElementChildrenAttribute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 352
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
                            "name": "children",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 355,
                            "end": 363
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 365,
                              "end": 368
                            },
                            "start": 363,
                            "end": 368
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 355,
                          "end": 369
                        }
                      ],
                      "start": 353,
                      "end": 371
                    },
                    "declare": false,
                    "start": 318,
                    "end": 371
                  }
                ],
                "start": 44,
                "end": 377
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 30,
              "end": 377
            }
          ],
          "start": 24,
          "end": 379
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 379
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 379
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "predom",
          "optional": false,
          "typeAnnotation": null,
          "start": 396,
          "end": 402
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
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
                  "name": "predom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 406,
                  "end": 412
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "JSX",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 416
                },
                "start": 406,
                "end": 416
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 417,
                "end": 424
              },
              "start": 406,
              "end": 424
            },
            "typeArguments": null,
            "start": 406,
            "end": 424
          },
          "start": 404,
          "end": 424
        },
        "body": null,
        "expression": false,
        "start": 387,
        "end": 425
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 380,
      "end": 425
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 425
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "predom",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 34
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "predom",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 34
          },
          "importKind": "value",
          "start": 28,
          "end": 34
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer2",
        "raw": "\"./renderer2\"",
        "start": 42,
        "end": 55
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 55
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "JSXElement",
        "openingElement": {
          "type": "JSXOpeningElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h",
            "start": 72,
            "end": 73
          },
          "typeArguments": null,
          "attributes": [],
          "selfClosing": false,
          "start": 71,
          "end": 74
        },
        "children": [],
        "closingElement": {
          "type": "JSXClosingElement",
          "name": {
            "type": "JSXIdentifier",
            "name": "h",
            "start": 76,
            "end": 77
          },
          "start": 74,
          "end": 78
        },
        "start": 71,
        "end": 78
      },
      "exportKind": "value",
      "start": 56,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 79
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "dom",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 28
          },
          "importKind": "value",
          "start": 25,
          "end": 28
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./renderer",
        "raw": "\"./renderer\"",
        "start": 36,
        "end": 48
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 16,
      "end": 48
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 67
          },
          "start": 56,
          "end": 67
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./component",
        "raw": "\"./component\"",
        "start": 73,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 49,
      "end": 87
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "elem",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 96
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "prerendered",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 110
          },
          "definite": false,
          "start": 92,
          "end": 110
        }
      ],
      "declare": false,
      "start": 88,
      "end": 111
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 112,
          "end": 116
        },
        "right": {
          "type": "JSXElement",
          "openingElement": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "h",
              "start": 120,
              "end": 121
            },
            "typeArguments": null,
            "attributes": [],
            "selfClosing": false,
            "start": 119,
            "end": 122
          },
          "children": [],
          "closingElement": {
            "type": "JSXClosingElement",
            "name": {
              "type": "JSXIdentifier",
              "name": "h",
              "start": 124,
              "end": 125
            },
            "start": 122,
            "end": 126
          },
          "start": 119,
          "end": 126
        },
        "start": 112,
        "end": 126
      },
      "directive": null,
      "start": 112,
      "end": 127
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 16,
  "end": 162
}
```
