__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
          "start": 17,
          "end": 18
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
                  "start": 42,
                  "end": 47
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
                        "start": 58,
                        "end": 59
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 61,
                          "end": 67
                        },
                        "start": 59,
                        "end": 67
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 58,
                      "end": 68
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
                        "start": 77,
                        "end": 78
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 80,
                          "end": 86
                        },
                        "start": 78,
                        "end": 86
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 77,
                      "end": 87
                    }
                  ],
                  "start": 48,
                  "end": 93
                },
                "declare": false,
                "start": 32,
                "end": 93
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 25,
              "end": 93
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
                  "start": 116,
                  "end": 121
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
                          "start": 148,
                          "end": 154
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
                                "start": 155,
                                "end": 156
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 165,
                                  "end": 170
                                },
                                "typeArguments": null,
                                "start": 165,
                                "end": 170
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 155,
                              "end": 170
                            }
                          ],
                          "start": 154,
                          "end": 171
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
                                  "start": 175,
                                  "end": 176
                                },
                                "typeArguments": null,
                                "start": 175,
                                "end": 176
                              },
                              "start": 173,
                              "end": 176
                            },
                            "start": 172,
                            "end": 176
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
                                      "start": 201,
                                      "end": 202
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 204,
                                        "end": 205
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 206,
                                        "end": 207
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 204,
                                      "end": 207
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 201,
                                    "end": 207
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
                                      "start": 209,
                                      "end": 210
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 212,
                                        "end": 213
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 214,
                                        "end": 215
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 212,
                                      "end": 215
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 209,
                                    "end": 215
                                  }
                                ],
                                "start": 199,
                                "end": 217
                              },
                              "start": 192,
                              "end": 218
                            }
                          ],
                          "start": 178,
                          "end": 228
                        },
                        "expression": false,
                        "start": 139,
                        "end": 228
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 132,
                      "end": 228
                    }
                  ],
                  "start": 122,
                  "end": 234
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 106,
                "end": 234
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 99,
              "end": 234
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
                      "name": "Origin",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 259,
                            "end": 264
                          },
                          "typeArguments": null,
                          "start": 259,
                          "end": 264
                        },
                        "start": 257,
                        "end": 264
                      },
                      "start": 251,
                      "end": 264
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
                            "start": 269,
                            "end": 270
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 272,
                            "end": 273
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 269,
                          "end": 273
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
                            "start": 275,
                            "end": 276
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 278,
                            "end": 279
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 275,
                          "end": 279
                        }
                      ],
                      "start": 267,
                      "end": 281
                    },
                    "definite": false,
                    "start": 251,
                    "end": 281
                  }
                ],
                "declare": false,
                "start": 247,
                "end": 282
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 240,
              "end": 282
            }
          ],
          "start": 19,
          "end": 284
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 284
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 284
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
          "start": 17,
          "end": 18
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 110,
                            "end": 115
                          },
                          "typeArguments": null,
                          "start": 110,
                          "end": 115
                        },
                        "start": 108,
                        "end": 115
                      },
                      "start": 102,
                      "end": 115
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
                            "start": 120,
                            "end": 121
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 123,
                            "end": 124
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 120,
                          "end": 124
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
                            "start": 126,
                            "end": 127
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 129,
                            "end": 130
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 126,
                          "end": 130
                        }
                      ],
                      "start": 118,
                      "end": 132
                    },
                    "definite": false,
                    "start": 102,
                    "end": 132
                  }
                ],
                "declare": false,
                "start": 98,
                "end": 133
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 91,
              "end": 133
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
                  "start": 156,
                  "end": 161
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
                          "start": 185,
                          "end": 190
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
                                "start": 205,
                                "end": 216
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
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Point",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 228,
                                            "end": 233
                                          },
                                          "typeArguments": null,
                                          "start": 228,
                                          "end": 233
                                        },
                                        "start": 226,
                                        "end": 233
                                      },
                                      "start": 224,
                                      "end": 233
                                    },
                                    "readonly": false,
                                    "static": false,
                                    "start": 217,
                                    "end": 233
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
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Point",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 246,
                                            "end": 251
                                          },
                                          "typeArguments": null,
                                          "start": 246,
                                          "end": 251
                                        },
                                        "start": 244,
                                        "end": 251
                                      },
                                      "start": 242,
                                      "end": 251
                                    },
                                    "readonly": false,
                                    "static": false,
                                    "start": 235,
                                    "end": 251
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "start": 253,
                                  "end": 256
                                },
                                "expression": false,
                                "start": 216,
                                "end": 256
                              },
                              "kind": "constructor",
                              "computed": false,
                              "static": false,
                              "override": false,
                              "optional": false,
                              "accessibility": null,
                              "start": 205,
                              "end": 256
                            }
                          ],
                          "start": 191,
                          "end": 266
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 179,
                        "end": 266
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 172,
                      "end": 266
                    }
                  ],
                  "start": 162,
                  "end": 272
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 146,
                "end": 272
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 139,
              "end": 272
            }
          ],
          "start": 19,
          "end": 274
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 274
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 274
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 274
}
```
