__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "React",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 61
          },
          "start": 51,
          "end": 61
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react",
        "raw": "\"react\"",
        "start": 67,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 44,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrorResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 98
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
              "name": "error",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 108,
                  "end": 112
                },
                "start": 108,
                "end": 112
              },
              "start": 106,
              "end": 112
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 112
          }
        ],
        "start": 99,
        "end": 114
      },
      "declare": false,
      "start": 77,
      "end": 114
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncLoaderProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 142
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 150
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 143,
            "end": 150
          }
        ],
        "start": 142,
        "end": 151
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 172
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 180,
                      "end": 187
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 188,
                            "end": 195
                          },
                          "typeArguments": null,
                          "start": 188,
                          "end": 195
                        }
                      ],
                      "start": 187,
                      "end": 196
                    },
                    "start": 180,
                    "end": 196
                  },
                  "start": 177,
                  "end": 196
                },
                "start": 174,
                "end": 196
              },
              "start": 172,
              "end": 196
            },
            "accessibility": null,
            "static": false,
            "start": 158,
            "end": 197
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 217
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
                    "name": "result",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 228,
                          "end": 235
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 236,
                                "end": 243
                              },
                              "typeArguments": null,
                              "start": 236,
                              "end": 243
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ErrorResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 245,
                                "end": 256
                              },
                              "typeArguments": null,
                              "start": 245,
                              "end": 256
                            }
                          ],
                          "start": 235,
                          "end": 257
                        },
                        "start": 228,
                        "end": 257
                      },
                      "start": 226,
                      "end": 257
                    },
                    "start": 220,
                    "end": 257
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 262,
                    "end": 265
                  },
                  "start": 259,
                  "end": 265
                },
                "start": 219,
                "end": 265
              },
              "start": 217,
              "end": 265
            },
            "accessibility": null,
            "static": false,
            "start": 203,
            "end": 266
          }
        ],
        "start": 152,
        "end": 268
      },
      "declare": false,
      "start": 116,
      "end": 268
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncLoader",
        "optional": false,
        "typeAnnotation": null,
        "start": 276,
        "end": 287
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 295
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 288,
            "end": 295
          }
        ],
        "start": 287,
        "end": 296
      },
      "superClass": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "React",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 310
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 311,
          "end": 320
        },
        "optional": false,
        "computed": false,
        "start": 305,
        "end": 320
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncLoaderProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 321,
              "end": 337
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 338,
                    "end": 345
                  },
                  "typeArguments": null,
                  "start": 338,
                  "end": 345
                }
              ],
              "start": 337,
              "end": 346
            },
            "start": 321,
            "end": 346
          }
        ],
        "start": 320,
        "end": 347
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "render",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 360
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
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
                      "start": 372,
                      "end": 376
                    },
                    "start": 365,
                    "end": 377
                  }
                ],
                "start": 363,
                "end": 379
              },
              "expression": false,
              "start": 360,
              "end": 379
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 354,
            "end": 379
          }
        ],
        "start": 348,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 270,
      "end": 381
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "load",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 402
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 413
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSUnionType",
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
                          "name": "success",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 416,
                          "end": 423
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 425,
                              "end": 429
                            },
                            "start": 425,
                            "end": 429
                          },
                          "start": 423,
                          "end": 429
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 416,
                        "end": 429
                      }
                    ],
                    "start": 414,
                    "end": 431
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ErrorResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 434,
                      "end": 445
                    },
                    "typeArguments": null,
                    "start": 434,
                    "end": 445
                  }
                ],
                "start": 414,
                "end": 445
              }
            ],
            "start": 413,
            "end": 446
          },
          "start": 406,
          "end": 446
        },
        "start": 404,
        "end": 446
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "success",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 469
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 471,
                    "end": 475
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 462,
                  "end": 475
                }
              ],
              "start": 460,
              "end": 477
            },
            "start": 453,
            "end": 478
          }
        ],
        "start": 447,
        "end": 480
      },
      "expression": false,
      "start": 383,
      "end": 480
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
            "name": "loader",
            "optional": false,
            "typeAnnotation": null,
            "start": 488,
            "end": 494
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "AsyncLoader",
                "start": 498,
                "end": 509
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop1",
                    "start": 514,
                    "end": 519
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "load",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 525
                    },
                    "start": 520,
                    "end": 526
                  },
                  "start": 514,
                  "end": 526
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop2",
                    "start": 531,
                    "end": 536
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 538,
                          "end": 544
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 554
                      },
                      "id": null,
                      "generator": false,
                      "start": 538,
                      "end": 554
                    },
                    "start": 537,
                    "end": 555
                  },
                  "start": 531,
                  "end": 555
                }
              ],
              "selfClosing": true,
              "start": 497,
              "end": 558
            },
            "children": [],
            "closingElement": null,
            "start": 497,
            "end": 558
          },
          "definite": false,
          "start": 488,
          "end": 558
        }
      ],
      "declare": false,
      "start": 482,
      "end": 559
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 44,
  "end": 559
}
```
