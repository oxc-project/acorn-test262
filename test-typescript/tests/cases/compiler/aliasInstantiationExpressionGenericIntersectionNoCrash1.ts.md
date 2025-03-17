__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 175,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 13,
        "name": "ErrImpl",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "e",
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
              "start": 23,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 25,
                "end": 26,
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "E",
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
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "E",
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
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 79,
            "name": "Err",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 79,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 50,
                "end": 79,
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "start": 50,
                    "end": 64,
                    "exprName": {
                      "type": "Identifier",
                      "start": 57,
                      "end": 64,
                      "name": "ErrImpl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 68,
                    "end": 78,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 68,
                      "end": 71,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 69,
                          "end": 70,
                          "name": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 70,
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
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 74,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 77,
                        "end": 78,
                        "typeName": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 78,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 82,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 95,
        "name": "ErrAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 95,
        "end": 98,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 96,
            "end": 97,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "U",
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
        "type": "TSTypeQuery",
        "start": 101,
        "end": 114,
        "exprName": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "name": "Err",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 111,
          "end": 114,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 112,
              "end": 113,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 117,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 150,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 150,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 142,
                  "name": "ErrAlias",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 142,
                  "end": 150,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 143,
                      "end": 149
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 174,
      "expression": {
        "type": "TSAsExpression",
        "start": 152,
        "end": 173,
        "expression": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 157,
          "end": 173,
          "typeName": {
            "type": "Identifier",
            "start": 157,
            "end": 165,
            "name": "ErrAlias",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 165,
            "end": 173,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 166,
                "end": 172
              }
            ]
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
