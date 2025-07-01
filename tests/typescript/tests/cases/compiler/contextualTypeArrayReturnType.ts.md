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
        "name": "IBookStyle",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
      },
      "typeParameters": null,
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
              "name": "initialLeftPageTransforms",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 63,
                        "end": 69
                      },
                      "start": 61,
                      "end": 69
                    },
                    "start": 56,
                    "end": 69
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NamedTransform",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 74,
                        "end": 88
                      },
                      "typeArguments": null,
                      "start": 74,
                      "end": 88
                    },
                    "start": 74,
                    "end": 90
                  },
                  "start": 71,
                  "end": 90
                },
                "start": 55,
                "end": 90
              },
              "start": 53,
              "end": 90
            },
            "accessibility": null,
            "static": false,
            "start": 27,
            "end": 91
          }
        ],
        "start": 21,
        "end": 93
      },
      "declare": false,
      "start": 0,
      "end": 93
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NamedTransform",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 119
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
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 133,
                    "end": 139
                  },
                  "start": 131,
                  "end": 139
                },
                "start": 127,
                "end": 139
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Transform3D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 153
                },
                "typeArguments": null,
                "start": 142,
                "end": 153
              },
              "start": 140,
              "end": 153
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 126,
            "end": 154
          }
        ],
        "start": 120,
        "end": 156
      },
      "declare": false,
      "start": 95,
      "end": 156
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Transform3D",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 179
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
              "name": "cachedCss",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 195
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 197,
                "end": 203
              },
              "start": 195,
              "end": 203
            },
            "accessibility": null,
            "static": false,
            "start": 186,
            "end": 204
          }
        ],
        "start": 180,
        "end": 206
      },
      "declare": false,
      "start": 158,
      "end": 206
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "style",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IBookStyle",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 219,
                  "end": 229
                },
                "typeArguments": null,
                "start": 219,
                "end": 229
              },
              "start": 217,
              "end": 229
            },
            "start": 212,
            "end": 229
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
                  "name": "initialLeftPageTransforms",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 263
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 273,
                          "end": 279
                        },
                        "start": 271,
                        "end": 279
                      },
                      "start": 266,
                      "end": 279
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Literal",
                                    "value": "ry",
                                    "raw": "'ry'",
                                    "start": 316,
                                    "end": 320
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 322,
                                    "end": 326
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 316,
                                  "end": 326
                                }
                              ],
                              "start": 315,
                              "end": 328
                            }
                          ],
                          "start": 301,
                          "end": 338
                        },
                        "start": 294,
                        "end": 339
                      }
                    ],
                    "start": 284,
                    "end": 345
                  },
                  "id": null,
                  "generator": false,
                  "start": 265,
                  "end": 345
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 238,
                "end": 345
              }
            ],
            "start": 232,
            "end": 347
          },
          "definite": false,
          "start": 212,
          "end": 347
        }
      ],
      "declare": false,
      "start": 208,
      "end": 347
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 347
}
```
