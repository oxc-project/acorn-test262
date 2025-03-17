__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 25,
        "raw": "'.'",
        "value": "."
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 71,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 71,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 36,
                "end": 70,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 58,
                    "decorators": [],
                    "name": "rowData",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 46,
                        "end": 58,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 50,
                          "end": 58,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 51,
                              "end": 57
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 50,
                          "decorators": [],
                          "name": "Row2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 60,
                  "end": 70,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 63,
                    "end": 70
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 74,
            "end": 104,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 99,
              "end": 103,
              "raw": "null",
              "value": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 93,
                "decorators": [],
                "name": "rowData",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 82,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 84,
                    "end": 93,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 88,
                      "end": 93,
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 89,
                          "end": 92
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 88,
                      "decorators": [],
                      "name": "Row2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 116,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 116,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 119,
            "end": 128,
            "properties": [
              {
                "type": "Property",
                "start": 121,
                "end": 126,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 124,
                  "end": 126,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
  "end": 80,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 10,
        "raw": "'.'",
        "value": "."
      },
      "specifiers": []
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 79,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 79,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 34,
            "end": 51,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "decorators": [],
              "name": "Row2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 49,
              "end": 51,
              "members": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 43,
              "end": 46,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 44,
                  "end": 45,
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 54,
            "end": 77,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 63,
              "end": 77,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 65,
                  "end": 75,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    }
                  }
                }
              ]
            },
            "typeParameters": null
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 26,
        "end": 29,
        "raw": "'.'",
        "value": "."
      }
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
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 34,
        "raw": "'./common'",
        "value": "./common"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 17,
          "exported": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "decorators": [],
            "name": "Row2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 24,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "decorators": [],
          "name": "Row2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
