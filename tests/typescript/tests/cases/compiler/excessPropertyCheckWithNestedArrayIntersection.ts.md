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
        "name": "ValueOnlyFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 25
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
              "name": "fields",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 45
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 56,
                            "end": 61
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 63,
                                  "end": 69
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 72,
                                  "end": 76
                                }
                              ],
                              "start": 63,
                              "end": 76
                            },
                            "start": 61,
                            "end": 76
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 56,
                          "end": 77
                        }
                      ],
                      "start": 46,
                      "end": 83
                    }
                  ],
                  "start": 45,
                  "end": 84
                },
                "start": 40,
                "end": 84
              },
              "start": 38,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 85
          }
        ],
        "start": 26,
        "end": 87
      },
      "declare": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValueAndKeyFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 115
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
              "name": "fields",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 135
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 146,
                            "end": 149
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 151,
                                  "end": 157
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 160,
                                  "end": 164
                                }
                              ],
                              "start": 151,
                              "end": 164
                            },
                            "start": 149,
                            "end": 164
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 146,
                          "end": 165
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 179
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 181,
                                  "end": 187
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 190,
                                  "end": 194
                                }
                              ],
                              "start": 181,
                              "end": 194
                            },
                            "start": 179,
                            "end": 194
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 174,
                          "end": 195
                        }
                      ],
                      "start": 136,
                      "end": 201
                    }
                  ],
                  "start": 135,
                  "end": 202
                },
                "start": 130,
                "end": 202
              },
              "start": 128,
              "end": 202
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 203
          }
        ],
        "start": 116,
        "end": 205
      },
      "declare": false,
      "start": 88,
      "end": 205
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugRepro",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 224
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
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ValueAndKeyFields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 256
                    },
                    "typeArguments": null,
                    "start": 239,
                    "end": 256
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ValueOnlyFields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 259,
                    "end": 274
                  }
                ],
                "start": 239,
                "end": 274
              },
              "start": 237,
              "end": 274
            },
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 275
          }
        ],
        "start": 225,
        "end": 277
      },
      "declare": false,
      "start": 206,
      "end": 277
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
            "name": "repro",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BugRepro",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 299
                },
                "typeArguments": null,
                "start": 291,
                "end": 299
              },
              "start": 289,
              "end": 299
            },
            "start": 284,
            "end": 299
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
                  "name": "dataType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 314
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 328
                      },
                      "value": {
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
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 339,
                                  "end": 342
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "bla",
                                  "raw": "'bla'",
                                  "start": 344,
                                  "end": 349
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 339,
                                "end": 349
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 385,
                                  "end": 390
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 392,
                                  "end": 396
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 385,
                                "end": 396
                              }
                            ],
                            "start": 331,
                            "end": 403
                          }
                        ],
                        "start": 330,
                        "end": 404
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 322,
                      "end": 404
                    }
                  ],
                  "start": 316,
                  "end": 409
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 306,
                "end": 409
              }
            ],
            "start": 302,
            "end": 411
          },
          "definite": false,
          "start": 284,
          "end": 411
        }
      ],
      "declare": false,
      "start": 278,
      "end": 411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 411
}
```
