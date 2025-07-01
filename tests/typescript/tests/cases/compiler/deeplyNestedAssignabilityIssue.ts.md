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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          }
        ],
        "start": 12,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Large",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 47
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
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 54,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
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
                      "name": "another",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 82
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
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
                              "name": "more",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 98,
                              "end": 102
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
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
                                      "name": "thing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 122,
                                      "end": 127
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 129,
                                          "end": 130
                                        },
                                        "typeArguments": null,
                                        "start": 129,
                                        "end": 130
                                      },
                                      "start": 127,
                                      "end": 130
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 122,
                                    "end": 131
                                  }
                                ],
                                "start": 104,
                                "end": 145
                              },
                              "start": 102,
                              "end": 145
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 98,
                            "end": 145
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "yetstill",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 158,
                              "end": 166
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
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
                                      "name": "another",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 186,
                                      "end": 193
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "A",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 195,
                                          "end": 196
                                        },
                                        "typeArguments": null,
                                        "start": 195,
                                        "end": 196
                                      },
                                      "start": 193,
                                      "end": 196
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 186,
                                    "end": 197
                                  }
                                ],
                                "start": 168,
                                "end": 211
                              },
                              "start": 166,
                              "end": 211
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 158,
                            "end": 211
                          }
                        ],
                        "start": 84,
                        "end": 221
                      },
                      "start": 82,
                      "end": 221
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 75,
                    "end": 221
                  }
                ],
                "start": 65,
                "end": 227
              },
              "start": 63,
              "end": 227
            },
            "accessibility": null,
            "static": false,
            "start": 54,
            "end": 227
          }
        ],
        "start": 48,
        "end": 229
      },
      "declare": false,
      "start": 32,
      "end": 229
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Large",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 245
                },
                "typeArguments": null,
                "start": 240,
                "end": 245
              },
              "start": 238,
              "end": 245
            },
            "start": 237,
            "end": 245
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
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 263
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
                        "name": "another",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 282
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
                              "name": "more",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 298,
                              "end": 302
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
                                    "name": "thing",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 322,
                                    "end": 327
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 329,
                                    "end": 331
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 322,
                                  "end": 331
                                }
                              ],
                              "start": 304,
                              "end": 345
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 298,
                            "end": 345
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "yetstill",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 359,
                              "end": 367
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
                                    "name": "another",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 387,
                                    "end": 394
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 396,
                                    "end": 398
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 387,
                                  "end": 398
                                }
                              ],
                              "start": 369,
                              "end": 412
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 359,
                            "end": 412
                          }
                        ],
                        "start": 284,
                        "end": 422
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 275,
                      "end": 422
                    }
                  ],
                  "start": 265,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 254,
                "end": 428
              }
            ],
            "start": 248,
            "end": 430
          },
          "definite": false,
          "start": 237,
          "end": 430
        }
      ],
      "declare": false,
      "start": 231,
      "end": 430
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 430
}
```
