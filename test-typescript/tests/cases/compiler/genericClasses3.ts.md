__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 191,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 22,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
              "start": 18,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 20,
                "end": 21,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 27,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 31,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 30,
                "end": 31,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
      "type": "ClassDeclaration",
      "start": 36,
      "end": 80,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 60,
        "end": 80,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 66,
            "end": 78,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 77,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
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
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 56,
        "end": 59,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 57,
            "end": 58,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
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
      "type": "VariableDeclaration",
      "start": 82,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 100,
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 100,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 92,
                  "end": 100,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 93,
                      "end": 99
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 111,
            "end": 115,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 111,
              "end": 113,
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 139,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 147,
            "end": 151,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 147,
              "end": 149,
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 176,
      "end": 189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 180,
          "end": 188,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 184,
            "end": 188,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 184,
              "end": 186,
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 187,
              "end": 188,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
