__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 411,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 25,
        "decorators": [],
        "name": "ValueOnlyFields",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 26,
        "end": 87,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 85,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 38,
              "decorators": [],
              "name": "fields",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 84,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 45,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 45,
                  "end": 84,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 46,
                      "end": 83,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 56,
                          "end": 77,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 56,
                            "end": 61,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 61,
                            "end": 76,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 63,
                              "end": 76,
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
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "type": "TSInterfaceDeclaration",
      "start": 88,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 115,
        "decorators": [],
        "name": "ValueAndKeyFields",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 116,
        "end": 205,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 122,
            "end": 203,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 128,
              "decorators": [],
              "name": "fields",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 135,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 135,
                  "end": 202,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 136,
                      "end": 201,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 146,
                          "end": 165,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 149,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 149,
                            "end": 164,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 151,
                              "end": 164,
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
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 174,
                          "end": 195,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 174,
                            "end": 179,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 179,
                            "end": 194,
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "start": 181,
                              "end": 194,
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
                              ]
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
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
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 277,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 224,
        "decorators": [],
        "name": "BugRepro",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 225,
        "end": 277,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 229,
            "end": 275,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 229,
              "end": 237,
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 274,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 239,
                "end": 274,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 239,
                    "end": 256,
                    "typeName": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 256,
                      "decorators": [],
                      "name": "ValueAndKeyFields",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 259,
                    "end": 274,
                    "typeName": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 274,
                      "decorators": [],
                      "name": "ValueOnlyFields",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 278,
      "end": 411,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 411,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 299,
            "decorators": [],
            "name": "repro",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 289,
              "end": 299,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 291,
                "end": 299,
                "typeName": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 299,
                  "decorators": [],
                  "name": "BugRepro",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 302,
            "end": 411,
            "properties": [
              {
                "type": "Property",
                "start": 306,
                "end": 409,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 314,
                  "decorators": [],
                  "name": "dataType",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 316,
                  "end": 409,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 322,
                      "end": 404,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 322,
                        "end": 328,
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "start": 330,
                        "end": 404,
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "start": 331,
                            "end": 403,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 339,
                                "end": 349,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 339,
                                  "end": 342,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 344,
                                  "end": 349,
                                  "value": "bla",
                                  "raw": "'bla'"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 385,
                                "end": 396,
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "start": 385,
                                  "end": 390,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 392,
                                  "end": 396,
                                  "value": null,
                                  "raw": "null"
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false
                              }
                            ]
                          }
                        ]
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
