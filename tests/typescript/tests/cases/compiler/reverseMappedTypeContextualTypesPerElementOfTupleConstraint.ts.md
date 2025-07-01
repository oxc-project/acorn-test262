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
        "name": "Tuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 12
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 12
          }
        ],
        "start": 10,
        "end": 13
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "readonly",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 27
              },
              "typeArguments": null,
              "start": 26,
              "end": 27
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 33
                  },
                  "typeArguments": null,
                  "start": 32,
                  "end": 33
                },
                "start": 32,
                "end": 35
              },
              "start": 29,
              "end": 35
            }
          ],
          "start": 25,
          "end": 36
        },
        "start": 16,
        "end": 36
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bindAll",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 63
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
              "name": "TTarget",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 74
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 94
              },
              "typeArguments": null,
              "start": 83,
              "end": 94
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 67,
            "end": 94
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 104
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Tuple",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 118
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TTarget",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 132
                          },
                          "typeArguments": null,
                          "start": 125,
                          "end": 132
                        },
                        "start": 119,
                        "end": 132
                      },
                      {
                        "type": "TSTemplateLiteralType",
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "on",
                              "cooked": "on"
                            },
                            "tail": false,
                            "start": 135,
                            "end": 140
                          },
                          {
                            "type": "TemplateElement",
                            "value": {
                              "raw": "",
                              "cooked": ""
                            },
                            "tail": true,
                            "start": 143,
                            "end": 145
                          }
                        ],
                        "types": [
                          {
                            "type": "TSAnyKeyword",
                            "start": 140,
                            "end": 143
                          }
                        ],
                        "start": 135,
                        "end": 145
                      }
                    ],
                    "start": 119,
                    "end": 145
                  }
                ],
                "start": 118,
                "end": 146
              },
              "start": 113,
              "end": 146
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 98,
            "end": 146
          }
        ],
        "start": 63,
        "end": 148
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TTarget",
                "optional": false,
                "typeAnnotation": null,
                "start": 160,
                "end": 167
              },
              "typeArguments": null,
              "start": 160,
              "end": 167
            },
            "start": 158,
            "end": 167
          },
          "start": 152,
          "end": 167
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bindings",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 188,
                "end": 189
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TTypes",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 199,
                    "end": 205
                  },
                  "typeArguments": null,
                  "start": 199,
                  "end": 205
                },
                "start": 193,
                "end": 205
              },
              "nameType": null,
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
                      "start": 216,
                      "end": 220
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TTypes",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 228
                          },
                          "typeArguments": null,
                          "start": 222,
                          "end": 228
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 229,
                            "end": 230
                          },
                          "typeArguments": null,
                          "start": 229,
                          "end": 230
                        },
                        "start": 222,
                        "end": 231
                      },
                      "start": 220,
                      "end": 231
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 216,
                    "end": 232
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 247
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
                            "name": "ev",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSIndexedAccessType",
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Parameters",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 263,
                                    "end": 273
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Extract",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 274,
                                          "end": 281
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
                                                  "name": "TTarget",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 282,
                                                  "end": 289
                                                },
                                                "typeArguments": null,
                                                "start": 282,
                                                "end": 289
                                              },
                                              "indexType": {
                                                "type": "TSIndexedAccessType",
                                                "objectType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "TTypes",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 290,
                                                    "end": 296
                                                  },
                                                  "typeArguments": null,
                                                  "start": 290,
                                                  "end": 296
                                                },
                                                "indexType": {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "K",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 297,
                                                    "end": 298
                                                  },
                                                  "typeArguments": null,
                                                  "start": 297,
                                                  "end": 298
                                                },
                                                "start": 290,
                                                "end": 299
                                              },
                                              "start": 282,
                                              "end": 300
                                            },
                                            {
                                              "type": "TSFunctionType",
                                              "typeParameters": null,
                                              "params": [
                                                {
                                                  "type": "RestElement",
                                                  "decorators": [],
                                                  "argument": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "args",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 306,
                                                    "end": 310
                                                  },
                                                  "optional": false,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "typeAnnotation": {
                                                      "type": "TSArrayType",
                                                      "elementType": {
                                                        "type": "TSAnyKeyword",
                                                        "start": 312,
                                                        "end": 315
                                                      },
                                                      "start": 312,
                                                      "end": 317
                                                    },
                                                    "start": 310,
                                                    "end": 317
                                                  },
                                                  "value": null,
                                                  "start": 303,
                                                  "end": 317
                                                }
                                              ],
                                              "returnType": {
                                                "type": "TSTypeAnnotation",
                                                "typeAnnotation": {
                                                  "type": "TSAnyKeyword",
                                                  "start": 322,
                                                  "end": 325
                                                },
                                                "start": 319,
                                                "end": 325
                                              },
                                              "start": 302,
                                              "end": 325
                                            }
                                          ],
                                          "start": 281,
                                          "end": 326
                                        },
                                        "start": 274,
                                        "end": 326
                                      }
                                    ],
                                    "start": 273,
                                    "end": 327
                                  },
                                  "start": 263,
                                  "end": 327
                                },
                                "indexType": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 328,
                                    "end": 329
                                  },
                                  "start": 328,
                                  "end": 329
                                },
                                "start": 263,
                                "end": 330
                              },
                              "start": 261,
                              "end": 330
                            },
                            "start": 259,
                            "end": 330
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 342,
                            "end": 346
                          },
                          "start": 339,
                          "end": 346
                        },
                        "start": 249,
                        "end": 346
                      },
                      "start": 247,
                      "end": 346
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 239,
                    "end": 347
                  }
                ],
                "start": 208,
                "end": 353
              },
              "optional": false,
              "readonly": null,
              "start": 181,
              "end": 358
            },
            "start": 179,
            "end": 358
          },
          "start": 171,
          "end": 358
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 362,
          "end": 366
        },
        "start": 360,
        "end": 366
      },
      "body": null,
      "expression": false,
      "start": 39,
      "end": 367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bindAll",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 376
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 377,
              "end": 379
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "HTMLButtonElement",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 400
              },
              "typeArguments": null,
              "start": 383,
              "end": 400
            },
            "start": 377,
            "end": 400
          },
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 412,
                      "end": 416
                    },
                    "value": {
                      "type": "Literal",
                      "value": "onclick",
                      "raw": "\"onclick\"",
                      "start": 418,
                      "end": 427
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 412,
                    "end": 427
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 441
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
                          "name": "event",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 444,
                          "end": 449
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 454,
                        "end": 456
                      },
                      "id": null,
                      "generator": false,
                      "start": 443,
                      "end": 456
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 433,
                    "end": 456
                  }
                ],
                "start": 406,
                "end": 461
              },
              {
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
                      "start": 471,
                      "end": 475
                    },
                    "value": {
                      "type": "Literal",
                      "value": "onkeydown",
                      "raw": "\"onkeydown\"",
                      "start": 477,
                      "end": 488
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 471,
                    "end": 488
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "listener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 502
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
                          "name": "event",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 505,
                          "end": 510
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 515,
                        "end": 517
                      },
                      "id": null,
                      "generator": false,
                      "start": 504,
                      "end": 517
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 494,
                    "end": 517
                  }
                ],
                "start": 465,
                "end": 522
              }
            ],
            "start": 402,
            "end": 525
          }
        ],
        "optional": false,
        "start": 369,
        "end": 526
      },
      "directive": null,
      "start": 369,
      "end": 527
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 527
}
```
