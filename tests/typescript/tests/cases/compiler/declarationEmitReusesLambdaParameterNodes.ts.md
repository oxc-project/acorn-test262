__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Whatever",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 20
        },
        "typeParameters": null,
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
                "start": 24,
                "end": 25
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                },
                "start": 25,
                "end": 33
              },
              "accessibility": null,
              "static": false,
              "start": 24,
              "end": 34
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
                "start": 35,
                "end": 36
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 38,
                  "end": 44
                },
                "start": 36,
                "end": 44
              },
              "accessibility": null,
              "static": false,
              "start": 35,
              "end": 44
            }
          ],
          "start": 23,
          "end": 45
        },
        "declare": false,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 64
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
                "start": 65,
                "end": 66
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 65,
              "end": 66
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 74
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Whatever",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 77,
                  "end": 85
                },
                "typeArguments": null,
                "start": 77,
                "end": 85
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 68,
              "end": 85
            }
          ],
          "start": 64,
          "end": 86
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 93
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 94,
                      "end": 100
                    },
                    "typeArguments": null,
                    "start": 94,
                    "end": 100
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "y",
                      "raw": "\"y\"",
                      "start": 102,
                      "end": 105
                    },
                    "start": 102,
                    "end": 105
                  }
                ],
                "start": 93,
                "end": 106
              },
              "start": 89,
              "end": 106
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 109,
                "end": 116
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TThing",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 117,
                      "end": 123
                    },
                    "typeArguments": null,
                    "start": 117,
                    "end": 123
                  }
                ],
                "start": 116,
                "end": 124
              },
              "start": 109,
              "end": 124
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 128
              },
              "typeArguments": null,
              "start": 127,
              "end": 128
            }
          ],
          "start": 89,
          "end": 128
        },
        "declare": false,
        "start": 54,
        "end": 129
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 129
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 130
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "react-select",
        "raw": "\"react-select\"",
        "start": 22,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
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
              "name": "CustomSelect1",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 65
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 75
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 69,
                    "end": 75
                  }
                ],
                "start": 68,
                "end": 77
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
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 81,
                            "end": 86
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Option",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 87,
                                  "end": 93
                                },
                                "typeArguments": null,
                                "start": 87,
                                "end": 93
                              }
                            ],
                            "start": 86,
                            "end": 94
                          },
                          "start": 81,
                          "end": 94
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 97,
                          "end": 99
                        }
                      ],
                      "start": 81,
                      "end": 99
                    },
                    "start": 79,
                    "end": 99
                  },
                  "start": 78,
                  "end": 99
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 104,
                "end": 106
              },
              "id": null,
              "generator": false,
              "start": 68,
              "end": 106
            },
            "definite": false,
            "start": 52,
            "end": 106
          }
        ],
        "declare": false,
        "start": 46,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 106
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "CustomSelect2",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 136
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
                "name": "Option",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 143
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 137,
              "end": 143
            }
          ],
          "start": 136,
          "end": 145
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
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 149,
                      "end": 154
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 155,
                            "end": 161
                          },
                          "typeArguments": null,
                          "start": 155,
                          "end": 161
                        }
                      ],
                      "start": 154,
                      "end": 162
                    },
                    "start": 149,
                    "end": 162
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 165,
                    "end": 167
                  }
                ],
                "start": 149,
                "end": 167
              },
              "start": 147,
              "end": 167
            },
            "start": 146,
            "end": 167
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 169,
          "end": 171
        },
        "expression": false,
        "start": 114,
        "end": 171
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 107,
      "end": 171
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 171
}
```
