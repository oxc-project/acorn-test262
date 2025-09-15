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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
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
                      "name": "works",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 52
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
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 57,
                              "end": 58
                            },
                            "typeArguments": null,
                            "start": 57,
                            "end": 58
                          },
                          "start": 55,
                          "end": 58
                        },
                        "start": 53,
                        "end": 58
                      },
                      "start": 52,
                      "end": 58
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 47,
                    "end": 59
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "alsoWorks",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 77
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
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 82,
                              "end": 83
                            },
                            "typeArguments": null,
                            "start": 82,
                            "end": 83
                          },
                          "start": 80,
                          "end": 83
                        },
                        "start": 78,
                        "end": 83
                      },
                      "start": 77,
                      "end": 83
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 68,
                    "end": 84
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doesntWork",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 103
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
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 108,
                              "end": 109
                            },
                            "typeArguments": null,
                            "start": 108,
                            "end": 109
                          },
                          "start": 106,
                          "end": 109
                        },
                        "start": 104,
                        "end": 109
                      },
                      "start": 103,
                      "end": 109
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 93,
                    "end": 110
                  }
                ],
                "start": 37,
                "end": 116
              },
              "declare": false,
              "start": 25,
              "end": 116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 116
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
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
                      "name": "anything",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 159
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 160,
                        "end": 166
                      },
                      "start": 159,
                      "end": 166
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 151,
                    "end": 167
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneI",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 180
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 181,
                          "end": 182
                        },
                        "typeArguments": null,
                        "start": 181,
                        "end": 182
                      },
                      "start": 180,
                      "end": 182
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 176,
                    "end": 183
                  }
                ],
                "start": 141,
                "end": 189
              },
              "declare": false,
              "start": 129,
              "end": 189
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 122,
            "end": 189
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "I",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 222
                  },
                  "typeArguments": null,
                  "start": 221,
                  "end": 222
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 233,
                      "end": 244
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 254,
                                "end": 260
                              },
                              "start": 253,
                              "end": 260
                            },
                            "start": 252,
                            "end": 260
                          },
                          "readonly": false,
                          "static": false,
                          "start": 245,
                          "end": 260
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 262,
                        "end": 273
                      },
                      "expression": false,
                      "start": 244,
                      "end": 273
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 233,
                    "end": 273
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "works",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 282,
                      "end": 287
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 290,
                            "end": 291
                          },
                          "typeArguments": null,
                          "start": 290,
                          "end": 291
                        },
                        "start": 289,
                        "end": 291
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "TSTypeAssertion",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 314,
                                  "end": 315
                                },
                                "typeArguments": null,
                                "start": 314,
                                "end": 315
                              },
                              "expression": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "anything",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 319,
                                      "end": 327
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 329,
                                      "end": 330
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 319,
                                    "end": 330
                                  }
                                ],
                                "start": 317,
                                "end": 332
                              },
                              "start": 313,
                              "end": 333
                            },
                            "start": 306,
                            "end": 334
                          }
                        ],
                        "start": 292,
                        "end": 344
                      },
                      "expression": false,
                      "start": 287,
                      "end": 344
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 282,
                    "end": 344
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doesntWork",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 364
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 367,
                            "end": 368
                          },
                          "typeArguments": null,
                          "start": 367,
                          "end": 368
                        },
                        "start": 366,
                        "end": 368
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
                                    "name": "anything",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 392,
                                    "end": 400
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 401,
                                    "end": 402
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 392,
                                  "end": 402
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "oneI",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 404,
                                    "end": 408
                                  },
                                  "value": {
                                    "type": "ThisExpression",
                                    "start": 409,
                                    "end": 413
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 404,
                                  "end": 413
                                }
                              ],
                              "start": 390,
                              "end": 415
                            },
                            "start": 383,
                            "end": 416
                          }
                        ],
                        "start": 369,
                        "end": 426
                      },
                      "expression": false,
                      "start": 364,
                      "end": 426
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 354,
                    "end": 426
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "worksToo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 436,
                      "end": 444
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
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
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 447,
                            "end": 448
                          },
                          "typeArguments": null,
                          "start": 447,
                          "end": 448
                        },
                        "start": 446,
                        "end": 448
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "TSTypeAssertion",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 471,
                                  "end": 472
                                },
                                "typeArguments": null,
                                "start": 471,
                                "end": 472
                              },
                              "expression": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "oneI",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 476,
                                      "end": 480
                                    },
                                    "value": {
                                      "type": "ThisExpression",
                                      "start": 482,
                                      "end": 486
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 476,
                                    "end": 486
                                  }
                                ],
                                "start": 474,
                                "end": 488
                              },
                              "start": 470,
                              "end": 489
                            },
                            "start": 463,
                            "end": 490
                          }
                        ],
                        "start": 449,
                        "end": 500
                      },
                      "expression": false,
                      "start": 444,
                      "end": 500
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 436,
                    "end": 500
                  }
                ],
                "start": 223,
                "end": 506
              },
              "abstract": false,
              "declare": false,
              "start": 202,
              "end": 506
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 195,
            "end": 506
          }
        ],
        "start": 12,
        "end": 508
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 508
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 509
}
```
