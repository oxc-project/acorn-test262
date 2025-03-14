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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 46,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 20,
          "decorators": [],
          "name": "Whatever",
          "optional": false
        },
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
              "key": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 25,
                "end": 33,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 27,
                  "end": 33
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 35,
              "end": 44,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 38,
                  "end": 44
                }
              }
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 47,
      "end": 129,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 54,
        "end": 129,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 64,
          "decorators": [],
          "name": "Props",
          "optional": false
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
                      "optional": false
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 102,
                    "end": 105,
                    "literal": {
                      "type": "Literal",
                      "start": 102,
                      "end": 105,
                      "raw": "\"y\"",
                      "value": "y"
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 89,
                "end": 93,
                "decorators": [],
                "name": "Omit",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 109,
              "end": 124,
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
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 109,
                "end": 116,
                "decorators": [],
                "name": "Partial",
                "optional": false
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
                "optional": false
              }
            }
          ]
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 65,
                "end": 66,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 68,
              "end": 85,
              "const": false,
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
                  "optional": false
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 68,
                "end": 74,
                "decorators": [],
                "name": "TThing",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 36,
        "raw": "\"react-select\"",
        "value": "react-select"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Props",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 106,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 65,
              "decorators": [],
              "name": "CustomSelect1",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 68,
              "end": 106,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 106,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
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
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 81,
                            "end": 86,
                            "decorators": [],
                            "name": "Props",
                            "optional": false
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
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 68,
                "end": 77,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 69,
                    "end": 75,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 75,
                      "decorators": [],
                      "name": "Option",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 107,
      "end": 171,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 114,
        "end": 171,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 169,
          "end": 171,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 123,
          "end": 136,
          "decorators": [],
          "name": "CustomSelect2",
          "optional": false
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
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 154,
                      "decorators": [],
                      "name": "Props",
                      "optional": false
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
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 136,
          "end": 145,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 137,
              "end": 143,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 137,
                "end": 143,
                "decorators": [],
                "name": "Option",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
