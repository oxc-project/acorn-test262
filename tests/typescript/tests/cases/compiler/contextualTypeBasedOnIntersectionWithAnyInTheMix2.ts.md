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
        "name": "IntrinsicElements",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 22
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
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
                      "name": "href",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 38,
                      "end": 42
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 45,
                        "end": 51
                      },
                      "start": 43,
                      "end": 51
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 38,
                    "end": 52
                  }
                ],
                "start": 32,
                "end": 56
              },
              "start": 30,
              "end": 56
            },
            "accessibility": null,
            "static": false,
            "start": 29,
            "end": 57
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "div",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
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
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dir",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 74
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 71,
                    "end": 84
                  }
                ],
                "start": 65,
                "end": 88
              },
              "start": 63,
              "end": 88
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 89
          }
        ],
        "start": 25,
        "end": 91
      },
      "declare": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 108
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Props",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 109,
            "end": 114
          }
        ],
        "start": 108,
        "end": 115
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
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
                  "name": "Props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 126,
                  "end": 131
                },
                "typeArguments": null,
                "start": 126,
                "end": 131
              },
              "start": 124,
              "end": 131
            },
            "start": 119,
            "end": 131
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 136,
            "end": 143
          },
          "start": 133,
          "end": 143
        },
        "start": 118,
        "end": 143
      },
      "declare": false,
      "start": 94,
      "end": 144
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NestedMDXComponents",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 175
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
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 186,
                    "end": 192
                  },
                  "start": 184,
                  "end": 192
                },
                "start": 181,
                "end": 192
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Component",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 204
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 205,
                      "end": 208
                    }
                  ],
                  "start": 204,
                  "end": 209
                },
                "start": 195,
                "end": 209
              },
              "start": 193,
              "end": 209
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 180,
            "end": 210
          }
        ],
        "start": 176,
        "end": 212
      },
      "declare": false,
      "start": 146,
      "end": 212
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MDXComponents",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 232
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NestedMDXComponents",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 254
            },
            "typeArguments": null,
            "start": 235,
            "end": 254
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Key",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 265
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IntrinsicElements",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 275,
                  "end": 292
                },
                "typeArguments": null,
                "start": 275,
                "end": 292
              },
              "start": 269,
              "end": 292
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Component",
                "optional": false,
                "typeAnnotation": null,
                "start": 296,
                "end": 305
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
                        "name": "IntrinsicElements",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 306,
                        "end": 323
                      },
                      "typeArguments": null,
                      "start": 306,
                      "end": 323
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 327
                      },
                      "typeArguments": null,
                      "start": 324,
                      "end": 327
                    },
                    "start": 306,
                    "end": 328
                  }
                ],
                "start": 305,
                "end": 329
              },
              "start": 296,
              "end": 329
            },
            "optional": true,
            "readonly": null,
            "start": 257,
            "end": 332
          }
        ],
        "start": 235,
        "end": 332
      },
      "declare": false,
      "start": 214,
      "end": 333
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MDXProps",
          "optional": false,
          "typeAnnotation": null,
          "start": 352,
          "end": 360
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
                "name": "components",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 375
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MDXComponents",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 378,
                    "end": 391
                  },
                  "typeArguments": null,
                  "start": 378,
                  "end": 391
                },
                "start": 376,
                "end": 391
              },
              "accessibility": null,
              "static": false,
              "start": 365,
              "end": 392
            }
          ],
          "start": 361,
          "end": 394
        },
        "declare": false,
        "start": 342,
        "end": 394
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 335,
      "end": 394
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMDXComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 413,
        "end": 427
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                "name": "MDXProps",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 443
              },
              "typeArguments": null,
              "start": 435,
              "end": 443
            },
            "start": 433,
            "end": 443
          },
          "start": 428,
          "end": 443
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 446,
          "end": 450
        },
        "start": 444,
        "end": 450
      },
      "body": null,
      "expression": false,
      "start": 396,
      "end": 451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyMDXComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 453,
          "end": 467
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
                  "name": "components",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 482
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 490,
                        "end": 491
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 492,
                            "end": 497
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 514,
                                "end": 518
                              },
                              "start": 507,
                              "end": 519
                            }
                          ],
                          "start": 499,
                          "end": 525
                        },
                        "expression": false,
                        "start": 491,
                        "end": 525
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 490,
                      "end": 525
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "div",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 534
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 535,
                            "end": 540
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ReturnStatement",
                              "argument": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 557,
                                "end": 561
                              },
                              "start": 550,
                              "end": 562
                            }
                          ],
                          "start": 542,
                          "end": 568
                        },
                        "expression": false,
                        "start": 534,
                        "end": 568
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 531,
                      "end": 568
                    }
                  ],
                  "start": 484,
                  "end": 573
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 472,
                "end": 573
              }
            ],
            "start": 468,
            "end": 576
          }
        ],
        "optional": false,
        "start": 453,
        "end": 577
      },
      "directive": null,
      "start": 453,
      "end": 578
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 578
}
```
