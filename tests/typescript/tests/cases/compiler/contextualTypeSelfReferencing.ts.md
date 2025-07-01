__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 79
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 83
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 83
          }
        ],
        "start": 79,
        "end": 84
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 90
          },
          "typeArguments": null,
          "start": 87,
          "end": 90
        },
        "extendsType": {
          "type": "TSStringKeyword",
          "start": 99,
          "end": 105
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "def",
            "optional": false,
            "typeAnnotation": null,
            "start": 110,
            "end": 113
          },
          "typeArguments": null,
          "start": 110,
          "end": 113
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 121
            },
            "typeArguments": null,
            "start": 118,
            "end": 121
          },
          "extendsType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSUnknownKeyword",
                "start": 131,
                "end": 138
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnknownKeyword",
                    "start": 143,
                    "end": 150
                  },
                  "start": 143,
                  "end": 152
                },
                "start": 140,
                "end": 152
              }
            ],
            "start": 130,
            "end": 153
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "def",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 161
            },
            "typeArguments": null,
            "start": 158,
            "end": 161
          },
          "falseType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 176
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "def",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 189
                },
                "typeArguments": null,
                "start": 186,
                "end": 189
              },
              "start": 180,
              "end": 189
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "narrow",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 198
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 199,
                        "end": 202
                      },
                      "typeArguments": null,
                      "start": 199,
                      "end": 202
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "k",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 204
                      },
                      "typeArguments": null,
                      "start": 203,
                      "end": 204
                    },
                    "start": 199,
                    "end": 205
                  }
                ],
                "start": 198,
                "end": 206
              },
              "start": 192,
              "end": 206
            },
            "optional": false,
            "readonly": null,
            "start": 166,
            "end": 213
          },
          "start": 118,
          "end": 213
        },
        "start": 87,
        "end": 213
      },
      "declare": false,
      "start": 68,
      "end": 214
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "def",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 241
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 238,
                      "end": 241
                    }
                  ],
                  "start": 237,
                  "end": 242
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "def",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "narrow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 254
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "def",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 255,
                                "end": 258
                              },
                              "typeArguments": null,
                              "start": 255,
                              "end": 258
                            }
                          ],
                          "start": 254,
                          "end": 259
                        },
                        "start": 248,
                        "end": 259
                      },
                      "start": 246,
                      "end": 259
                    },
                    "start": 243,
                    "end": 259
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "def",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 264,
                      "end": 267
                    },
                    "typeArguments": null,
                    "start": 264,
                    "end": 267
                  },
                  "start": 261,
                  "end": 267
                },
                "start": 237,
                "end": 267
              },
              "start": 235,
              "end": 267
            },
            "start": 230,
            "end": 267
          },
          "init": null,
          "definite": false,
          "start": 230,
          "end": 267
        }
      ],
      "declare": true,
      "start": 216,
      "end": 268
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 276,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "parse",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 290
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 295
                        },
                        "value": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 297,
                          "end": 302
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 294,
                        "end": 302
                      }
                    ],
                    "start": 292,
                    "end": 304
                  }
                ],
                "start": 291,
                "end": 305
              }
            ],
            "optional": false,
            "start": 285,
            "end": 306
          },
          "definite": false,
          "start": 276,
          "end": 306
        }
      ],
      "declare": false,
      "start": 270,
      "end": 307
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 307
}
```
