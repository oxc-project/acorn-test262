__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrImpl",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 14,
            "end": 15
          }
        ],
        "start": 13,
        "end": 16
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
                },
                "typeArguments": null,
                "start": 25,
                "end": 26
              },
              "start": 23,
              "end": 26
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 21,
            "end": 27
          }
        ],
        "start": 17,
        "end": 29
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "Err",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ErrImpl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 64
                    },
                    "typeArguments": null,
                    "start": 50,
                    "end": 64
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 69,
                            "end": 70
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 69,
                          "end": 70
                        }
                      ],
                      "start": 68,
                      "end": 71
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 77,
                          "end": 78
                        },
                        "typeArguments": null,
                        "start": 77,
                        "end": 78
                      },
                      "start": 74,
                      "end": 78
                    },
                    "start": 68,
                    "end": 78
                  }
                ],
                "start": 50,
                "end": 79
              },
              "start": 48,
              "end": 79
            },
            "start": 45,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 45,
          "end": 79
        }
      ],
      "declare": true,
      "start": 31,
      "end": 80
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ErrAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 95
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 96,
            "end": 97
          }
        ],
        "start": 95,
        "end": 98
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Err",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 111
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 113
              },
              "typeArguments": null,
              "start": 112,
              "end": 113
            }
          ],
          "start": 111,
          "end": 114
        },
        "start": 101,
        "end": 114
      },
      "declare": false,
      "start": 82,
      "end": 115
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ErrAlias",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 142
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 143,
                      "end": 149
                    }
                  ],
                  "start": 142,
                  "end": 150
                },
                "start": 134,
                "end": 150
              },
              "start": 132,
              "end": 150
            },
            "start": 131,
            "end": 150
          },
          "init": null,
          "definite": false,
          "start": 131,
          "end": 150
        }
      ],
      "declare": true,
      "start": 117,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TSAsExpression",
        "expression": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 152,
          "end": 153
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ErrAlias",
            "optional": false,
            "typeAnnotation": null,
            "start": 157,
            "end": 165
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 166,
                "end": 172
              }
            ],
            "start": 165,
            "end": 173
          },
          "start": 157,
          "end": 173
        },
        "start": 152,
        "end": 173
      },
      "directive": null,
      "start": 152,
      "end": 174
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 174
}
```
