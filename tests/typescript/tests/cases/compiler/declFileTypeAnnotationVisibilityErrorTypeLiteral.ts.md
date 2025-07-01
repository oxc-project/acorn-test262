__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 29
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 30,
              "end": 37
            },
            "abstract": false,
            "declare": false,
            "start": 15,
            "end": 37
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 51
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "ClassDeclaration",
                    "decorators": [],
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 82
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 83,
                      "end": 94
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 69,
                    "end": 94
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 62,
                  "end": 94
                }
              ],
              "start": 52,
              "end": 100
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 42,
            "end": 100
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 130,
                              "end": 131
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 133,
                                  "end": 141
                                },
                                "typeArguments": null,
                                "start": 133,
                                "end": 141
                              },
                              "start": 131,
                              "end": 141
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 130,
                            "end": 142
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 151,
                              "end": 152
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
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 154,
                                    "end": 156
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "public1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 157,
                                    "end": 164
                                  },
                                  "start": 154,
                                  "end": 164
                                },
                                "typeArguments": null,
                                "start": 154,
                                "end": 164
                              },
                              "start": 152,
                              "end": 164
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 151,
                            "end": 165
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 178,
                                      "end": 180
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "public1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 181,
                                      "end": 188
                                    },
                                    "start": 178,
                                    "end": 188
                                  },
                                  "typeArguments": null,
                                  "start": 178,
                                  "end": 188
                                },
                                "start": 178,
                                "end": 190
                              },
                              "start": 176,
                              "end": 190
                            },
                            "start": 174,
                            "end": 191
                          },
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 200,
                              "end": 206
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 210,
                                  "end": 218
                                },
                                "typeArguments": null,
                                "start": 210,
                                "end": 218
                              },
                              "start": 208,
                              "end": 218
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 200,
                            "end": 219
                          },
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 232,
                                    "end": 238
                                  },
                                  "start": 230,
                                  "end": 238
                                },
                                "start": 229,
                                "end": 238
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 241,
                                  "end": 249
                                },
                                "typeArguments": null,
                                "start": 241,
                                "end": 249
                              },
                              "start": 239,
                              "end": 249
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 228,
                            "end": 250
                          },
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 263,
                                    "end": 269
                                  },
                                  "start": 261,
                                  "end": 269
                                },
                                "start": 260,
                                "end": 269
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 272,
                                    "end": 274
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "public1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 275,
                                    "end": 282
                                  },
                                  "start": 272,
                                  "end": 282
                                },
                                "typeArguments": null,
                                "start": 272,
                                "end": 282
                              },
                              "start": 270,
                              "end": 282
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 259,
                            "end": 283
                          }
                        ],
                        "start": 120,
                        "end": 289
                      },
                      "start": 118,
                      "end": 289
                    },
                    "start": 117,
                    "end": 289
                  },
                  "init": null,
                  "definite": false,
                  "start": 117,
                  "end": 289
                }
              ],
              "declare": false,
              "start": 113,
              "end": 290
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 106,
            "end": 290
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 306,
                    "end": 308
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 322
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 328,
                            "end": 336
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 324,
                          "end": 338
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 321,
                        "end": 338
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 348,
                          "end": 349
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 355,
                              "end": 357
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 358,
                              "end": 365
                            },
                            "optional": false,
                            "computed": false,
                            "start": 355,
                            "end": 365
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 351,
                          "end": 367
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 348,
                        "end": 367
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 377,
                          "end": 383
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
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "private1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 411,
                                    "end": 419
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 407,
                                  "end": 421
                                },
                                "start": 400,
                                "end": 422
                              }
                            ],
                            "start": 386,
                            "end": 432
                          },
                          "expression": false,
                          "start": 383,
                          "end": 432
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 377,
                        "end": 432
                      }
                    ],
                    "start": 311,
                    "end": 438
                  },
                  "definite": false,
                  "start": 306,
                  "end": 438
                }
              ],
              "declare": false,
              "start": 302,
              "end": 439
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 295,
            "end": 439
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 457
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 460,
                    "end": 461
                  },
                  "definite": false,
                  "start": 455,
                  "end": 461
                }
              ],
              "declare": false,
              "start": 451,
              "end": 462
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 444,
            "end": 462
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 507,
                                  "end": 515
                                },
                                "typeArguments": null,
                                "start": 507,
                                "end": 515
                              },
                              "start": 505,
                              "end": 515
                            },
                            "start": 504,
                            "end": 515
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
                                "name": "m2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 520,
                                "end": 522
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 523,
                                "end": 530
                              },
                              "start": 520,
                              "end": 530
                            },
                            "typeArguments": null,
                            "start": 520,
                            "end": 530
                          },
                          "start": 517,
                          "end": 530
                        },
                        "start": 503,
                        "end": 530
                      },
                      "start": 501,
                      "end": 530
                    },
                    "start": 500,
                    "end": 530
                  },
                  "init": null,
                  "definite": false,
                  "start": 500,
                  "end": 530
                }
              ],
              "declare": false,
              "start": 496,
              "end": 531
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 489,
            "end": 531
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 547,
                    "end": 549
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 553
                  },
                  "definite": false,
                  "start": 547,
                  "end": 553
                }
              ],
              "declare": false,
              "start": 543,
              "end": 554
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 536,
            "end": 554
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
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
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 606,
                                  "end": 614
                                },
                                "typeArguments": null,
                                "start": 606,
                                "end": 614
                              },
                              "start": 604,
                              "end": 614
                            },
                            "start": 603,
                            "end": 614
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
                                "name": "m2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 619,
                                "end": 621
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 622,
                                "end": 629
                              },
                              "start": 619,
                              "end": 629
                            },
                            "typeArguments": null,
                            "start": 619,
                            "end": 629
                          },
                          "start": 616,
                          "end": 629
                        },
                        "start": 598,
                        "end": 629
                      },
                      "start": 596,
                      "end": 629
                    },
                    "start": 595,
                    "end": 629
                  },
                  "init": null,
                  "definite": false,
                  "start": 595,
                  "end": 629
                }
              ],
              "declare": false,
              "start": 591,
              "end": 630
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 584,
            "end": 630
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 646,
                    "end": 648
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 651,
                    "end": 652
                  },
                  "definite": false,
                  "start": 646,
                  "end": 652
                }
              ],
              "declare": false,
              "start": 642,
              "end": 653
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 635,
            "end": 653
          }
        ],
        "start": 9,
        "end": 655
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 655
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 655
}
```
