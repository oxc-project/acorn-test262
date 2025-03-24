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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 27,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 18,
          "end": 27,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 20,
              "end": 25,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 20,
                "end": 21,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": true,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 22,
                "end": 25,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 24,
                  "end": 25,
                  "typeName": {
                    "type": "Identifier",
                    "start": 24,
                    "end": 25,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 14,
          "end": 17,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 15,
              "end": 16,
              "name": {
                "type": "Identifier",
                "start": 15,
                "end": 16,
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
        "implements": [],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 51,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 42,
          "end": 48,
          "local": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
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
  "end": 159,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 23,
        "end": 28,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 53,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 71,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 79,
                  "end": 81,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 89,
            "end": 101,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 101,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 101,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 109,
                  "end": 110,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 131,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 131,
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 122,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 134,
            "end": 136,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "name": "d",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "name": "B",
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
            "start": 149,
            "end": 158,
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 156,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 152,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 154,
                  "end": 156,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
