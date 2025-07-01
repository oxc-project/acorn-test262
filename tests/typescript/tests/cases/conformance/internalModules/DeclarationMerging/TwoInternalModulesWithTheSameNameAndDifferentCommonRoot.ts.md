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
        "name": "Root",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 32,
                "end": 33
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
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 61,
                        "end": 66
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 81,
                              "end": 82
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 84,
                                "end": 90
                              },
                              "start": 82,
                              "end": 90
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 81,
                            "end": 91
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
                              "start": 104,
                              "end": 105
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 107,
                                "end": 113
                              },
                              "start": 105,
                              "end": 113
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 104,
                            "end": 114
                          }
                        ],
                        "start": 67,
                        "end": 124
                      },
                      "declare": false,
                      "start": 51,
                      "end": 124
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 44,
                    "end": 124
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Utils",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 153
                      },
                      "body": {
                        "type": "TSModuleBlock",
                        "body": [
                          {
                            "type": "ExportNamedDeclaration",
                            "declaration": {
                              "type": "FunctionDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mirror",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 184,
                                "end": 190
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
                                      "start": 191,
                                      "end": 192
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 201,
                                        "end": 206
                                      },
                                      "typeArguments": null,
                                      "start": 201,
                                      "end": 206
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 191,
                                    "end": 206
                                  }
                                ],
                                "start": 190,
                                "end": 207
                              },
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "p",
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
                                        "start": 211,
                                        "end": 212
                                      },
                                      "typeArguments": null,
                                      "start": 211,
                                      "end": 212
                                    },
                                    "start": 209,
                                    "end": 212
                                  },
                                  "start": 208,
                                  "end": 212
                                }
                              ],
                              "returnType": null,
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
                                            "name": "x",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 241,
                                            "end": 242
                                          },
                                          "value": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "p",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 244,
                                              "end": 245
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "y",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 246,
                                              "end": 247
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 244,
                                            "end": 247
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 241,
                                          "end": 247
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
                                            "start": 249,
                                            "end": 250
                                          },
                                          "value": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "p",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 252,
                                              "end": 253
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "x",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 254,
                                              "end": 255
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 252,
                                            "end": 255
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 249,
                                          "end": 255
                                        }
                                      ],
                                      "start": 239,
                                      "end": 257
                                    },
                                    "start": 232,
                                    "end": 258
                                  }
                                ],
                                "start": 214,
                                "end": 272
                              },
                              "expression": false,
                              "start": 175,
                              "end": 272
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 168,
                            "end": 272
                          }
                        ],
                        "start": 154,
                        "end": 282
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 141,
                      "end": 282
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 134,
                    "end": 282
                  }
                ],
                "start": 34,
                "end": 288
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 25,
              "end": 288
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 288
          }
        ],
        "start": 12,
        "end": 290
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 290
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 291
}
```
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
        "name": "otherRoot",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 16
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Root",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 130,
                                      "end": 134
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 135,
                                      "end": 136
                                    },
                                    "start": 130,
                                    "end": 136
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 137,
                                    "end": 142
                                  },
                                  "start": 130,
                                  "end": 142
                                },
                                "typeArguments": null,
                                "start": 130,
                                "end": 142
                              },
                              "start": 128,
                              "end": 142
                            },
                            "start": 122,
                            "end": 142
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
                                  "start": 147,
                                  "end": 148
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 150,
                                  "end": 151
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 147,
                                "end": 151
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
                                  "start": 153,
                                  "end": 154
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 156,
                                  "end": 157
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 153,
                                "end": 157
                              }
                            ],
                            "start": 145,
                            "end": 159
                          },
                          "definite": false,
                          "start": 122,
                          "end": 159
                        }
                      ],
                      "declare": false,
                      "start": 118,
                      "end": 160
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 111,
                    "end": 160
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "TSModuleDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Utils",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 184,
                        "end": 189
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
                                "name": "Plane",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 217,
                                "end": 222
                              },
                              "typeParameters": null,
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
                                      "start": 241,
                                      "end": 252
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
                                            "name": "tl",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "TSQualifiedName",
                                                  "left": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Root",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 264,
                                                      "end": 268
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "A",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 269,
                                                      "end": 270
                                                    },
                                                    "start": 264,
                                                    "end": 270
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "Point",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 271,
                                                    "end": 276
                                                  },
                                                  "start": 264,
                                                  "end": 276
                                                },
                                                "typeArguments": null,
                                                "start": 264,
                                                "end": 276
                                              },
                                              "start": 262,
                                              "end": 276
                                            },
                                            "start": 260,
                                            "end": 276
                                          },
                                          "readonly": false,
                                          "static": false,
                                          "start": 253,
                                          "end": 276
                                        },
                                        {
                                          "type": "TSParameterProperty",
                                          "accessibility": "public",
                                          "decorators": [],
                                          "override": false,
                                          "parameter": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "br",
                                            "optional": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "TSQualifiedName",
                                                  "left": {
                                                    "type": "TSQualifiedName",
                                                    "left": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "Root",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 289,
                                                      "end": 293
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "A",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 294,
                                                      "end": 295
                                                    },
                                                    "start": 289,
                                                    "end": 295
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "Point",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 296,
                                                    "end": 301
                                                  },
                                                  "start": 289,
                                                  "end": 301
                                                },
                                                "typeArguments": null,
                                                "start": 289,
                                                "end": 301
                                              },
                                              "start": 287,
                                              "end": 301
                                            },
                                            "start": 285,
                                            "end": 301
                                          },
                                          "readonly": false,
                                          "static": false,
                                          "start": 278,
                                          "end": 301
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 303,
                                        "end": 306
                                      },
                                      "expression": false,
                                      "start": 252,
                                      "end": 306
                                    },
                                    "kind": "constructor",
                                    "computed": false,
                                    "static": false,
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null,
                                    "start": 241,
                                    "end": 306
                                  }
                                ],
                                "start": 223,
                                "end": 320
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 211,
                              "end": 320
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 204,
                            "end": 320
                          }
                        ],
                        "start": 190,
                        "end": 330
                      },
                      "kind": "module",
                      "declare": false,
                      "global": false,
                      "start": 177,
                      "end": 330
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 170,
                    "end": 330
                  }
                ],
                "start": 39,
                "end": 336
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 30,
              "end": 336
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 23,
            "end": 336
          }
        ],
        "start": 17,
        "end": 338
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 338
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 338
}
```
