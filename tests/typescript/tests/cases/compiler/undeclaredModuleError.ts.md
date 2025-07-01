__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fs",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 9
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "fs",
          "raw": "'fs'",
          "start": 20,
          "end": 24
        },
        "start": 12,
        "end": 25
      },
      "importKind": "value",
      "start": 0,
      "end": 26
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "readdir",
        "optional": false,
        "typeAnnotation": null,
        "start": 36,
        "end": 43
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 50,
              "end": 56
            },
            "start": 48,
            "end": 56
          },
          "start": 44,
          "end": 56
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "accept",
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
                  "name": "stat",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 73,
                          "end": 75
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Stats",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 81
                        },
                        "start": 73,
                        "end": 81
                      },
                      "typeArguments": null,
                      "start": 73,
                      "end": 81
                    },
                    "start": 71,
                    "end": 81
                  },
                  "start": 67,
                  "end": 81
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 89,
                      "end": 95
                    },
                    "start": 87,
                    "end": 95
                  },
                  "start": 83,
                  "end": 95
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 100,
                  "end": 107
                },
                "start": 97,
                "end": 107
              },
              "start": 66,
              "end": 107
            },
            "start": 64,
            "end": 107
          },
          "start": 58,
          "end": 107
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
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
                  "name": "error",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 127,
                      "end": 132
                    },
                    "start": 125,
                    "end": 132
                  },
                  "start": 120,
                  "end": 132
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "results",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
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
                              "name": "name",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 149
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 151,
                                "end": 157
                              },
                              "start": 149,
                              "end": 157
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 145,
                            "end": 158
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "stat",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 159,
                              "end": 163
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "fs",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 165,
                                    "end": 167
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Stats",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 168,
                                    "end": 173
                                  },
                                  "start": 165,
                                  "end": 173
                                },
                                "typeArguments": null,
                                "start": 165,
                                "end": 173
                              },
                              "start": 163,
                              "end": 173
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 159,
                            "end": 174
                          }
                        ],
                        "start": 143,
                        "end": 176
                      },
                      "start": 143,
                      "end": 178
                    },
                    "start": 141,
                    "end": 178
                  },
                  "start": 134,
                  "end": 178
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 183,
                  "end": 187
                },
                "start": 180,
                "end": 187
              },
              "start": 119,
              "end": 187
            },
            "start": 117,
            "end": 187
          },
          "start": 109,
          "end": 187
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 190,
        "end": 192
      },
      "expression": false,
      "start": 27,
      "end": 192
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "join",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 207
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "paths",
            "optional": false,
            "typeAnnotation": null,
            "start": 211,
            "end": 216
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 218,
                "end": 224
              },
              "start": 218,
              "end": 226
            },
            "start": 216,
            "end": 226
          },
          "value": null,
          "start": 208,
          "end": 226
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 228,
        "end": 230
      },
      "expression": false,
      "start": 194,
      "end": 230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "instrumentFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 255
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "covFileDir",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 268,
              "end": 274
            },
            "start": 266,
            "end": 274
          },
          "start": 256,
          "end": 274
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "covFileName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 289,
              "end": 295
            },
            "start": 287,
            "end": 295
          },
          "start": 276,
          "end": 295
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "originalFilePath",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 315,
              "end": 321
            },
            "start": 313,
            "end": 321
          },
          "start": 297,
          "end": 321
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 329,
                  "end": 331
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "readFile",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 340
                },
                "optional": false,
                "computed": false,
                "start": 329,
                "end": 340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "originalFilePath",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 357
                },
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                            "name": "readdir",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 389
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "covFileDir",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 390,
                              "end": 400
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 408,
                                "end": 419
                              },
                              "id": null,
                              "generator": false,
                              "start": 402,
                              "end": 419
                            },
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Error",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 430,
                                        "end": 435
                                      },
                                      "typeArguments": null,
                                      "start": 430,
                                      "end": 435
                                    },
                                    "start": 428,
                                    "end": 435
                                  },
                                  "start": 423,
                                  "end": 435
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "files",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSArrayType",
                                      "elementType": {
                                        "type": "TSTypeLiteral",
                                        "members": [],
                                        "start": 444,
                                        "end": 446
                                      },
                                      "start": 444,
                                      "end": 448
                                    },
                                    "start": 442,
                                    "end": 448
                                  },
                                  "start": 437,
                                  "end": 448
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "files",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 471,
                                          "end": 476
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "forEach",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 477,
                                          "end": 484
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 471,
                                        "end": 484
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "ArrowFunctionExpression",
                                          "expression": false,
                                          "async": false,
                                          "typeParameters": null,
                                          "params": [
                                            {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "file",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 486,
                                              "end": 490
                                            }
                                          ],
                                          "returnType": null,
                                          "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "VariableDeclaration",
                                                "kind": "var",
                                                "declarations": [
                                                  {
                                                    "type": "VariableDeclarator",
                                                    "id": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "fullPath",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 521,
                                                      "end": 529
                                                    },
                                                    "init": {
                                                      "type": "CallExpression",
                                                      "callee": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "join",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 532,
                                                        "end": 536
                                                      },
                                                      "typeArguments": null,
                                                      "arguments": [
                                                        {
                                                          "type": "Identifier",
                                                          "decorators": [],
                                                          "name": "IDoNotExist",
                                                          "optional": false,
                                                          "typeAnnotation": null,
                                                          "start": 537,
                                                          "end": 548
                                                        }
                                                      ],
                                                      "optional": false,
                                                      "start": 532,
                                                      "end": 549
                                                    },
                                                    "definite": false,
                                                    "start": 521,
                                                    "end": 549
                                                  }
                                                ],
                                                "declare": false,
                                                "start": 517,
                                                "end": 550
                                              }
                                            ],
                                            "start": 495,
                                            "end": 568
                                          },
                                          "id": null,
                                          "generator": false,
                                          "start": 485,
                                          "end": 568
                                        }
                                      ],
                                      "optional": false,
                                      "start": 471,
                                      "end": 570
                                    },
                                    "directive": null,
                                    "start": 471,
                                    "end": 571
                                  }
                                ],
                                "start": 453,
                                "end": 585
                              },
                              "id": null,
                              "generator": false,
                              "start": 422,
                              "end": 585
                            }
                          ],
                          "optional": false,
                          "start": 382,
                          "end": 587
                        },
                        "directive": null,
                        "start": 382,
                        "end": 588
                      }
                    ],
                    "start": 365,
                    "end": 594
                  },
                  "id": null,
                  "generator": false,
                  "start": 359,
                  "end": 594
                }
              ],
              "optional": false,
              "start": 329,
              "end": 596
            },
            "directive": null,
            "start": 329,
            "end": 597
          }
        ],
        "start": 323,
        "end": 599
      },
      "expression": false,
      "start": 232,
      "end": 599
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 599
}
```
