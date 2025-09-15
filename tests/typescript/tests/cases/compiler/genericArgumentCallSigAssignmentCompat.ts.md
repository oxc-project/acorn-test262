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
        "start": 10,
        "end": 20
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
                "start": 44,
                "end": 52
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 57
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 56,
                    "end": 57
                  }
                ],
                "start": 52,
                "end": 58
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
                              "start": 77,
                              "end": 78
                            },
                            "typeArguments": null,
                            "start": 77,
                            "end": 78
                          },
                          "start": 75,
                          "end": 78
                        },
                        "start": 70,
                        "end": 78
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
                            "start": 87,
                            "end": 90
                          },
                          "start": 85,
                          "end": 90
                        },
                        "start": 80,
                        "end": 90
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
                            "start": 98,
                            "end": 101
                          },
                          "start": 96,
                          "end": 101
                        },
                        "start": 92,
                        "end": 101
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
                          "start": 104,
                          "end": 105
                        },
                        "typeArguments": null,
                        "start": 104,
                        "end": 105
                      },
                      "start": 102,
                      "end": 105
                    },
                    "start": 69,
                    "end": 106
                  }
                ],
                "start": 59,
                "end": 112
              },
              "declare": false,
              "start": 34,
              "end": 112
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 112
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
                "start": 136,
                "end": 142
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
                      "start": 153,
                      "end": 156
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
                            "start": 157,
                            "end": 158
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 157,
                          "end": 158
                        }
                      ],
                      "start": 156,
                      "end": 159
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
                                "start": 166,
                                "end": 167
                              },
                              "typeArguments": null,
                              "start": 166,
                              "end": 167
                            },
                            "start": 166,
                            "end": 169
                          },
                          "start": 164,
                          "end": 169
                        },
                        "start": 160,
                        "end": 169
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
                              "start": 182,
                              "end": 190
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
                                    "start": 191,
                                    "end": 192
                                  },
                                  "typeArguments": null,
                                  "start": 191,
                                  "end": 192
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 194,
                                  "end": 201
                                }
                              ],
                              "start": 190,
                              "end": 202
                            },
                            "start": 182,
                            "end": 202
                          },
                          "start": 180,
                          "end": 202
                        },
                        "start": 171,
                        "end": 202
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
                            "start": 214,
                            "end": 217
                          },
                          "start": 212,
                          "end": 217
                        },
                        "start": 204,
                        "end": 217
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 220,
                        "end": 227
                      },
                      "start": 218,
                      "end": 227
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 153,
                    "end": 228
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "identity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 245
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
                            "start": 246,
                            "end": 247
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 246,
                          "end": 247
                        }
                      ],
                      "start": 245,
                      "end": 248
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
                              "start": 256,
                              "end": 257
                            },
                            "typeArguments": null,
                            "start": 256,
                            "end": 257
                          },
                          "start": 254,
                          "end": 257
                        },
                        "start": 249,
                        "end": 257
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
                          "start": 260,
                          "end": 261
                        },
                        "typeArguments": null,
                        "start": 260,
                        "end": 261
                      },
                      "start": 258,
                      "end": 261
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 237,
                    "end": 262
                  }
                ],
                "start": 143,
                "end": 268
              },
              "declare": false,
              "start": 126,
              "end": 268
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 119,
            "end": 268
          }
        ],
        "start": 21,
        "end": 270
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 270
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
                    "start": 288,
                    "end": 298
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 305
                  },
                  "start": 288,
                  "end": 305
                },
                "typeArguments": null,
                "start": 288,
                "end": 305
              },
              "start": 286,
              "end": 305
            },
            "start": 285,
            "end": 305
          },
          "init": null,
          "definite": false,
          "start": 285,
          "end": 305
        }
      ],
      "declare": true,
      "start": 273,
      "end": 306
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
            "start": 574,
            "end": 575
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": null,
            "start": 576,
            "end": 579
          },
          "optional": false,
          "computed": false,
          "start": 574,
          "end": 579
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
                "start": 581,
                "end": 585
              },
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 587,
                "end": 588
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 590,
                "end": 594
              },
              {
                "type": "Literal",
                "value": "yes",
                "raw": "'yes'",
                "start": 596,
                "end": 601
              }
            ],
            "start": 580,
            "end": 602
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 605
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 606,
              "end": 614
            },
            "optional": false,
            "computed": false,
            "start": 604,
            "end": 614
          }
        ],
        "optional": false,
        "start": 574,
        "end": 615
      },
      "directive": null,
      "start": 574,
      "end": 616
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
            "start": 670,
            "end": 671
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "all",
            "optional": false,
            "typeAnnotation": null,
            "start": 672,
            "end": 675
          },
          "optional": false,
          "computed": false,
          "start": 670,
          "end": 675
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
                "start": 677,
                "end": 681
              }
            ],
            "start": 676,
            "end": 682
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "_",
              "optional": false,
              "typeAnnotation": null,
              "start": 684,
              "end": 685
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "identity",
              "optional": false,
              "typeAnnotation": null,
              "start": 686,
              "end": 694
            },
            "optional": false,
            "computed": false,
            "start": 684,
            "end": 694
          }
        ],
        "optional": false,
        "start": 670,
        "end": 695
      },
      "directive": null,
      "start": 670,
      "end": 696
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 696
}
```
