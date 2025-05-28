__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 510,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 51,
          "end": 61,
          "local": {
            "type": "Identifier",
            "start": 56,
            "end": 61,
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "value": "react",
        "raw": "\"react\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 77,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 91,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 336,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 96,
            "end": 334,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 110,
              "end": 334,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 116,
                  "end": 330,
                  "id": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 132,
                    "decorators": [],
                    "name": "ElementType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 132,
                    "end": 141,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 133,
                        "end": 140,
                        "name": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "decorators": [],
                          "name": "P",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": null,
                        "default": {
                          "type": "TSAnyKeyword",
                          "start": 137,
                          "end": 140
                        },
                        "in": false,
                        "out": false,
                        "const": false
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 150,
                    "end": 329,
                    "types": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 152,
                        "end": 298,
                        "objectType": {
                          "type": "TSMappedType",
                          "start": 152,
                          "end": 269,
                          "key": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 164,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "constraint": {
                            "type": "TSTypeOperator",
                            "start": 168,
                            "end": 195,
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 174,
                              "end": 195,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 174,
                                "end": 195,
                                "left": {
                                  "type": "Identifier",
                                  "start": 174,
                                  "end": 177,
                                  "decorators": [],
                                  "name": "JSX",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "IntrinsicElements",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          },
                          "nameType": null,
                          "typeAnnotation": {
                            "type": "TSConditionalType",
                            "start": 198,
                            "end": 260,
                            "checkType": {
                              "type": "TSTypeReference",
                              "start": 198,
                              "end": 199,
                              "typeName": {
                                "type": "Identifier",
                                "start": 198,
                                "end": 199,
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "extendsType": {
                              "type": "TSIndexedAccessType",
                              "start": 208,
                              "end": 232,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 208,
                                "end": 229,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 208,
                                  "end": 229,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 208,
                                    "end": 211,
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 212,
                                    "end": 229,
                                    "decorators": [],
                                    "name": "IntrinsicElements",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 230,
                                "end": 231,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 230,
                                  "end": 231,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "trueType": {
                              "type": "TSTypeReference",
                              "start": 243,
                              "end": 244,
                              "typeName": {
                                "type": "Identifier",
                                "start": 243,
                                "end": 244,
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 255,
                              "end": 260
                            }
                          },
                          "optional": false,
                          "readonly": null
                        },
                        "indexType": {
                          "type": "TSTypeOperator",
                          "start": 270,
                          "end": 297,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 276,
                            "end": 297,
                            "typeName": {
                              "type": "TSQualifiedName",
                              "start": 276,
                              "end": 297,
                              "left": {
                                "type": "Identifier",
                                "start": 276,
                                "end": 279,
                                "decorators": [],
                                "name": "JSX",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 280,
                                "end": 297,
                                "decorators": [],
                                "name": "IntrinsicElements",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 307,
                        "end": 329,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 307,
                          "end": 326,
                          "left": {
                            "type": "Identifier",
                            "start": 307,
                            "end": 312,
                            "decorators": [],
                            "name": "React",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 326,
                            "decorators": [],
                            "name": "ComponentType",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 326,
                          "end": 329,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 327,
                              "end": 328,
                              "typeName": {
                                "type": "Identifier",
                                "start": 327,
                                "end": 328,
                                "decorators": [],
                                "name": "P",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 402,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 394,
            "end": 401,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 394,
              "end": 401,
              "name": {
                "type": "JSXIdentifier",
                "start": 395,
                "end": 398,
                "name": "div"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 510,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 509,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 496,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "JSXElement",
            "start": 499,
            "end": 509,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 499,
              "end": 509,
              "name": {
                "type": "JSXIdentifier",
                "start": 500,
                "end": 506,
                "name": "ruhroh"
              },
              "typeArguments": null,
              "attributes": [],
              "selfClosing": true
            },
            "children": [],
            "closingElement": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
