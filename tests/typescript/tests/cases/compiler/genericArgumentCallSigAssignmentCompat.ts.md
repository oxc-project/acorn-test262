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
        "name": "Underscore",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 17
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
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 49
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
                      "start": 50,
                      "end": 51
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 50,
                    "end": 51
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 54
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 53,
                    "end": 54
                  }
                ],
                "start": 49,
                "end": 55
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 74,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 75
                          },
                          "start": 72,
                          "end": 75
                        },
                        "start": 67,
                        "end": 75
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 84,
                            "end": 87
                          },
                          "start": 82,
                          "end": 87
                        },
                        "start": 77,
                        "end": 87
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 95,
                            "end": 98
                          },
                          "start": 93,
                          "end": 98
                        },
                        "start": 89,
                        "end": 98
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 102
                        },
                        "typeArguments": null,
                        "start": 101,
                        "end": 102
                      },
                      "start": 99,
                      "end": 102
                    },
                    "start": 66,
                    "end": 103
                  }
                ],
                "start": 56,
                "end": 109
              },
              "declare": false,
              "start": 31,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 24,
            "end": 109
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 139
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "all",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 150,
                      "end": 153
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 154,
                            "end": 155
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 154,
                          "end": 155
                        }
                      ],
                      "start": 153,
                      "end": 156
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
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
                                "start": 163,
                                "end": 164
                              },
                              "typeArguments": null,
                              "start": 163,
                              "end": 164
                            },
                            "start": 163,
                            "end": 166
                          },
                          "start": 161,
                          "end": 166
                        },
                        "start": 157,
                        "end": 166
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 179,
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
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 188,
                                    "end": 189
                                  },
                                  "typeArguments": null,
                                  "start": 188,
                                  "end": 189
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 191,
                                  "end": 198
                                }
                              ],
                              "start": 187,
                              "end": 199
                            },
                            "start": 179,
                            "end": 199
                          },
                          "start": 177,
                          "end": 199
                        },
                        "start": 168,
                        "end": 199
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 211,
                            "end": 214
                          },
                          "start": 209,
                          "end": 214
                        },
                        "start": 201,
                        "end": 214
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 217,
                        "end": 224
                      },
                      "start": 215,
                      "end": 224
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 150,
                    "end": 225
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "identity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 234,
                      "end": 242
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 243,
                            "end": 244
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 243,
                          "end": 244
                        }
                      ],
                      "start": 242,
                      "end": 245
                    },
                    "params": [
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 253,
                              "end": 254
                            },
                            "typeArguments": null,
                            "start": 253,
                            "end": 254
                          },
                          "start": 251,
                          "end": 254
                        },
                        "start": 246,
                        "end": 254
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 258
                        },
                        "typeArguments": null,
                        "start": 257,
                        "end": 258
                      },
                      "start": 255,
                      "end": 258
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 234,
                    "end": 259
                  }
                ],
                "start": 140,
                "end": 265
              },
              "declare": false,
              "start": 123,
              "end": 265
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 116,
            "end": 265
          }
        ],
        "start": 18,
        "end": 267
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 267
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
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
                    "name": "Underscore",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 295
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 302
                  },
                  "start": 285,
                  "end": 302
                },
                "typeArguments": null,
                "start": 285,
                "end": 302
              },
              "start": 283,
              "end": 302
            },
            "start": 282,
            "end": 302
          },
          "init": null,
          "definite": false,
          "start": 282,
          "end": 302
        }
      ],
      "declare": true,
      "start": 270,
      "end": 303
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 572
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 576
          },
          "optional": false,
          "computed": false,
          "start": 571,
          "end": 576
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 578,
                "end": 582
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 584,
                "end": 585
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 587,
                "end": 591
              },
              {
                "type": "Literal",
                "value": "yes",
                "raw": "'yes'",
                "start": 593,
                "end": 598
              }
            ],
            "start": 577,
            "end": 599
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 602
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 611
            },
            "optional": false,
            "computed": false,
            "start": 601,
            "end": 611
          }
        ],
        "optional": false,
        "start": 571,
        "end": 612
      },
      "directive": null,
      "start": 571,
      "end": 613
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": null,
            "start": 667,
            "end": 668
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 672
          },
          "optional": false,
          "computed": false,
          "start": 667,
          "end": 672
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 674,
                "end": 678
              }
            ],
            "start": 673,
            "end": 679
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 681,
              "end": 682
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 691
            },
            "optional": false,
            "computed": false,
            "start": 681,
            "end": 691
          }
        ],
        "optional": false,
        "start": 667,
        "end": 692
      },
      "directive": null,
      "start": 667,
      "end": 693
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 693
}
```
