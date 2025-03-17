__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 20,
          "name": "Whatever",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 23,
          "end": 45,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 24,
              "end": 34,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 35,
              "end": 44,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 38,
                  "end": 44
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 129,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 129,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 64,
          "name": "Props",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 64,
          "end": 86,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 65,
              "end": 66,
              "name": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 68,
              "end": 85,
              "name": {
                "type": "Identifier",
                "start": 68,
                "end": 74,
                "name": "TThing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 85,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 85,
                  "name": "Whatever",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 89,
          "end": 128,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 89,
              "end": 106,
              "typeName": {
                "type": "Identifier",
                "start": 89,
                "end": 93,
                "name": "Omit",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 93,
                "end": 106,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 94,
                    "end": 100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 94,
                      "end": 100,
                      "name": "TThing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 102,
                    "end": 105,
                    "literal": {
                      "type": "Literal",
                      "start": 102,
                      "end": 105,
                      "value": "y",
                      "raw": "\"y\""
                    }
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 109,
              "end": 124,
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 116,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 116,
                "end": 124,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 117,
                    "end": 123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 123,
                      "name": "TThing",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 127,
              "end": 128,
              "typeName": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 37,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "Props",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "Props",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 36,
        "value": "react-select",
        "raw": "\"react-select\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 106,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 106,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 65,
              "name": "CustomSelect1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 68,
              "end": 106,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 99,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "start": 81,
                      "end": 99,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 81,
                          "end": 94,
                          "typeName": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 86,
                            "name": "Props",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 86,
                            "end": 94,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 87,
                                "end": 93,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 87,
                                  "end": 93,
                                  "name": "Option",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 97,
                          "end": 99,
                          "members": []
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 106,
                "body": []
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 77,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 75,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 75,
                      "name": "Option",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 171,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 114,
        "end": 171,
        "id": {
          "type": "Identifier",
          "start": 123,
          "end": 136,
          "name": "CustomSelect2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 146,
            "end": 167,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 147,
              "end": 167,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 149,
                "end": 167,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 162,
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 154,
                      "name": "Props",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 154,
                      "end": 162,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 155,
                          "end": 161,
                          "typeName": {
                            "type": "Identifier",
                            "start": 155,
                            "end": 161,
                            "name": "Option",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 165,
                    "end": 167,
                    "members": []
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "BlockStatement",
          "start": 169,
          "end": 171,
          "body": []
        },
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 136,
          "end": 145,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 137,
              "end": 143,
              "name": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "name": "Option",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "returnType": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
