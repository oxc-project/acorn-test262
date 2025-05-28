__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 476,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 57,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "ConstructableA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
                      "decorators": [],
                      "name": "somePropA",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "IDirectiveLinkFn",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "TScope",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
                "decorators": [],
                "name": "scope",
                "optional": false,
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
                      "decorators": [],
                      "name": "TScope",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
        "decorators": [],
        "name": "IDirectivePrePost",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "TScope",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
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
              "decorators": [],
              "name": "pre",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "IDirectiveLinkFn",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "TScope",
                        "optional": false,
                        "typeAnnotation": null
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
              "decorators": [],
              "name": "post",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "IDirectiveLinkFn",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "TScope",
                        "optional": false,
                        "typeAnnotation": null
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
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 251,
            "end": 346,
            "id": {
              "type": "Identifier",
              "start": 251,
              "end": 326,
              "decorators": [],
              "name": "blah",
              "optional": false,
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
                        "decorators": [],
                        "name": "IDirectiveLinkFn",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "ConstructableA",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "IDirectivePrePost",
                        "optional": false,
                        "typeAnnotation": null
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
              }
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 329,
              "end": 346,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 330,
                  "end": 339,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 331,
                    "end": 339,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 333,
                      "end": 339
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 346,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 348,
      "end": 476,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 355,
        "end": 476,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 359,
            "end": 476,
            "id": {
              "type": "Identifier",
              "start": 359,
              "end": 434,
              "decorators": [],
              "name": "ctor",
              "optional": false,
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
                        "decorators": [],
                        "name": "IDirectiveLinkFn",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "ConstructableA",
                        "optional": false,
                        "typeAnnotation": null
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
                        "decorators": [],
                        "name": "IDirectivePrePost",
                        "optional": false,
                        "typeAnnotation": null
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
              }
            },
            "init": {
              "type": "ClassExpression",
              "start": 437,
              "end": 476,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 443,
                "end": 476,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 449,
                    "end": 474,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 468,
                      "decorators": [],
                      "name": "someUnaccountedProp",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
