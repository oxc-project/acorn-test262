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
        "name": "A",
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 40
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
                      "start": 51,
                      "end": 52
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 54,
                        "end": 60
                      },
                      "start": 52,
                      "end": 60
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 51,
                    "end": 61
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
                      "start": 70,
                      "end": 71
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 73,
                        "end": 79
                      },
                      "start": 71,
                      "end": 79
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 70,
                    "end": 80
                  }
                ],
                "start": 41,
                "end": 86
              },
              "declare": false,
              "start": 25,
              "end": 86
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 18,
            "end": 86
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
                "start": 109,
                "end": 114
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
                        "start": 141,
                        "end": 147
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
                              "start": 148,
                              "end": 149
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 158,
                                "end": 163
                              },
                              "typeArguments": null,
                              "start": 158,
                              "end": 163
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 148,
                            "end": 163
                          }
                        ],
                        "start": 147,
                        "end": 164
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
                                "start": 168,
                                "end": 169
                              },
                              "typeArguments": null,
                              "start": 168,
                              "end": 169
                            },
                            "start": 166,
                            "end": 169
                          },
                          "start": 165,
                          "end": 169
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
                                    "start": 194,
                                    "end": 195
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 197,
                                      "end": 198
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 199,
                                      "end": 200
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 197,
                                    "end": 200
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 194,
                                  "end": 200
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
                                    "start": 202,
                                    "end": 203
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 205,
                                      "end": 206
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 207,
                                      "end": 208
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 205,
                                    "end": 208
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 202,
                                  "end": 208
                                }
                              ],
                              "start": 192,
                              "end": 210
                            },
                            "start": 185,
                            "end": 211
                          }
                        ],
                        "start": 171,
                        "end": 221
                      },
                      "expression": false,
                      "start": 132,
                      "end": 221
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 125,
                    "end": 221
                  }
                ],
                "start": 115,
                "end": 227
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 99,
              "end": 227
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 92,
            "end": 227
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
                          "start": 251,
                          "end": 256
                        },
                        "typeArguments": null,
                        "start": 251,
                        "end": 256
                      },
                      "start": 249,
                      "end": 256
                    },
                    "start": 243,
                    "end": 256
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
                          "start": 261,
                          "end": 262
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 264,
                          "end": 265
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 261,
                        "end": 265
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
                          "start": 267,
                          "end": 268
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 270,
                          "end": 271
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 267,
                        "end": 271
                      }
                    ],
                    "start": 259,
                    "end": 273
                  },
                  "definite": false,
                  "start": 243,
                  "end": 273
                }
              ],
              "declare": false,
              "start": 239,
              "end": 274
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 232,
            "end": 274
          }
        ],
        "start": 12,
        "end": 276
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 276
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 277
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "Origin",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 76,
                      "end": 82
                    },
                    "start": 74,
                    "end": 82
                  },
                  "start": 68,
                  "end": 82
                },
                "init": {
                  "type": "Literal",
                  "value": "0,0",
                  "raw": "\"0,0\"",
                  "start": 85,
                  "end": 90
                },
                "definite": false,
                "start": 68,
                "end": 90
              }
            ],
            "declare": false,
            "start": 64,
            "end": 91
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
                "start": 114,
                "end": 119
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
                        "start": 143,
                        "end": 148
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
                              "start": 163,
                              "end": 174
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
                                          "start": 186,
                                          "end": 191
                                        },
                                        "typeArguments": null,
                                        "start": 186,
                                        "end": 191
                                      },
                                      "start": 184,
                                      "end": 191
                                    },
                                    "start": 182,
                                    "end": 191
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "start": 175,
                                  "end": 191
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
                                          "start": 204,
                                          "end": 209
                                        },
                                        "typeArguments": null,
                                        "start": 204,
                                        "end": 209
                                      },
                                      "start": 202,
                                      "end": 209
                                    },
                                    "start": 200,
                                    "end": 209
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "start": 193,
                                  "end": 209
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 211,
                                "end": 214
                              },
                              "expression": false,
                              "start": 174,
                              "end": 214
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 163,
                            "end": 214
                          }
                        ],
                        "start": 149,
                        "end": 224
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 137,
                      "end": 224
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 130,
                    "end": 224
                  }
                ],
                "start": 120,
                "end": 230
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 104,
              "end": 230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 97,
            "end": 230
          }
        ],
        "start": 12,
        "end": 232
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 232
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 233
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "o",
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
                      "start": 46,
                      "end": 47
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 49,
                        "end": 55
                      },
                      "start": 47,
                      "end": 55
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 46,
                    "end": 56
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
                      "start": 57,
                      "end": 58
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 60,
                        "end": 66
                      },
                      "start": 58,
                      "end": 66
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 57,
                    "end": 66
                  }
                ],
                "start": 44,
                "end": 68
              },
              "start": 42,
              "end": 68
            },
            "start": 41,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 68
        }
      ],
      "declare": false,
      "start": 37,
      "end": 69
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
            "name": "o",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 78
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 84
                  },
                  "start": 77,
                  "end": 84
                },
                "typeArguments": null,
                "start": 77,
                "end": 84
              },
              "start": 75,
              "end": 84
            },
            "start": 74,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 74,
          "end": 84
        }
      ],
      "declare": false,
      "start": 70,
      "end": 85
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 91
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 102
            },
            "optional": false,
            "computed": false,
            "start": 94,
            "end": 102
          },
          "definite": false,
          "start": 90,
          "end": 102
        }
      ],
      "declare": false,
      "start": 86,
      "end": 103
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 112,
                  "end": 113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 114,
                  "end": 119
                },
                "optional": false,
                "computed": false,
                "start": 112,
                "end": 119
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "mirror",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 126
              },
              "optional": false,
              "computed": false,
              "start": 112,
              "end": 126
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              }
            ],
            "optional": false,
            "start": 112,
            "end": 129
          },
          "definite": false,
          "start": 108,
          "end": 129
        }
      ],
      "declare": false,
      "start": 104,
      "end": 130
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
            "name": "p",
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
                      "name": "tl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 141,
                      "end": 143
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 145,
                            "end": 146
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 147,
                            "end": 152
                          },
                          "start": 145,
                          "end": 152
                        },
                        "typeArguments": null,
                        "start": 145,
                        "end": 152
                      },
                      "start": 143,
                      "end": 152
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 141,
                    "end": 153
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "br",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 156
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
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 158,
                            "end": 159
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 160,
                            "end": 165
                          },
                          "start": 158,
                          "end": 165
                        },
                        "typeArguments": null,
                        "start": 158,
                        "end": 165
                      },
                      "start": 156,
                      "end": 165
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 154,
                    "end": 165
                  }
                ],
                "start": 139,
                "end": 167
              },
              "start": 137,
              "end": 167
            },
            "start": 136,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 136,
          "end": 167
        }
      ],
      "declare": false,
      "start": 132,
      "end": 168
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
            "name": "p",
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
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 176,
                      "end": 177
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Utils",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 183
                    },
                    "start": 176,
                    "end": 183
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Plane",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 184,
                    "end": 189
                  },
                  "start": 176,
                  "end": 189
                },
                "typeArguments": null,
                "start": 176,
                "end": 189
              },
              "start": 174,
              "end": 189
            },
            "start": 173,
            "end": 189
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 189
        }
      ],
      "declare": false,
      "start": 169,
      "end": 190
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 196
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 204
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Utils",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 210
                },
                "optional": false,
                "computed": false,
                "start": 203,
                "end": 210
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Plane",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 216
              },
              "optional": false,
              "computed": false,
              "start": 203,
              "end": 216
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 218
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 222,
                      "end": 223
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 225,
                      "end": 226
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 222,
                    "end": 226
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
                      "start": 228,
                      "end": 229
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 231,
                      "end": 232
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 228,
                    "end": 232
                  }
                ],
                "start": 220,
                "end": 234
              }
            ],
            "start": 199,
            "end": 235
          },
          "definite": false,
          "start": 195,
          "end": 235
        }
      ],
      "declare": false,
      "start": 191,
      "end": 236
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 37,
  "end": 237
}
```
