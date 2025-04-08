__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 210,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 27,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 15,
            "end": 25,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 29,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 41,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 44,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 58,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 69,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 69,
        "end": 82,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 70,
            "end": 81,
            "name": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 80,
              "end": 81,
              "typeName": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 83,
        "end": 96,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 89,
            "end": 94,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 93,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 92,
                "end": 93,
                "typeName": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 111,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 102,
          "end": 110,
          "id": {
            "type": "Identifier",
            "start": 102,
            "end": 110,
            "name": "v1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 107,
                  "end": 110,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 108,
                      "end": 109,
                      "typeName": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 140,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 139,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 139,
            "name": "v2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 139,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 135,
                "end": 139,
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 136,
                  "end": 139,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 137,
                      "end": 138,
                      "typeName": {
                        "type": "Identifier",
                        "start": 137,
                        "end": 138,
                        "name": "B",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 176,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 175,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 169,
            "end": 175,
            "object": {
              "type": "MemberExpression",
              "start": 169,
              "end": 173,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 171,
                "name": "v1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
