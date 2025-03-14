typeofClassWithPrivates.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 148,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 35,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 65,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 75,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 74,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 73,
                "end": 74,
                "typeName": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 74,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 80,
            "end": 92,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 91,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 90,
                "end": 91,
                "typeName": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "T",
                  "optional": false
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 112,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 103,
                "end": 112,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 104,
                  "end": 112,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 105,
                      "end": 111
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 104,
                  "decorators": [],
                  "name": "C",
                  "optional": false
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
      "start": 114,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 129,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 129,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 121,
                "end": 129,
                "exprName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "C",
                  "optional": false
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
      "start": 131,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 147,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 139,
                "end": 147,
                "exprName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
