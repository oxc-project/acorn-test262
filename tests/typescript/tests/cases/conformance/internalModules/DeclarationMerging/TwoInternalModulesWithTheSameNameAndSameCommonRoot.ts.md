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
        "start": 7,
        "end": 8
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
                "start": 32,
                "end": 37
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
                      "start": 48,
                      "end": 49
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      },
                      "start": 49,
                      "end": 57
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 48,
                    "end": 58
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
                      "start": 67,
                      "end": 68
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      },
                      "start": 68,
                      "end": 76
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 67,
                    "end": 77
                  }
                ],
                "start": 38,
                "end": 83
              },
              "declare": false,
              "start": 22,
              "end": 83
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 15,
            "end": 83
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
                "start": 103,
                "end": 108
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
                        "start": 135,
                        "end": 141
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
                              "start": 142,
                              "end": 143
                            },
                            "constraint": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Point",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 152,
                                "end": 157
                              },
                              "typeArguments": null,
                              "start": 152,
                              "end": 157
                            },
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 142,
                            "end": 157
                          }
                        ],
                        "start": 141,
                        "end": 158
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
                                "start": 162,
                                "end": 163
                              },
                              "typeArguments": null,
                              "start": 162,
                              "end": 163
                            },
                            "start": 160,
                            "end": 163
                          },
                          "start": 159,
                          "end": 163
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
                                    "start": 188,
                                    "end": 189
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 191,
                                      "end": 192
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 193,
                                      "end": 194
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 191,
                                    "end": 194
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 188,
                                  "end": 194
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
                                    "start": 196,
                                    "end": 197
                                  },
                                  "value": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "p",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 199,
                                      "end": 200
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 201,
                                      "end": 202
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 199,
                                    "end": 202
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 196,
                                  "end": 202
                                }
                              ],
                              "start": 186,
                              "end": 204
                            },
                            "start": 179,
                            "end": 205
                          }
                        ],
                        "start": 165,
                        "end": 215
                      },
                      "expression": false,
                      "start": 126,
                      "end": 215
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 119,
                    "end": 215
                  }
                ],
                "start": 109,
                "end": 221
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 96,
              "end": 221
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 89,
            "end": 221
          }
        ],
        "start": 9,
        "end": 223
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 223
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 224
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
        "start": 7,
        "end": 8
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
                          "start": 34,
                          "end": 39
                        },
                        "typeArguments": null,
                        "start": 34,
                        "end": 39
                      },
                      "start": 32,
                      "end": 39
                    },
                    "start": 26,
                    "end": 39
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
                          "start": 44,
                          "end": 45
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 47,
                          "end": 48
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 44,
                        "end": 48
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
                          "start": 50,
                          "end": 51
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 53,
                          "end": 54
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 50,
                        "end": 54
                      }
                    ],
                    "start": 42,
                    "end": 56
                  },
                  "definite": false,
                  "start": 26,
                  "end": 56
                }
              ],
              "declare": false,
              "start": 22,
              "end": 57
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 15,
            "end": 57
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
                "start": 77,
                "end": 82
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
                        "start": 106,
                        "end": 111
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
                              "start": 126,
                              "end": 137
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
                                          "start": 149,
                                          "end": 154
                                        },
                                        "typeArguments": null,
                                        "start": 149,
                                        "end": 154
                                      },
                                      "start": 147,
                                      "end": 154
                                    },
                                    "start": 145,
                                    "end": 154
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "start": 138,
                                  "end": 154
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
                                          "start": 167,
                                          "end": 172
                                        },
                                        "typeArguments": null,
                                        "start": 167,
                                        "end": 172
                                      },
                                      "start": 165,
                                      "end": 172
                                    },
                                    "start": 163,
                                    "end": 172
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "start": 156,
                                  "end": 172
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 174,
                                "end": 177
                              },
                              "expression": false,
                              "start": 137,
                              "end": 177
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 126,
                            "end": 177
                          }
                        ],
                        "start": 112,
                        "end": 187
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 100,
                      "end": 187
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 93,
                    "end": 187
                  }
                ],
                "start": 83,
                "end": 193
              },
              "kind": "module",
              "declare": false,
              "global": false,
              "start": 70,
              "end": 193
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 63,
            "end": 193
          }
        ],
        "start": 9,
        "end": 195
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 195
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 196
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
