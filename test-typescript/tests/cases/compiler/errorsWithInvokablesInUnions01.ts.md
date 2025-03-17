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
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 57,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 29,
            "end": 55,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 47,
                      "decorators": [],
                      "name": "somePropA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 47,
                      "end": 52,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 49,
                        "end": 52
                      }
                    }
                  }
                ]
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 24,
        "decorators": [],
        "name": "ConstructableA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 59,
      "end": 124,
      "body": {
        "type": "TSInterfaceBody",
        "start": 94,
        "end": 124,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 100,
            "end": 122,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 114,
                      "decorators": [],
                      "name": "TScope",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 86,
              "end": 92,
              "decorators": [],
              "name": "TScope",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 126,
      "end": 238,
      "body": {
        "type": "TSInterfaceBody",
        "start": 162,
        "end": 238,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 168,
            "end": 199,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 171,
              "decorators": [],
              "name": "pre",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 198,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 174,
                "end": 198,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 190,
                  "end": 198,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 191,
                      "end": 197,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 197,
                        "decorators": [],
                        "name": "TScope",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 190,
                  "decorators": [],
                  "name": "IDirectiveLinkFn",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 204,
            "end": 236,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 204,
              "end": 208,
              "decorators": [],
              "name": "post",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 235,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 211,
                "end": 235,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 227,
                  "end": 235,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 228,
                      "end": 234,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 228,
                        "end": 234,
                        "decorators": [],
                        "name": "TScope",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 227,
                  "decorators": [],
                  "name": "IDirectiveLinkFn",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 160,
              "decorators": [],
              "name": "TScope",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 240,
      "end": 346,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 247,
        "end": 346,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 251,
            "end": 346,
            "definite": false,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 257,
                        "end": 273,
                        "decorators": [],
                        "name": "IDirectiveLinkFn",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 284,
                      "end": 298,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 284,
                        "end": 298,
                        "decorators": [],
                        "name": "ConstructableA",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 301,
                      "end": 326,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 301,
                        "end": 318,
                        "decorators": [],
                        "name": "IDirectivePrePost",
                        "optional": false,
                        "typeAnnotation": null
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
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 346,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
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
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 348,
      "end": 476,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 355,
        "end": 476,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 359,
            "end": 476,
            "definite": false,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 381,
                        "decorators": [],
                        "name": "IDirectiveLinkFn",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 392,
                      "end": 406,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 406,
                        "decorators": [],
                        "name": "ConstructableA",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 409,
                      "end": 434,
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
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 426,
                        "decorators": [],
                        "name": "IDirectivePrePost",
                        "optional": false,
                        "typeAnnotation": null
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
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 443,
                "end": 476,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 449,
                    "end": 474,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 468,
                      "decorators": [],
                      "name": "someUnaccountedProp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
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
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
