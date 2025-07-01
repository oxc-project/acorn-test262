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
          "start": 14,
          "end": 15
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
                  "start": 39,
                  "end": 44
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
                        "start": 55,
                        "end": 56
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 58,
                          "end": 64
                        },
                        "start": 56,
                        "end": 64
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 55,
                      "end": 65
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
                        "start": 74,
                        "end": 75
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 77,
                          "end": 83
                        },
                        "start": 75,
                        "end": 83
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 74,
                      "end": 84
                    }
                  ],
                  "start": 45,
                  "end": 90
                },
                "declare": false,
                "start": 29,
                "end": 90
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 22,
              "end": 90
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
                  "start": 110,
                  "end": 115
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
                          "start": 142,
                          "end": 148
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
                                "start": 149,
                                "end": 150
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Point",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 159,
                                  "end": 164
                                },
                                "typeArguments": null,
                                "start": 159,
                                "end": 164
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 149,
                              "end": 164
                            }
                          ],
                          "start": 148,
                          "end": 165
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
                                  "start": 169,
                                  "end": 170
                                },
                                "typeArguments": null,
                                "start": 169,
                                "end": 170
                              },
                              "start": 167,
                              "end": 170
                            },
                            "start": 166,
                            "end": 170
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
                                      "start": 195,
                                      "end": 196
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 198,
                                        "end": 199
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "y",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 200,
                                        "end": 201
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 198,
                                      "end": 201
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 195,
                                    "end": 201
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
                                      "start": 203,
                                      "end": 204
                                    },
                                    "value": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "p",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 206,
                                        "end": 207
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 208,
                                        "end": 209
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 206,
                                      "end": 209
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 203,
                                    "end": 209
                                  }
                                ],
                                "start": 193,
                                "end": 211
                              },
                              "start": 186,
                              "end": 212
                            }
                          ],
                          "start": 172,
                          "end": 222
                        },
                        "expression": false,
                        "start": 133,
                        "end": 222
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 126,
                      "end": 222
                    }
                  ],
                  "start": 116,
                  "end": 228
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 103,
                "end": 228
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 96,
              "end": 228
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
                            "start": 253,
                            "end": 258
                          },
                          "typeArguments": null,
                          "start": 253,
                          "end": 258
                        },
                        "start": 251,
                        "end": 258
                      },
                      "start": 245,
                      "end": 258
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
                            "start": 263,
                            "end": 264
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 266,
                            "end": 267
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 263,
                          "end": 267
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
                        }
                      ],
                      "start": 261,
                      "end": 275
                    },
                    "definite": false,
                    "start": 245,
                    "end": 275
                  }
                ],
                "declare": false,
                "start": 241,
                "end": 276
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 234,
              "end": 276
            }
          ],
          "start": 16,
          "end": 278
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 278
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 278
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 279
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
          "start": 14,
          "end": 15
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
                            "start": 107,
                            "end": 112
                          },
                          "typeArguments": null,
                          "start": 107,
                          "end": 112
                        },
                        "start": 105,
                        "end": 112
                      },
                      "start": 99,
                      "end": 112
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
                            "start": 117,
                            "end": 118
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 120,
                            "end": 121
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 117,
                          "end": 121
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
                            "start": 123,
                            "end": 124
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 126,
                            "end": 127
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 123,
                          "end": 127
                        }
                      ],
                      "start": 115,
                      "end": 129
                    },
                    "definite": false,
                    "start": 99,
                    "end": 129
                  }
                ],
                "declare": false,
                "start": 95,
                "end": 130
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 88,
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
                  "start": 150,
                  "end": 155
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
                          "start": 179,
                          "end": 184
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
                                "start": 199,
                                "end": 210
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
                                            "start": 222,
                                            "end": 227
                                          },
                                          "typeArguments": null,
                                          "start": 222,
                                          "end": 227
                                        },
                                        "start": 220,
                                        "end": 227
                                      },
                                      "start": 218,
                                      "end": 227
                                    },
                                    "readonly": false,
                                    "static": false,
                                    "start": 211,
                                    "end": 227
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
                                            "start": 240,
                                            "end": 245
                                          },
                                          "typeArguments": null,
                                          "start": 240,
                                          "end": 245
                                        },
                                        "start": 238,
                                        "end": 245
                                      },
                                      "start": 236,
                                      "end": 245
                                    },
                                    "readonly": false,
                                    "static": false,
                                    "start": 229,
                                    "end": 245
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "start": 247,
                                  "end": 250
                                },
                                "expression": false,
                                "start": 210,
                                "end": 250
                              },
                              "kind": "constructor",
                              "computed": false,
                              "static": false,
                              "override": false,
                              "optional": false,
                              "accessibility": null,
                              "start": 199,
                              "end": 250
                            }
                          ],
                          "start": 185,
                          "end": 260
                        },
                        "abstract": false,
                        "declare": false,
                        "start": 173,
                        "end": 260
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "value",
                      "attributes": [],
                      "start": 166,
                      "end": 260
                    }
                  ],
                  "start": 156,
                  "end": 266
                },
                "kind": "module",
                "declare": false,
                "global": false,
                "start": 143,
                "end": 266
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 136,
              "end": 266
            }
          ],
          "start": 16,
          "end": 268
        },
        "kind": "module",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 268
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 268
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 268
}
```
