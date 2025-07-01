__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
          "start": 17,
          "end": 23
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
                "start": 24,
                "end": 25
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 24,
              "end": 25
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 28
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 27,
              "end": 28
            }
          ],
          "start": 23,
          "end": 29
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
                "start": 36,
                "end": 37
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
                    "start": 39,
                    "end": 40
                  },
                  "typeArguments": null,
                  "start": 39,
                  "end": 40
                },
                "start": 37,
                "end": 40
              },
              "accessibility": null,
              "static": false,
              "start": 36,
              "end": 41
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
                "start": 46,
                "end": 47
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
                    "start": 49,
                    "end": 50
                  },
                  "typeArguments": null,
                  "start": 49,
                  "end": 50
                },
                "start": 47,
                "end": 50
              },
              "accessibility": null,
              "static": false,
              "start": 46,
              "end": 51
            }
          ],
          "start": 30,
          "end": 53
        },
        "declare": false,
        "start": 7,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 53
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
          "start": 70,
          "end": 74
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
                "start": 75,
                "end": 76
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 75,
              "end": 76
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "CTor",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 82
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 78,
              "end": 82
            }
          ],
          "start": 74,
          "end": 83
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
                              "start": 97,
                              "end": 101
                            },
                            "typeArguments": null,
                            "start": 97,
                            "end": 101
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
                                  "start": 105,
                                  "end": 110
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
                                      "start": 112,
                                      "end": 113
                                    },
                                    "typeArguments": null,
                                    "start": 112,
                                    "end": 113
                                  },
                                  "start": 110,
                                  "end": 113
                                },
                                "accessibility": null,
                                "static": false,
                                "start": 105,
                                "end": 113
                              }
                            ],
                            "start": 104,
                            "end": 114
                          }
                        ],
                        "start": 97,
                        "end": 114
                      },
                      "start": 95,
                      "end": 114
                    },
                    "start": 89,
                    "end": 114
                  }
                ],
                "start": 87,
                "end": 116
              },
              "start": 85,
              "end": 116
            },
            "start": 84,
            "end": 116
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
              "start": 119,
              "end": 125
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
                    "start": 126,
                    "end": 127
                  },
                  "typeArguments": null,
                  "start": 126,
                  "end": 127
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "CTor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 133
                  },
                  "typeArguments": null,
                  "start": 129,
                  "end": 133
                }
              ],
              "start": 125,
              "end": 134
            },
            "start": 119,
            "end": 134
          },
          "start": 117,
          "end": 134
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
                  "start": 148,
                  "end": 152
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 156,
                  "end": 159
                },
                "start": 148,
                "end": 159
              },
              "start": 141,
              "end": 160
            }
          ],
          "start": 135,
          "end": 162
        },
        "expression": false,
        "start": 61,
        "end": 162
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 54,
      "end": 162
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
          "start": 181,
          "end": 186
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 187,
          "end": 190
        },
        "declare": false,
        "start": 171,
        "end": 190
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 164,
      "end": 190
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
          "start": 213,
          "end": 224
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
                "start": 231,
                "end": 236
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
                    "start": 238,
                    "end": 243
                  },
                  "typeArguments": null,
                  "start": 238,
                  "end": 243
                },
                "start": 236,
                "end": 243
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
              "start": 231,
              "end": 244
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 262
              },
              "typeAnnotation": null,
              "value": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "make",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 269
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "MyComponent",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 270,
                    "end": 281
                  }
                ],
                "optional": false,
                "start": 265,
                "end": 282
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 249,
              "end": 283
            }
          ],
          "start": 225,
          "end": 285
        },
        "abstract": false,
        "declare": false,
        "start": 207,
        "end": 285
      },
      "exportKind": "value",
      "start": 192,
      "end": 285
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 285
}
```
