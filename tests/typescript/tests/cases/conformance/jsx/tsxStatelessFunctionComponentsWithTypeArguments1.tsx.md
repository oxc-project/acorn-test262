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
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 7,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 23,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 33,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "ComponentWithTwoAttributes",
    "start": 50,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 95,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 107,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 118,
    "end": 119
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 127,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 136,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 145,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentWithTwoAttributes",
    "start": 180,
    "end": 206
  },
  {
    "type": "JSXIdentifier",
    "value": "key1",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 213,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 219,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 240,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 244,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 249,
    "end": 250
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentWithTwoAttributes",
    "start": 250,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 278,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 288,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 303,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 306,
    "end": 307
  },
  {
    "type": "JSXText",
    "value": "\"Component\"",
    "start": 307,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 325,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 333,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "Link",
    "start": 342,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 354,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 361,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 366,
    "end": 367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 368,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 370,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 378,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 382,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 389,
    "end": 390
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 398,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "createLink",
    "start": 407,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 426,
    "end": 427
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 428,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 435,
    "end": 437
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 437,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 457,
    "end": 458
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 458,
    "end": 462
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 463,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 468,
    "end": 469
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 469,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 481,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "createLink1",
    "start": 490,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 502,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 508,
    "end": 509
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 512,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 519,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 521,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 536,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 544,
    "end": 545
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 545,
    "end": 549
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 550,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 556,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 565,
    "end": 566
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 568,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "InferParamProp",
    "start": 578,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 593,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 602,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 610,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "selectHandler",
    "start": 624,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "selectedVal",
    "start": 640,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 656,
    "end": 658
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 659,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 668,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 676,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "InferParamComponent",
    "start": 685,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 708,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "InferParamProp",
    "start": 714,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 734,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 737,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 738,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 754,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 762,
    "end": 763
  },
  {
    "type": "JSXIdentifier",
    "value": "InferParamComponent",
    "start": 763,
    "end": 782
  },
  {
    "type": "JSXIdentifier",
    "value": "values",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 791,
    "end": 792
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 793,
    "end": 794
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 795,
    "end": 796
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 796,
    "end": 797
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 799,
    "end": 800
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 803,
    "end": 804
  },
  {
    "type": "JSXIdentifier",
    "value": "selectHandler",
    "start": 805,
    "end": 818
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 821,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 826,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 829,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  }
]
```
