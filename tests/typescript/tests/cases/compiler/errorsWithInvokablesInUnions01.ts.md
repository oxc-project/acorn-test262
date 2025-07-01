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
        "name": "ConstructableA",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 24
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
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
                      "name": "somePropA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 47
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 49,
                        "end": 52
                      },
                      "start": 47,
                      "end": 52
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 38,
                    "end": 52
                  }
                ],
                "start": 36,
                "end": 54
              },
              "start": 34,
              "end": 54
            },
            "start": 29,
            "end": 55
          }
        ],
        "start": 25,
        "end": 57
      },
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDirectiveLinkFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 85
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TScope",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 92
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 86,
            "end": 92
          }
        ],
        "start": 85,
        "end": 93
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "scope",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TScope",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 108,
                      "end": 114
                    },
                    "typeArguments": null,
                    "start": 108,
                    "end": 114
                  },
                  "start": 106,
                  "end": 114
                },
                "start": 101,
                "end": 114
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 117,
                "end": 121
              },
              "start": 115,
              "end": 121
            },
            "start": 100,
            "end": 122
          }
        ],
        "start": 94,
        "end": 124
      },
      "declare": false,
      "start": 59,
      "end": 124
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDirectivePrePost",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 153
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TScope",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 160
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 160
          }
        ],
        "start": 153,
        "end": 161
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pre",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDirectiveLinkFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 190
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 197
                      },
                      "typeArguments": null,
                      "start": 191,
                      "end": 197
                    }
                  ],
                  "start": 190,
                  "end": 198
                },
                "start": 174,
                "end": 198
              },
              "start": 172,
              "end": 198
            },
            "accessibility": null,
            "static": false,
            "start": 168,
            "end": 199
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "post",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 208
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDirectiveLinkFn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 227
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TScope",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 228,
                        "end": 234
                      },
                      "typeArguments": null,
                      "start": 228,
                      "end": 234
                    }
                  ],
                  "start": 227,
                  "end": 235
                },
                "start": 211,
                "end": 235
              },
              "start": 209,
              "end": 235
            },
            "accessibility": null,
            "static": false,
            "start": 204,
            "end": 236
          }
        ],
        "start": 162,
        "end": 238
      },
      "declare": false,
      "start": 126,
      "end": 238
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "blah",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IDirectiveLinkFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 257,
                        "end": 273
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 274,
                            "end": 280
                          }
                        ],
                        "start": 273,
                        "end": 281
                      },
                      "start": 257,
                      "end": 281
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ConstructableA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 298
                      },
                      "typeArguments": null,
                      "start": 284,
                      "end": 298
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IDirectivePrePost",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 301,
                        "end": 318
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 319,
                            "end": 325
                          }
                        ],
                        "start": 318,
                        "end": 326
                      },
                      "start": 301,
                      "end": 326
                    }
                  ],
                  "start": 257,
                  "end": 326
                },
                "start": 255,
                "end": 326
              },
              "start": 251,
              "end": 326
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 333,
                      "end": 339
                    },
                    "start": 331,
                    "end": 339
                  },
                  "start": 330,
                  "end": 339
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 344,
                "end": 346
              },
              "id": null,
              "generator": false,
              "start": 329,
              "end": 346
            },
            "definite": false,
            "start": 251,
            "end": 346
          }
        ],
        "declare": false,
        "start": 247,
        "end": 346
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 240,
      "end": 346
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ctor",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IDirectiveLinkFn",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 365,
                        "end": 381
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 382,
                            "end": 388
                          }
                        ],
                        "start": 381,
                        "end": 389
                      },
                      "start": 365,
                      "end": 389
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ConstructableA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 392,
                        "end": 406
                      },
                      "typeArguments": null,
                      "start": 392,
                      "end": 406
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IDirectivePrePost",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 426
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 427,
                            "end": 433
                          }
                        ],
                        "start": 426,
                        "end": 434
                      },
                      "start": 409,
                      "end": 434
                    }
                  ],
                  "start": 365,
                  "end": 434
                },
                "start": 363,
                "end": 434
              },
              "start": 359,
              "end": 434
            },
            "init": {
              "type": "ClassExpression",
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "someUnaccountedProp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 449,
                      "end": 468
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 470,
                        "end": 473
                      },
                      "start": 468,
                      "end": 473
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
                    "start": 449,
                    "end": 474
                  }
                ],
                "start": 443,
                "end": 476
              },
              "abstract": false,
              "declare": false,
              "start": 437,
              "end": 476
            },
            "definite": false,
            "start": 359,
            "end": 476
          }
        ],
        "declare": false,
        "start": 355,
        "end": 476
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 348,
      "end": 476
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 476
}
```
