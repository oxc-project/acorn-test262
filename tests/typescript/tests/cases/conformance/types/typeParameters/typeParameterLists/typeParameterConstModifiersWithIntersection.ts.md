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
        "name": "Config",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 73
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 76
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 91
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 93,
                      "end": 99
                    },
                    "start": 91,
                    "end": 99
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 87,
                  "end": 99
                }
              ],
              "start": 85,
              "end": 101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 74,
            "end": 101
          }
        ],
        "start": 73,
        "end": 102
      },
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
              "name": "useIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 116
                },
                "typeArguments": null,
                "start": 114,
                "end": 116
              },
              "start": 112,
              "end": 116
            },
            "accessibility": null,
            "static": false,
            "start": 107,
            "end": 117
          }
        ],
        "start": 103,
        "end": 119
      },
      "declare": false,
      "start": 57,
      "end": 119
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 138,
        "end": 142
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 148
            },
            "constraint": {
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 163
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 165,
                      "end": 171
                    },
                    "start": 163,
                    "end": 171
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 159,
                  "end": 171
                }
              ],
              "start": 157,
              "end": 173
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 146,
            "end": 173
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TConfig",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 190
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Config",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 205
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 208
                    },
                    "typeArguments": null,
                    "start": 206,
                    "end": 208
                  }
                ],
                "start": 205,
                "end": 209
              },
              "start": 199,
              "end": 209
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true,
            "start": 177,
            "end": 209
          }
        ],
        "start": 142,
        "end": 212
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "config",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
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
                        "name": "produceThing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 223,
                        "end": 235
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 237,
                            "end": 239
                          },
                          "typeArguments": null,
                          "start": 237,
                          "end": 239
                        },
                        "start": 235,
                        "end": 239
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 223,
                      "end": 239
                    }
                  ],
                  "start": 221,
                  "end": 241
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TConfig",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 251
                  },
                  "typeArguments": null,
                  "start": 244,
                  "end": 251
                }
              ],
              "start": 221,
              "end": 251
            },
            "start": 219,
            "end": 251
          },
          "start": 213,
          "end": 251
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TConfig",
            "optional": false,
            "typeAnnotation": null,
            "start": 254,
            "end": 261
          },
          "typeArguments": null,
          "start": 254,
          "end": 261
        },
        "start": 252,
        "end": 261
      },
      "body": null,
      "expression": false,
      "start": 121,
      "end": 262
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
            "start": 270,
            "end": 276
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 283
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produceThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 300
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 302,
                        "end": 304
                      },
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
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 314,
                              "end": 318
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "\"foo\"",
                                  "start": 320,
                                  "end": 325
                                },
                                "start": 320,
                                "end": 325
                              },
                              "start": 318,
                              "end": 325
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 314,
                            "end": 326
                          }
                        ],
                        "start": 308,
                        "end": 330
                      },
                      "start": 302,
                      "end": 330
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 288,
                    "end": 330
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "useIt",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 334,
                      "end": 339
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
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 347,
                            "end": 351
                          },
                          "value": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 353,
                            "end": 358
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 347,
                          "end": 358
                        }
                      ],
                      "start": 341,
                      "end": 363
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 334,
                    "end": 363
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "extra",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 372
                    },
                    "value": {
                      "type": "Literal",
                      "value": 10,
                      "raw": "10",
                      "start": 374,
                      "end": 376
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 367,
                    "end": 376
                  }
                ],
                "start": 284,
                "end": 379
              }
            ],
            "optional": false,
            "start": 279,
            "end": 380
          },
          "definite": false,
          "start": 270,
          "end": 380
        }
      ],
      "declare": false,
      "start": 264,
      "end": 381
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 381
}
```
