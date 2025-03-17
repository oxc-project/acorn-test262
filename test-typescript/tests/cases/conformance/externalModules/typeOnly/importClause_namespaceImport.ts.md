__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 29,
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
          "start": 15,
          "end": 29,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 17,
              "end": 27,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
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
                "start": 19,
                "end": 27,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 21,
                  "end": 27
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
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
      "start": 30,
      "end": 59,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 37,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 45,
          "end": 59,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 47,
              "end": 57,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "b",
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
                "start": 49,
                "end": 57,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 51,
                  "end": 57
                }
              },
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
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
      "start": 60,
      "end": 81,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 67,
        "end": 81,
        "id": {
          "type": "Identifier",
          "start": 72,
          "end": 73,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 73,
          "end": 76,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 74,
              "end": 75,
              "name": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
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
          "type": "TSTypeReference",
          "start": 79,
          "end": 80,
          "typeName": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
      "start": 82,
      "end": 106,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 89,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 95,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 95,
              "end": 100,
              "name": "Value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 103,
              "end": 105,
              "properties": []
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
  "end": 173,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 34,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 12,
          "end": 22,
          "local": {
            "type": "Identifier",
            "start": 17,
            "end": 22,
            "name": "types",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 33,
        "value": "./a",
        "raw": "'./a'"
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 41,
      "expression": {
        "type": "Identifier",
        "start": 35,
        "end": 40,
        "name": "types",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 54,
      "expression": {
        "type": "MemberExpression",
        "start": 42,
        "end": 53,
        "object": {
          "type": "Identifier",
          "start": 42,
          "end": 47,
          "name": "types",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 48,
          "end": 53,
          "name": "Value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 73,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 73,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 73,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 62,
                  "end": 73,
                  "left": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 67,
                    "name": "types",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 68,
                    "end": 73,
                    "name": "Value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 75,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 91,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 84,
                "end": 91,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 84,
                  "end": 91,
                  "left": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 89,
                    "name": "types",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 94,
            "end": 96,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 119,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 114,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 107,
                "end": 114,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 107,
                  "end": 114,
                  "left": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 112,
                    "name": "types",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 113,
                    "end": 114,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 117,
            "end": 119,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 121,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 145,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 145,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 130,
                "end": 145,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 130,
                  "end": 137,
                  "left": {
                    "type": "Identifier",
                    "start": 130,
                    "end": 135,
                    "name": "types",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 137,
                  "end": 145,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 138,
                      "end": 144
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 148,
            "end": 150,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 172,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 171,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 159,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 162,
            "end": 171,
            "properties": [
              {
                "type": "Property",
                "start": 164,
                "end": 169,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 169,
                  "name": "types",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 164,
                  "end": 169,
                  "name": "types",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
