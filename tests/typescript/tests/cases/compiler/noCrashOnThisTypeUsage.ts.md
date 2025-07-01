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
        "name": "IListenable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
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
              "name": "changeListeners",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 43
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 45,
                        "end": 53
                      },
                      "typeArguments": null,
                      "start": 45,
                      "end": 53
                    },
                    "start": 45,
                    "end": 55
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 58,
                    "end": 62
                  }
                ],
                "start": 45,
                "end": 62
              },
              "start": 43,
              "end": 62
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 62
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "observe",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 74
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "handler",
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
                        "name": "change",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 93,
                            "end": 96
                          },
                          "start": 91,
                          "end": 96
                        },
                        "start": 85,
                        "end": 96
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "oldValue",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 109,
                            "end": 112
                          },
                          "start": 107,
                          "end": 112
                        },
                        "start": 98,
                        "end": 112
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 117,
                        "end": 121
                      },
                      "start": 114,
                      "end": 121
                    },
                    "start": 84,
                    "end": 121
                  },
                  "start": 82,
                  "end": 121
                },
                "start": 75,
                "end": 121
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fireImmediately",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 141,
                    "end": 148
                  },
                  "start": 139,
                  "end": 148
                },
                "start": 123,
                "end": 148
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 151,
                "end": 155
              },
              "start": 149,
              "end": 155
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 67,
            "end": 155
          }
        ],
        "start": 22,
        "end": 157
      },
      "declare": false,
      "start": 0,
      "end": 157
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notifyListeners",
        "optional": false,
        "typeAnnotation": null,
        "start": 168,
        "end": 183
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
              "start": 184,
              "end": 185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 185
          }
        ],
        "start": 183,
        "end": 186
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "listenable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "IListenable",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 210
              },
              "typeArguments": null,
              "start": 199,
              "end": 210
            },
            "start": 197,
            "end": 210
          },
          "start": 187,
          "end": 210
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "change",
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
                "start": 220,
                "end": 221
              },
              "typeArguments": null,
              "start": 220,
              "end": 221
            },
            "start": 218,
            "end": 221
          },
          "start": 212,
          "end": 221
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 223,
        "end": 226
      },
      "expression": false,
      "start": 159,
      "end": 226
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ObservableValue",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 256
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
                "start": 257,
                "end": 258
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 257,
              "end": 258
            }
          ],
          "start": 256,
          "end": 259
        },
        "superClass": null,
        "superTypeArguments": null,
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 266,
                "end": 277
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
                      "name": "value",
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
                            "start": 301,
                            "end": 302
                          },
                          "typeArguments": null,
                          "start": 301,
                          "end": 302
                        },
                        "start": 299,
                        "end": 302
                      },
                      "start": 294,
                      "end": 302
                    },
                    "readonly": false,
                    "static": false,
                    "start": 287,
                    "end": 302
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "kind": "const",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "newValue",
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
                                  "start": 335,
                                  "end": 336
                                },
                                "typeArguments": null,
                                "start": 335,
                                "end": 336
                              },
                              "start": 333,
                              "end": 336
                            },
                            "start": 325,
                            "end": 336
                          },
                          "init": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 344
                          },
                          "definite": false,
                          "start": 325,
                          "end": 344
                        }
                      ],
                      "declare": false,
                      "start": 319,
                      "end": 345
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
                            "name": "oldValue",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 370,
                                "end": 373
                              },
                              "start": 368,
                              "end": 373
                            },
                            "start": 360,
                            "end": 373
                          },
                          "init": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 376,
                            "end": 380
                          },
                          "definite": false,
                          "start": 360,
                          "end": 380
                        }
                      ],
                      "declare": false,
                      "start": 354,
                      "end": 381
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "notifyListeners",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 390,
                          "end": 405
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ThisExpression",
                            "start": 406,
                            "end": 410
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
                                  "start": 426,
                                  "end": 430
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "update",
                                  "raw": "\"update\"",
                                  "start": 432,
                                  "end": 440
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 426,
                                "end": 440
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "object",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 454,
                                  "end": 460
                                },
                                "value": {
                                  "type": "ThisExpression",
                                  "start": 462,
                                  "end": 466
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 454,
                                "end": 466
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "newValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 480,
                                  "end": 488
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "newValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 480,
                                  "end": 488
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 480,
                                "end": 488
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "oldValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 502,
                                  "end": 510
                                },
                                "value": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "oldValue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 502,
                                  "end": 510
                                },
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "optional": false,
                                "start": 502,
                                "end": 510
                              }
                            ],
                            "start": 412,
                            "end": 520
                          }
                        ],
                        "optional": false,
                        "start": 390,
                        "end": 521
                      },
                      "directive": null,
                      "start": 390,
                      "end": 522
                    }
                  ],
                  "start": 309,
                  "end": 528
                },
                "expression": false,
                "start": 277,
                "end": 528
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 266,
              "end": 528
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "changeListeners",
                "optional": false,
                "typeAnnotation": null,
                "start": 533,
                "end": 548
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 550,
                          "end": 558
                        },
                        "typeArguments": null,
                        "start": 550,
                        "end": 558
                      },
                      "start": 550,
                      "end": 560
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 563,
                      "end": 567
                    }
                  ],
                  "start": 550,
                  "end": 567
                },
                "start": 548,
                "end": 567
              },
              "value": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 570,
                "end": 572
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 533,
              "end": 573
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "observe",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 585
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
                    "name": "handler",
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
                            "name": "change",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 604,
                                "end": 607
                              },
                              "start": 602,
                              "end": 607
                            },
                            "start": 596,
                            "end": 607
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldValue",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 620,
                                "end": 623
                              },
                              "start": 618,
                              "end": 623
                            },
                            "start": 609,
                            "end": 623
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 628,
                            "end": 632
                          },
                          "start": 625,
                          "end": 632
                        },
                        "start": 595,
                        "end": 632
                      },
                      "start": 593,
                      "end": 632
                    },
                    "start": 586,
                    "end": 632
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fireImmediately",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 652,
                        "end": 659
                      },
                      "start": 650,
                      "end": 659
                    },
                    "start": 634,
                    "end": 659
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 661,
                  "end": 663
                },
                "expression": false,
                "start": 585,
                "end": 663
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 578,
              "end": 663
            }
          ],
          "start": 260,
          "end": 665
        },
        "abstract": false,
        "declare": false,
        "start": 235,
        "end": 665
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 228,
      "end": 665
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 665
}
```
