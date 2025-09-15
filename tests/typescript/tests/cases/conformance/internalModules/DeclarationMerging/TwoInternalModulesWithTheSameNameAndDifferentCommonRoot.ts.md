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
        "start": 10,
        "end": 14
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
                "start": 38,
                "end": 39
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
                        "start": 67,
                        "end": 72
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
                              "start": 87,
                              "end": 88
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 90,
                                "end": 96
                              },
                              "start": 88,
                              "end": 96
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 87,
                            "end": 97
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
                              "start": 110,
                              "end": 111
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 113,
                                "end": 119
                              },
                              "start": 111,
                              "end": 119
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 110,
                            "end": 120
                          }
                        ],
                        "start": 73,
                        "end": 130
                      },
                      "declare": false,
                      "start": 57,
                      "end": 130
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 50,
                    "end": 130
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
                        "start": 157,
                        "end": 162
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
                                "start": 193,
                                "end": 199
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
                                      "start": 200,
                                      "end": 201
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Point",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 210,
                                        "end": 215
                                      },
                                      "typeArguments": null,
                                      "start": 210,
                                      "end": 215
                                    },
                                    "default": null,
                                    "in": false,
                                    "out": false,
                                    "const": false,
                                    "start": 200,
                                    "end": 215
                                  }
                                ],
                                "start": 199,
                                "end": 216
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
                                  "start": 217,
                                  "end": 221
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
                                            "start": 250,
                                            "end": 251
                                          },
                                          "value": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "p",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 253,
                                              "end": 254
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "y",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 255,
                                              "end": 256
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 253,
                                            "end": 256
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 250,
                                          "end": 256
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
                                            "start": 258,
                                            "end": 259
                                          },
                                          "value": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "p",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 261,
                                              "end": 262
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "x",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 263,
                                              "end": 264
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 261,
                                            "end": 264
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 258,
                                          "end": 264
                                        }
                                      ],
                                      "start": 248,
                                      "end": 266
                                    },
                                    "start": 241,
                                    "end": 267
                                  }
                                ],
                                "start": 223,
                                "end": 281
                              },
                              "expression": false,
                              "start": 184,
                              "end": 281
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 177,
                            "end": 281
                          }
                        ],
                        "start": 163,
                        "end": 291
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 147,
                      "end": 291
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 140,
                    "end": 291
                  }
                ],
                "start": 40,
                "end": 297
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 28,
              "end": 297
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 21,
            "end": 297
          }
        ],
        "start": 15,
        "end": 299
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 299
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 300
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
        "start": 10,
        "end": 19
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
                "start": 43,
                "end": 44
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
                                      "start": 136,
                                      "end": 140
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "A",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 141,
                                      "end": 142
                                    },
                                    "start": 136,
                                    "end": 142
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 143,
                                    "end": 148
                                  },
                                  "start": 136,
                                  "end": 148
                                },
                                "typeArguments": null,
                                "start": 136,
                                "end": 148
                              },
                              "start": 134,
                              "end": 148
                            },
                            "start": 128,
                            "end": 148
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
                                  "start": 159,
                                  "end": 160
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 162,
                                  "end": 163
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 159,
                                "end": 163
                              }
                            ],
                            "start": 151,
                            "end": 165
                          },
                          "definite": false,
                          "start": 128,
                          "end": 165
                        }
                      ],
                      "declare": false,
                      "start": 124,
                      "end": 166
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 117,
                    "end": 166
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
                        "start": 193,
                        "end": 198
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
                                "start": 226,
                                "end": 231
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
                                      "start": 250,
                                      "end": 261
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
                                                      "start": 273,
                                                      "end": 277
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "A",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 278,
                                                      "end": 279
                                                    },
                                                    "start": 273,
                                                    "end": 279
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "Point",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 280,
                                                    "end": 285
                                                  },
                                                  "start": 273,
                                                  "end": 285
                                                },
                                                "typeArguments": null,
                                                "start": 273,
                                                "end": 285
                                              },
                                              "start": 271,
                                              "end": 285
                                            },
                                            "start": 269,
                                            "end": 285
                                          },
                                          "readonly": false,
                                          "static": false,
                                          "start": 262,
                                          "end": 285
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
                                                      "start": 298,
                                                      "end": 302
                                                    },
                                                    "right": {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "A",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 303,
                                                      "end": 304
                                                    },
                                                    "start": 298,
                                                    "end": 304
                                                  },
                                                  "right": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "Point",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 305,
                                                    "end": 310
                                                  },
                                                  "start": 298,
                                                  "end": 310
                                                },
                                                "typeArguments": null,
                                                "start": 298,
                                                "end": 310
                                              },
                                              "start": 296,
                                              "end": 310
                                            },
                                            "start": 294,
                                            "end": 310
                                          },
                                          "readonly": false,
                                          "static": false,
                                          "start": 287,
                                          "end": 310
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 312,
                                        "end": 315
                                      },
                                      "expression": false,
                                      "start": 261,
                                      "end": 315
                                    },
                                    "kind": "constructor",
                                    "computed": false,
                                    "static": false,
                                    "override": false,
                                    "optional": false,
                                    "accessibility": null,
                                    "start": 250,
                                    "end": 315
                                  }
                                ],
                                "start": 232,
                                "end": 329
                              },
                              "abstract": false,
                              "declare": false,
                              "start": 220,
                              "end": 329
                            },
                            "specifiers": [],
                            "source": null,
                            "exportKind": "value",
                            "attributes": [],
                            "start": 213,
                            "end": 329
                          }
                        ],
                        "start": 199,
                        "end": 339
                      },
                      "kind": "namespace",
                      "declare": false,
                      "global": false,
                      "start": 183,
                      "end": 339
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 176,
                    "end": 339
                  }
                ],
                "start": 45,
                "end": 345
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 33,
              "end": 345
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 345
          }
        ],
        "start": 20,
        "end": 347
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 347
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 347
}
```
