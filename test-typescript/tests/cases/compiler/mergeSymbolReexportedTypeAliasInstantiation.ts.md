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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "name": "Row2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 12,
            "name": "Row2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        },
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "C",
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
        "end": 25,
        "value": ".",
        "raw": "'.'"
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 71,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 71,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 36,
                "end": 70,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 58,
                    "name": "rowData",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 46,
                        "end": 58,
                        "typeName": {
                          "type": "Identifier",
                          "start": 46,
                          "end": 50,
                          "name": "Row2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                        }
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 74,
            "end": 104,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 75,
                "end": 93,
                "name": "rowData",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 82,
                  "end": 93,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 84,
                    "end": 93,
                    "typeName": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 88,
                      "name": "Row2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 99,
              "end": 103,
              "value": null,
              "raw": "null"
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 116,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 116,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 116,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 124,
                  "end": 126,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 7,
        "end": 10,
        "value": ".",
        "raw": "'.'"
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 11,
      "end": 79,
      "id": {
        "type": "Literal",
        "start": 26,
        "end": 29,
        "value": ".",
        "raw": "'.'"
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 30,
        "end": 79,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 34,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 43,
              "name": "Row2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
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
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 49,
              "end": 51,
              "members": []
            },
            "declare": false
          },
          {
            "type": "TSTypeAliasDeclaration",
            "start": 54,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 63,
              "end": 77,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 65,
                  "end": 75,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 13,
          "end": 17,
          "local": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "name": "Row2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 13,
            "end": 17,
            "name": "Row2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 34,
        "value": "./common",
        "raw": "'./common'"
      },
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
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 21,
          "name": "Row2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 22,
          "end": 24,
          "body": []
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
