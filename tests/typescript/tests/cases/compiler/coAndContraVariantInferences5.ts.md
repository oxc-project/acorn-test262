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
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 13,
              "end": 16
            },
            "start": 13,
            "end": 16
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 19,
              "end": 22
            },
            "start": 19,
            "end": 22
          }
        ],
        "start": 13,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SelectOptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 63
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Thing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 69
                    },
                    "typeArguments": null,
                    "start": 64,
                    "end": 69
                  }
                ],
                "start": 63,
                "end": 70
              },
              "start": 50,
              "end": 70
            },
            "start": 48,
            "end": 70
          },
          "start": 41,
          "end": 70
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "onChange",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "status",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thing",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 100
                          },
                          "typeArguments": null,
                          "start": 95,
                          "end": 100
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 103,
                          "end": 107
                        }
                      ],
                      "start": 95,
                      "end": 107
                    },
                    "start": 93,
                    "end": 107
                  },
                  "start": 87,
                  "end": 107
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 112,
                  "end": 116
                },
                "start": 109,
                "end": 116
              },
              "start": 86,
              "end": 116
            },
            "start": 84,
            "end": 116
          },
          "start": 76,
          "end": 116
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 121,
          "end": 125
        },
        "start": 119,
        "end": 125
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "select",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 138
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
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 156
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 156
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 149,
                      "end": 156
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onChange",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 174
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "onChange",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 174
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 166,
                      "end": 174
                    }
                  ],
                  "start": 139,
                  "end": 181
                }
              ],
              "optional": false,
              "start": 132,
              "end": 182
            },
            "directive": null,
            "start": 132,
            "end": 183
          }
        ],
        "start": 126,
        "end": 185
      },
      "expression": false,
      "start": 25,
      "end": 185
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "select",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 210
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
              "name": "KeyT",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 215
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 224,
              "end": 230
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 211,
            "end": 230
          }
        ],
        "start": 210,
        "end": 231
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "SelectProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 250
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "KeyT",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 255
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 255
                  }
                ],
                "start": 250,
                "end": 256
              },
              "start": 239,
              "end": 256
            },
            "start": 237,
            "end": 256
          },
          "start": 232,
          "end": 256
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 259,
          "end": 263
        },
        "start": 257,
        "end": 263
      },
      "body": null,
      "expression": false,
      "start": 187,
      "end": 264
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 282
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyT",
              "optional": false,
              "typeAnnotation": null,
              "start": 283,
              "end": 287
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 296,
              "end": 302
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 283,
            "end": 302
          }
        ],
        "start": 282,
        "end": 303
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "options",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 319
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SelectOptions",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 322,
                  "end": 335
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "KeyT",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 340
                      },
                      "typeArguments": null,
                      "start": 336,
                      "end": 340
                    }
                  ],
                  "start": 335,
                  "end": 341
                },
                "start": 322,
                "end": 341
              },
              "start": 320,
              "end": 341
            },
            "accessibility": null,
            "static": false,
            "start": 312,
            "end": 342
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onChange",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 355
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
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "KeyT",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 363,
                          "end": 367
                        },
                        "typeArguments": null,
                        "start": 363,
                        "end": 367
                      },
                      "start": 361,
                      "end": 367
                    },
                    "start": 358,
                    "end": 367
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 372,
                    "end": 376
                  },
                  "start": 369,
                  "end": 376
                },
                "start": 357,
                "end": 376
              },
              "start": 355,
              "end": 376
            },
            "accessibility": null,
            "static": false,
            "start": 347,
            "end": 377
          }
        ],
        "start": 306,
        "end": 379
      },
      "declare": false,
      "start": 266,
      "end": 380
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 387,
        "end": 400
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "KeyT",
              "optional": false,
              "typeAnnotation": null,
              "start": 401,
              "end": 405
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 414,
              "end": 420
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 401,
            "end": 420
          }
        ],
        "start": 400,
        "end": 421
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 430,
              "end": 435
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
                        "start": 437,
                        "end": 440
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "KeyT",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 442,
                            "end": 446
                          },
                          "typeArguments": null,
                          "start": 442,
                          "end": 446
                        },
                        "start": 440,
                        "end": 446
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 437,
                      "end": 446
                    }
                  ],
                  "start": 436,
                  "end": 447
                }
              ],
              "start": 435,
              "end": 448
            },
            "start": 430,
            "end": 448
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null,
              "start": 455,
              "end": 460
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "KeyT",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 465
                  },
                  "typeArguments": null,
                  "start": 461,
                  "end": 465
                }
              ],
              "start": 460,
              "end": 466
            },
            "start": 455,
            "end": 466
          }
        ],
        "start": 428,
        "end": 466
      },
      "declare": false,
      "start": 382,
      "end": 467
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 467
}
```
