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
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
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
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 35
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 36,
                      "end": 42
                    },
                    "start": 35,
                    "end": 42
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 33,
                  "end": 43
                }
              ],
              "start": 31,
              "end": 45
            },
            "declare": false,
            "start": 19,
            "end": 45
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "XX",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 65
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 78
                  },
                  "typeArguments": null,
                  "start": 77,
                  "end": 78
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
                      "start": 81,
                      "end": 92
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
                            "name": "m1",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 103,
                                "end": 109
                              },
                              "start": 102,
                              "end": 109
                            },
                            "start": 100,
                            "end": 109
                          },
                          "readonly": false,
                          "static": false,
                          "start": 93,
                          "end": 109
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 111,
                        "end": 114
                      },
                      "expression": false,
                      "start": 92,
                      "end": 114
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 81,
                    "end": 114
                  }
                ],
                "start": 79,
                "end": 116
              },
              "abstract": false,
              "declare": false,
              "start": 57,
              "end": 116
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 50,
            "end": 116
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 132,
              "end": 133
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
                    "start": 136,
                    "end": 137
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 138,
                        "end": 139
                      },
                      "typeArguments": null,
                      "start": 138,
                      "end": 139
                    },
                    "start": 137,
                    "end": 139
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 136,
                  "end": 140
                }
              ],
              "start": 134,
              "end": 142
            },
            "declare": false,
            "start": 122,
            "end": 142
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "typeArguments": null,
                      "start": 168,
                      "end": 169
                    },
                    "start": 167,
                    "end": 169
                  },
                  "start": 166,
                  "end": 169
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 171,
                "end": 174
              },
              "expression": false,
              "start": 155,
              "end": 174
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 148,
            "end": 174
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 186,
                        "end": 187
                      },
                      "typeArguments": null,
                      "start": 186,
                      "end": 187
                    },
                    "start": 185,
                    "end": 187
                  },
                  "start": 184,
                  "end": 187
                },
                "init": null,
                "definite": false,
                "start": 184,
                "end": 187
              }
            ],
            "declare": false,
            "start": 180,
            "end": 188
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 194
              },
              "typeArguments": null,
              "arguments": [
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
                        "start": 196,
                        "end": 197
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 199
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 196,
                      "end": 199
                    }
                  ],
                  "start": 195,
                  "end": 200
                }
              ],
              "optional": false,
              "start": 193,
              "end": 201
            },
            "directive": null,
            "start": 193,
            "end": 202
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "XX",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 222
                      },
                      "typeArguments": null,
                      "start": 220,
                      "end": 222
                    },
                    "start": 219,
                    "end": 222
                  },
                  "start": 218,
                  "end": 222
                },
                "init": null,
                "definite": false,
                "start": 218,
                "end": 222
              }
            ],
            "declare": false,
            "start": 214,
            "end": 223
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 229
              },
              "typeArguments": null,
              "arguments": [
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
                        "start": 231,
                        "end": 232
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 233,
                        "end": 234
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 231,
                      "end": 234
                    }
                  ],
                  "start": 230,
                  "end": 235
                }
              ],
              "optional": false,
              "start": 228,
              "end": 236
            },
            "directive": null,
            "start": 228,
            "end": 237
          }
        ],
        "start": 12,
        "end": 263
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 263
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 264
}
```
