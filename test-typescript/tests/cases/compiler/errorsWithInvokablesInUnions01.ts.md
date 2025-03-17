__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 477,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "name": "ConstructableA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 57,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 29,
            "end": 55,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 36,
                "end": 54,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 38,
                    "end": 52,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 47,
                      "name": "somePropA",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 52,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 49,
                        "end": 52
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 59,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 85,
        "name": "IDirectiveLinkFn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 85,
        "end": 93,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 86,
            "end": 92,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 92,
              "name": "TScope",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 124,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 100,
            "end": 122,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 114,
                "name": "scope",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 106,
                  "end": 114,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 108,
                    "end": 114,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 114,
                      "name": "TScope",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 121,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 117,
                "end": 121
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 126,
      "end": 238,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 153,
        "name": "IDirectivePrePost",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 161,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 160,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 160,
              "name": "TScope",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 162,
        "end": 238,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 168,
            "end": 199,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "name": "pre",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 198,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 198,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 190,
                  "name": "IDirectiveLinkFn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 190,
                  "end": 198,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 197,
                      "typeName": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 197,
                        "name": "TScope",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 204,
            "end": 236,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 208,
              "name": "post",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 235,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 211,
                "end": 235,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 227,
                  "name": "IDirectiveLinkFn",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 227,
                  "end": 235,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 228,
                      "end": 234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 234,
                        "name": "TScope",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 240,
      "end": 346,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 247,
        "end": 346,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 251,
            "end": 346,
            "id": {
              "type": "Identifier",
              "start": 251,
              "end": 326,
              "name": "blah",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 255,
                "end": 326,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 257,
                  "end": 326,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 257,
                      "end": 281,
                      "typeName": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 273,
                        "name": "IDirectiveLinkFn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 273,
                        "end": 281,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 274,
                            "end": 280
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 284,
                      "end": 298,
                      "typeName": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 298,
                        "name": "ConstructableA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 301,
                      "end": 326,
                      "typeName": {
                        "type": "Identifier",
                        "start": 301,
                        "end": 318,
                        "name": "IDirectivePrePost",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 318,
                        "end": 326,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 319,
                            "end": 325
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 329,
              "end": 346,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 330,
                  "end": 339,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 339,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 333,
                      "end": 339
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 346,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 348,
      "end": 476,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 355,
        "end": 476,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 359,
            "end": 476,
            "id": {
              "type": "Identifier",
              "start": 359,
              "end": 434,
              "name": "ctor",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 363,
                "end": 434,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 365,
                  "end": 434,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 365,
                      "end": 389,
                      "typeName": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 381,
                        "name": "IDirectiveLinkFn",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 381,
                        "end": 389,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 382,
                            "end": 388
                          }
                        ]
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 392,
                      "end": 406,
                      "typeName": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 406,
                        "name": "ConstructableA",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 409,
                      "end": 434,
                      "typeName": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 426,
                        "name": "IDirectivePrePost",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 426,
                        "end": 434,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 427,
                            "end": 433
                          }
                        ]
                      }
                    }
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ClassExpression",
              "start": 437,
              "end": 476,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 443,
                "end": 476,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 449,
                    "end": 474,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 468,
                      "name": "someUnaccountedProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": null,
                    "decorators": [],
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 468,
                      "end": 473,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 470,
                        "end": 473
                      }
                    },
                    "accessibility": null
                  }
                ]
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
