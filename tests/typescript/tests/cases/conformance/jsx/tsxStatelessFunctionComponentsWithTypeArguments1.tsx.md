__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 12
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 23,
          "end": 30
        },
        "start": 15,
        "end": 31
      },
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentWithTwoAttributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 76
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
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 79,
            "end": 80
          }
        ],
        "start": 76,
        "end": 81
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
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
                    "name": "key1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 86,
                    "end": 90
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 92,
                        "end": 93
                      },
                      "typeArguments": null,
                      "start": 92,
                      "end": 93
                    },
                    "start": 90,
                    "end": 93
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 86,
                  "end": 94
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
                    "start": 95,
                    "end": 100
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 102,
                        "end": 103
                      },
                      "typeArguments": null,
                      "start": 102,
                      "end": 103
                    },
                    "start": 100,
                    "end": 103
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 95,
                  "end": 103
                }
              ],
              "start": 85,
              "end": 104
            },
            "start": 83,
            "end": 104
          },
          "start": 82,
          "end": 104
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 110
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 118
            },
            "start": 107,
            "end": 118
          },
          "typeArguments": null,
          "start": 107,
          "end": 118
        },
        "start": 105,
        "end": 118
      },
      "body": null,
      "expression": false,
      "start": 33,
      "end": 119
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 139
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 140,
              "end": 141
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 140,
            "end": 141
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 143
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 142,
            "end": 143
          }
        ],
        "start": 139,
        "end": 144
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
              },
              "typeArguments": null,
              "start": 151,
              "end": 152
            },
            "start": 149,
            "end": 152
          },
          "start": 145,
          "end": 152
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 161,
                "end": 162
              },
              "typeArguments": null,
              "start": 161,
              "end": 162
            },
            "start": 159,
            "end": 162
          },
          "start": 154,
          "end": 162
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 176
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentWithTwoAttributes",
                      "start": 180,
                      "end": 206
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "key1",
                          "start": 207,
                          "end": 211
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 213,
                            "end": 217
                          },
                          "start": 212,
                          "end": 218
                        },
                        "start": 207,
                        "end": 218
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "value",
                          "start": 219,
                          "end": 224
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 226,
                            "end": 231
                          },
                          "start": 225,
                          "end": 232
                        },
                        "start": 219,
                        "end": 232
                      }
                    ],
                    "selfClosing": true,
                    "start": 179,
                    "end": 235
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 179,
                  "end": 235
                },
                "definite": false,
                "start": 174,
                "end": 235
              }
            ],
            "declare": false,
            "start": 170,
            "end": 235
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 246
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentWithTwoAttributes",
                      "start": 250,
                      "end": 276
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 282,
                                "end": 286
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 282,
                                "end": 286
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 282,
                              "end": 286
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
                                "start": 288,
                                "end": 293
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 295,
                                "end": 300
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 288,
                              "end": 300
                            }
                          ],
                          "start": 281,
                          "end": 301
                        },
                        "start": 277,
                        "end": 302
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "key",
                          "start": 303,
                          "end": 306
                        },
                        "value": {
                          "type": "Literal",
                          "value": "Component",
                          "raw": "\"Component\"",
                          "start": 307,
                          "end": 318
                        },
                        "start": 303,
                        "end": 318
                      }
                    ],
                    "selfClosing": true,
                    "start": 249,
                    "end": 321
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 249,
                  "end": 321
                },
                "definite": false,
                "start": 244,
                "end": 321
              }
            ],
            "declare": false,
            "start": 240,
            "end": 321
          }
        ],
        "start": 164,
        "end": 323
      },
      "expression": false,
      "start": 127,
      "end": 323
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Link",
        "optional": false,
        "typeAnnotation": null,
        "start": 342,
        "end": 346
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
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 347,
              "end": 348
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 347,
            "end": 348
          }
        ],
        "start": 346,
        "end": 349
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 354,
                    "end": 358
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 366,
                                "end": 367
                              },
                              "typeArguments": null,
                              "start": 366,
                              "end": 367
                            },
                            "start": 364,
                            "end": 367
                          },
                          "start": 361,
                          "end": 367
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 370,
                          "end": 374
                        },
                        "start": 368,
                        "end": 374
                      },
                      "start": 360,
                      "end": 374
                    },
                    "start": 358,
                    "end": 374
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 354,
                  "end": 374
                }
              ],
              "start": 353,
              "end": 375
            },
            "start": 351,
            "end": 375
          },
          "start": 350,
          "end": 375
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 381
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 389
            },
            "start": 378,
            "end": 389
          },
          "typeArguments": null,
          "start": 378,
          "end": 389
        },
        "start": 376,
        "end": 389
      },
      "body": null,
      "expression": false,
      "start": 325,
      "end": 390
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createLink",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 417
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 428,
                      "end": 434
                    },
                    "start": 426,
                    "end": 434
                  },
                  "start": 425,
                  "end": 434
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 437,
                  "end": 441
                },
                "start": 435,
                "end": 441
              },
              "start": 424,
              "end": 441
            },
            "start": 422,
            "end": 441
          },
          "start": 418,
          "end": 441
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 453,
                  "end": 454
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 458,
                      "end": 462
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 463,
                          "end": 467
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 469,
                            "end": 473
                          },
                          "start": 468,
                          "end": 474
                        },
                        "start": 463,
                        "end": 474
                      }
                    ],
                    "selfClosing": true,
                    "start": 457,
                    "end": 477
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 457,
                  "end": 477
                },
                "definite": false,
                "start": 453,
                "end": 477
              }
            ],
            "declare": false,
            "start": 449,
            "end": 477
          }
        ],
        "start": 443,
        "end": 479
      },
      "expression": false,
      "start": 398,
      "end": 479
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createLink1",
        "optional": false,
        "typeAnnotation": null,
        "start": 490,
        "end": 501
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 512,
                      "end": 518
                    },
                    "start": 510,
                    "end": 518
                  },
                  "start": 509,
                  "end": 518
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 521,
                  "end": 528
                },
                "start": 519,
                "end": 528
              },
              "start": 508,
              "end": 528
            },
            "start": 506,
            "end": 528
          },
          "start": 502,
          "end": 528
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 540,
                  "end": 541
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 545,
                      "end": 549
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 550,
                          "end": 554
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 556,
                            "end": 560
                          },
                          "start": 555,
                          "end": 561
                        },
                        "start": 550,
                        "end": 561
                      }
                    ],
                    "selfClosing": true,
                    "start": 544,
                    "end": 564
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 544,
                  "end": 564
                },
                "definite": false,
                "start": 540,
                "end": 564
              }
            ],
            "declare": false,
            "start": 536,
            "end": 564
          }
        ],
        "start": 530,
        "end": 566
      },
      "expression": false,
      "start": 481,
      "end": 566
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferParamProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 578,
        "end": 592
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
              "start": 593,
              "end": 594
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 593,
            "end": 594
          }
        ],
        "start": 592,
        "end": 595
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
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 608
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
                  "start": 610,
                  "end": 615
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 616,
                        "end": 617
                      },
                      "typeArguments": null,
                      "start": 616,
                      "end": 617
                    }
                  ],
                  "start": 615,
                  "end": 618
                },
                "start": 610,
                "end": 618
              },
              "start": 608,
              "end": 618
            },
            "accessibility": null,
            "static": false,
            "start": 602,
            "end": 619
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 624,
              "end": 637
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
                    "name": "selectedVal",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 653,
                          "end": 654
                        },
                        "typeArguments": null,
                        "start": 653,
                        "end": 654
                      },
                      "start": 651,
                      "end": 654
                    },
                    "start": 640,
                    "end": 654
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 659,
                    "end": 663
                  },
                  "start": 656,
                  "end": 663
                },
                "start": 639,
                "end": 663
              },
              "start": 637,
              "end": 663
            },
            "accessibility": null,
            "static": false,
            "start": 624,
            "end": 664
          }
        ],
        "start": 596,
        "end": 666
      },
      "declare": false,
      "start": 568,
      "end": 666
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferParamComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 685,
        "end": 704
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 706
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 705,
            "end": 706
          }
        ],
        "start": 704,
        "end": 707
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InferParamProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 728
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 729,
                      "end": 730
                    },
                    "typeArguments": null,
                    "start": 729,
                    "end": 730
                  }
                ],
                "start": 728,
                "end": 731
              },
              "start": 714,
              "end": 731
            },
            "start": 712,
            "end": 731
          },
          "start": 708,
          "end": 731
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 734,
              "end": 737
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 745
            },
            "start": 734,
            "end": 745
          },
          "typeArguments": null,
          "start": 734,
          "end": 745
        },
        "start": 732,
        "end": 745
      },
      "body": null,
      "expression": false,
      "start": 668,
      "end": 746
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 759
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "InferParamComponent",
                "start": 763,
                "end": 782
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "values",
                    "start": 783,
                    "end": 789
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 792,
                          "end": 793
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 795,
                          "end": 796
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 798,
                          "end": 799
                        },
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 801,
                          "end": 802
                        }
                      ],
                      "start": 791,
                      "end": 803
                    },
                    "start": 790,
                    "end": 804
                  },
                  "start": 783,
                  "end": 804
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "selectHandler",
                    "start": 805,
                    "end": 818
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 821,
                          "end": 824
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 829,
                        "end": 832
                      },
                      "id": null,
                      "generator": false,
                      "start": 820,
                      "end": 832
                    },
                    "start": 819,
                    "end": 833
                  },
                  "start": 805,
                  "end": 833
                }
              ],
              "selfClosing": true,
              "start": 762,
              "end": 836
            },
            "children": [],
            "closingElement": null,
            "start": 762,
            "end": 836
          },
          "definite": false,
          "start": 758,
          "end": 836
        }
      ],
      "declare": false,
      "start": 754,
      "end": 837
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 837
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12,
    "range": [
      7,
      12
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14,
    "range": [
      13,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22,
    "range": [
      15,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 33,
    "end": 40,
    "range": [
      33,
      40
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49,
    "range": [
      41,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "ComponentWithTwoAttributes",
    "start": 50,
    "end": 76,
    "range": [
      50,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 86,
    "end": 90,
    "range": [
      86,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 95,
    "end": 100,
    "range": [
      95,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 107,
    "end": 110,
    "range": [
      107,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 111,
    "end": 118,
    "range": [
      111,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 127,
    "end": 135,
    "range": [
      127,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 136,
    "end": 139,
    "range": [
      136,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 154,
    "end": 159,
    "range": [
      154,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 170,
    "end": 173,
    "range": [
      170,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentWithTwoAttributes",
    "start": 180,
    "end": 206,
    "range": [
      180,
      206
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "key1",
    "start": 207,
    "end": 211,
    "range": [
      207,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 213,
    "end": 217,
    "range": [
      213,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 226,
    "end": 231,
    "range": [
      226,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 240,
    "end": 243,
    "range": [
      240,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 244,
    "end": 246,
    "range": [
      244,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentWithTwoAttributes",
    "start": 250,
    "end": 276,
    "range": [
      250,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 278,
    "end": 281,
    "range": [
      278,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 282,
    "end": 286,
    "range": [
      282,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 288,
    "end": 293,
    "range": [
      288,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300,
    "range": [
      295,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 303,
    "end": 306,
    "range": [
      303,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "JSXText",
    "value": "\"Component\"",
    "start": 307,
    "end": 318,
    "range": [
      307,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 325,
    "end": 332,
    "range": [
      325,
      332
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341,
    "range": [
      333,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "Link",
    "start": 342,
    "end": 346,
    "range": [
      342,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 354,
    "end": 358,
    "range": [
      354,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 361,
    "end": 364,
    "range": [
      361,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 368,
    "end": 370,
    "range": [
      368,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 370,
    "end": 374,
    "range": [
      370,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 378,
    "end": 381,
    "range": [
      378,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 382,
    "end": 389,
    "range": [
      382,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 398,
    "end": 406,
    "range": [
      398,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "createLink",
    "start": 407,
    "end": 417,
    "range": [
      407,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 418,
    "end": 422,
    "range": [
      418,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 428,
    "end": 434,
    "range": [
      428,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 435,
    "end": 437,
    "range": [
      435,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 437,
    "end": 441,
    "range": [
      437,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 449,
    "end": 452,
    "range": [
      449,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 458,
    "end": 462,
    "range": [
      458,
      462
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 463,
    "end": 467,
    "range": [
      463,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 469,
    "end": 473,
    "range": [
      469,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 481,
    "end": 489,
    "range": [
      481,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "createLink1",
    "start": 490,
    "end": 501,
    "range": [
      490,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 502,
    "end": 506,
    "range": [
      502,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 512,
    "end": 518,
    "range": [
      512,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 519,
    "end": 521,
    "range": [
      519,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 521,
    "end": 528,
    "range": [
      521,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 536,
    "end": 539,
    "range": [
      536,
      539
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 545,
    "end": 549,
    "range": [
      545,
      549
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 550,
    "end": 554,
    "range": [
      550,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 556,
    "end": 560,
    "range": [
      556,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 568,
    "end": 577,
    "range": [
      568,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "InferParamProp",
    "start": 578,
    "end": 592,
    "range": [
      578,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 602,
    "end": 608,
    "range": [
      602,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 610,
    "end": 615,
    "range": [
      610,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "selectHandler",
    "start": 624,
    "end": 637,
    "range": [
      624,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "selectedVal",
    "start": 640,
    "end": 651,
    "range": [
      640,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 656,
    "end": 658,
    "range": [
      656,
      658
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 659,
    "end": 663,
    "range": [
      659,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666,
    "range": [
      665,
      666
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 668,
    "end": 675,
    "range": [
      668,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 676,
    "end": 684,
    "range": [
      676,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "InferParamComponent",
    "start": 685,
    "end": 704,
    "range": [
      685,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 708,
    "end": 712,
    "range": [
      708,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "InferParamProp",
    "start": 714,
    "end": 728,
    "range": [
      714,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729,
    "range": [
      728,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 734,
    "end": 737,
    "range": [
      734,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 738,
    "end": 745,
    "range": [
      738,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 754,
    "end": 757,
    "range": [
      754,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761,
    "range": [
      760,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "InferParamComponent",
    "start": 763,
    "end": 782,
    "range": [
      763,
      782
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "values",
    "start": 783,
    "end": 789,
    "range": [
      783,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 798,
    "end": 799,
    "range": [
      798,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "JSXIdentifier",
    "value": "selectHandler",
    "start": 805,
    "end": 818,
    "range": [
      805,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 821,
    "end": 824,
    "range": [
      821,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 826,
    "end": 828,
    "range": [
      826,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830,
    "range": [
      829,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  }
]
```
