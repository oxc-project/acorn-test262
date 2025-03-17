__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 27,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 20,
              "end": 25,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": true,
              "key": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 24,
                  "end": 25,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "value": null
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 14,
          "end": 17,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 15,
              "end": 16,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
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
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 51,
      "attributes": [],
      "declaration": null,
      "exportKind": "type",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 42,
          "end": 48,
          "exported": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "A",
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
  "end": 159,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 54,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 53,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 84,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 83,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 71,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 71,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 63,
                  "end": 71,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 64,
                      "end": 70
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 74,
            "end": 83,
            "properties": [
              {
                "type": "Property",
                "start": 76,
                "end": 81,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 79,
                  "end": 81,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 85,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 89,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 101,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 101,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 93,
                  "end": 101,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 94,
                      "end": 100
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 104,
            "end": 112,
            "properties": [
              {
                "type": "Property",
                "start": 106,
                "end": 110,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "raw": "3",
                  "value": 3
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 136,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 131,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 131,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 122,
                  "end": 131,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 123,
                      "end": 130
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 134,
            "end": 136,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 149,
            "end": 158,
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 156,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 154,
                  "end": 156,
                  "raw": "\"\"",
                  "value": ""
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
