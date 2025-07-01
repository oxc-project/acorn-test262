__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "me",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 14
          },
          "start": 7,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./this",
        "raw": "\"./this\"",
        "start": 20,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Things",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 53
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 55
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 54,
              "end": 55
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 58
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 57,
              "end": 58
            }
          ],
          "start": 53,
          "end": 59
        },
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
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 70
                  },
                  "typeArguments": null,
                  "start": 69,
                  "end": 70
                },
                "start": 67,
                "end": 70
              },
              "accessibility": null,
              "static": false,
              "start": 66,
              "end": 71
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
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
                    "start": 79,
                    "end": 80
                  },
                  "typeArguments": null,
                  "start": 79,
                  "end": 80
                },
                "start": 77,
                "end": 80
              },
              "accessibility": null,
              "static": false,
              "start": 76,
              "end": 81
            }
          ],
          "start": 60,
          "end": 83
        },
        "declare": false,
        "start": 37,
        "end": 83
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 83
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "make",
          "optional": false,
          "typeAnnotation": null,
          "start": 100,
          "end": 104
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
                "name": "P",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 106
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 105,
              "end": 106
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "CTor",
                "optional": false,
                "typeAnnotation": null,
                "start": 108,
                "end": 112
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 108,
              "end": 112
            }
          ],
          "start": 104,
          "end": 113
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSIntersectionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CTor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 127,
                              "end": 131
                            },
                            "typeArguments": null,
                            "start": 127,
                            "end": 131
                          },
                          {
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
                                  "name": "props",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 135,
                                  "end": 140
                                },
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "P",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 142,
                                      "end": 143
                                    },
                                    "typeArguments": null,
                                    "start": 142,
                                    "end": 143
                                  },
                                  "start": 140,
                                  "end": 143
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 135,
                                "end": 143
                              }
                            ],
                            "start": 134,
                            "end": 144
                          }
                        ],
                        "start": 127,
                        "end": 144
                      },
                      "start": 125,
                      "end": 144
                    },
                    "start": 119,
                    "end": 144
                  }
                ],
                "start": 117,
                "end": 146
              },
              "start": 115,
              "end": 146
            },
            "start": 114,
            "end": 146
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Things",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 155
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 157
                  },
                  "typeArguments": null,
                  "start": 156,
                  "end": 157
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CTor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 163
                  },
                  "typeArguments": null,
                  "start": 159,
                  "end": 163
                }
              ],
              "start": 155,
              "end": 164
            },
            "start": 149,
            "end": 164
          },
          "start": 147,
          "end": 164
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 178,
                  "end": 182
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 186,
                  "end": 189
                },
                "start": 178,
                "end": 189
              },
              "start": 171,
              "end": 190
            }
          ],
          "start": 165,
          "end": 192
        },
        "expression": false,
        "start": 91,
        "end": 192
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 84,
      "end": 192
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 216
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 217,
          "end": 220
        },
        "declare": false,
        "start": 201,
        "end": 220
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 194,
      "end": 220
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MyComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 254
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 261,
                "end": 266
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Props",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 273
                  },
                  "typeArguments": null,
                  "start": 268,
                  "end": 273
                },
                "start": 266,
                "end": 273
              },
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 261,
              "end": 274
            }
          ],
          "start": 255,
          "end": 276
        },
        "abstract": false,
        "declare": false,
        "start": 237,
        "end": 276
      },
      "exportKind": "value",
      "start": 222,
      "end": 276
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Something",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 303
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 314,
                    "end": 325
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 328,
                    "end": 329
                  },
                  "definite": false,
                  "start": 314,
                  "end": 329
                }
              ],
              "declare": false,
              "start": 310,
              "end": 330
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "create",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 422
                    },
                    "init": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "make",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 425,
                        "end": 429
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "me",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 430,
                            "end": 432
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "default",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 433,
                            "end": 440
                          },
                          "optional": false,
                          "computed": false,
                          "start": 430,
                          "end": 440
                        }
                      ],
                      "optional": false,
                      "start": 425,
                      "end": 441
                    },
                    "definite": false,
                    "start": 416,
                    "end": 441
                  }
                ],
                "declare": false,
                "start": 410,
                "end": 442
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 403,
              "end": 442
            }
          ],
          "start": 304,
          "end": 444
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 284,
        "end": 444
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 277,
      "end": 444
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 444
}
```
