__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 511,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 44,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 67,
        "end": 74,
        "raw": "\"react\"",
        "value": "react"
      },
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
            "optional": false
          }
        }
      ]
    },
    {
      "type": "TSModuleDeclaration",
      "start": 77,
      "end": 336,
      "body": {
        "type": "TSModuleBlock",
        "start": 92,
        "end": 336,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 96,
            "end": 334,
            "body": {
              "type": "TSModuleBlock",
              "start": 110,
              "end": 334,
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "start": 116,
                  "end": 330,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 132,
                    "decorators": [],
                    "name": "ElementType",
                    "optional": false
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
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 280,
                                "end": 297,
                                "decorators": [],
                                "name": "IntrinsicElements",
                                "optional": false
                              }
                            }
                          }
                        },
                        "objectType": {
                          "type": "TSMappedType",
                          "start": 152,
                          "end": 269,
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
                                  "optional": false
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 178,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "IntrinsicElements",
                                  "optional": false
                                }
                              }
                            }
                          },
                          "key": {
                            "type": "Identifier",
                            "start": 163,
                            "end": 164,
                            "decorators": [],
                            "name": "K",
                            "optional": false
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
                                "optional": false
                              }
                            },
                            "extendsType": {
                              "type": "TSIndexedAccessType",
                              "start": 208,
                              "end": 232,
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
                                  "optional": false
                                }
                              },
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
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 212,
                                    "end": 229,
                                    "decorators": [],
                                    "name": "IntrinsicElements",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "falseType": {
                              "type": "TSNeverKeyword",
                              "start": 255,
                              "end": 260
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
                                "optional": false
                              }
                            }
                          }
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 307,
                        "end": 329,
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
                                "optional": false
                              }
                            }
                          ]
                        },
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
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 313,
                            "end": 326,
                            "decorators": [],
                            "name": "ComponentType",
                            "optional": false
                          }
                        }
                      }
                    ]
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
                        "const": false,
                        "default": {
                          "type": "TSAnyKeyword",
                          "start": 137,
                          "end": 140
                        },
                        "in": false,
                        "name": {
                          "type": "Identifier",
                          "start": 133,
                          "end": 134,
                          "decorators": [],
                          "name": "P",
                          "optional": false
                        },
                        "out": false
                      }
                    ]
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 109,
              "decorators": [],
              "name": "JSX",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": true,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 91,
        "decorators": [],
        "name": "global",
        "optional": false
      },
      "kind": "global"
    },
    {
      "type": "VariableDeclaration",
      "start": 386,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 390,
          "end": 401,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 390,
            "end": 391,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 394,
            "end": 401,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 394,
              "end": 401,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 395,
                "end": 398,
                "name": "div"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 510,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 495,
          "end": 509,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 495,
            "end": 496,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "JSXElement",
            "start": 499,
            "end": 509,
            "children": [],
            "closingElement": null,
            "openingElement": {
              "type": "JSXOpeningElement",
              "start": 499,
              "end": 509,
              "attributes": [],
              "name": {
                "type": "JSXIdentifier",
                "start": 500,
                "end": 506,
                "name": "ruhroh"
              },
              "selfClosing": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
