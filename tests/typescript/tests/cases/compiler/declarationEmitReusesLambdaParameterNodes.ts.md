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
          "decorators": [],
          "name": "Whatever",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "Props",
          "optional": false,
          "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "TThing",
                "optional": false,
                "typeAnnotation": null
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
                  "decorators": [],
                  "name": "Whatever",
                  "optional": false,
                  "typeAnnotation": null
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
                "decorators": [],
                "name": "Omit",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TThing",
                      "optional": false,
                      "typeAnnotation": null
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
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "TThing",
                      "optional": false,
                      "typeAnnotation": null
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
  "end": 171,
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
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Props",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 106,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 65,
              "decorators": [],
              "name": "CustomSelect1",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 68,
              "end": 106,
              "expression": false,
              "async": false,
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
                      "decorators": [],
                      "name": "Option",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 78,
                  "end": 99,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                            "decorators": [],
                            "name": "Props",
                            "optional": false,
                            "typeAnnotation": null
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
                                  "decorators": [],
                                  "name": "Option",
                                  "optional": false,
                                  "typeAnnotation": null
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
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 106,
                "body": []
              },
              "id": null,
              "generator": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
          "decorators": [],
          "name": "CustomSelect2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
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
                "decorators": [],
                "name": "Option",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "params": [
          {
            "type": "Identifier",
            "start": 146,
            "end": 167,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                      "decorators": [],
                      "name": "Props",
                      "optional": false,
                      "typeAnnotation": null
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
                            "decorators": [],
                            "name": "Option",
                            "optional": false,
                            "typeAnnotation": null
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
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 169,
          "end": 171,
          "body": []
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
