__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 174,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 17,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 21,
            "end": 27,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": true,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 25,
                "end": 26,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "E",
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
        "end": 13,
        "decorators": [],
        "name": "ErrImpl",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "E",
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
      "start": 31,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 79,
            "decorators": [],
            "name": "Err",
            "optional": false,
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
                      "decorators": [],
                      "name": "ErrImpl",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSFunctionType",
                    "start": 68,
                    "end": 78,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 74,
                      "end": 78,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 77,
                        "end": 78,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 77,
                          "end": 78,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 68,
                      "end": 71,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 69,
                          "end": 70,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 70,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 82,
      "end": 115,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 95,
        "decorators": [],
        "name": "ErrAlias",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 101,
        "end": 114,
        "exprName": {
          "type": "Identifier",
          "start": 108,
          "end": 111,
          "decorators": [],
          "name": "Err",
          "optional": false,
          "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "U",
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
      "start": 117,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 150,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 150,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 150,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 142,
                  "decorators": [],
                  "name": "ErrAlias",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 174,
      "directive": null,
      "expression": {
        "type": "TSAsExpression",
        "start": 152,
        "end": 173,
        "expression": {
          "type": "Identifier",
          "start": 152,
          "end": 153,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 157,
          "end": 173,
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
          },
          "typeName": {
            "type": "Identifier",
            "start": 157,
            "end": 165,
            "decorators": [],
            "name": "ErrAlias",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
