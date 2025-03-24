__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 347,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 21,
        "end": 93,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 27,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 52,
              "decorators": [],
              "name": "initialLeftPageTransforms",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 90,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 55,
                "end": 90,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 56,
                    "end": 69,
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 69,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 63,
                        "end": 69
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 71,
                  "end": 90,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 74,
                    "end": 90,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 74,
                      "end": 88,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 88,
                        "decorators": [],
                        "name": "NamedTransform",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "typeParameters": null
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "IBookStyle",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 95,
      "end": 156,
      "body": {
        "type": "TSInterfaceBody",
        "start": 120,
        "end": 156,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 126,
            "end": 154,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 127,
                "end": 139,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 131,
                  "end": 139,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 133,
                    "end": 139
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 153,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 142,
                "end": 153,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 153,
                  "decorators": [],
                  "name": "Transform3D",
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
        "start": 105,
        "end": 119,
        "decorators": [],
        "name": "NamedTransform",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 158,
      "end": 206,
      "body": {
        "type": "TSInterfaceBody",
        "start": 180,
        "end": 206,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 186,
            "end": 204,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 195,
              "decorators": [],
              "name": "cachedCss",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 179,
        "decorators": [],
        "name": "Transform3D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 208,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 212,
          "end": 347,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 212,
            "end": 229,
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 229,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 219,
                "end": 229,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 229,
                  "decorators": [],
                  "name": "IBookStyle",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 232,
            "end": 347,
            "properties": [
              {
                "type": "Property",
                "start": 238,
                "end": 345,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 263,
                  "decorators": [],
                  "name": "initialLeftPageTransforms",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 265,
                  "end": 345,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 284,
                    "end": 345,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 294,
                        "end": 339,
                        "argument": {
                          "type": "ArrayExpression",
                          "start": 301,
                          "end": 338,
                          "elements": [
                            {
                              "type": "ObjectExpression",
                              "start": 315,
                              "end": 328,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 316,
                                  "end": 326,
                                  "computed": false,
                                  "key": {
                                    "type": "Literal",
                                    "start": 316,
                                    "end": 320,
                                    "raw": "'ry'",
                                    "value": "ry"
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 322,
                                    "end": 326,
                                    "raw": "null",
                                    "value": null
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 266,
                      "end": 279,
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 271,
                        "end": 279,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 273,
                          "end": 279
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
