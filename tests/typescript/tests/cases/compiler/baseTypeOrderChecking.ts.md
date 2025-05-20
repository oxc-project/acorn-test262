__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "decorators": [],
            "name": "someVariable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 32,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 18,
                "end": 32,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 24,
                  "end": 32,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 25,
                      "end": 31,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 31,
                        "decorators": [],
                        "name": "Class2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 24,
                  "decorators": [],
                  "name": "Class4",
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
      "type": "ClassDeclaration",
      "start": 38,
      "end": 56,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 56,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 50,
        "decorators": [],
        "name": "Class1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 94,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 73,
        "decorators": [],
        "name": "Class2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 82,
        "end": 88,
        "decorators": [],
        "name": "Class1",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 167,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 167,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 164,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 155,
              "decorators": [],
              "name": "memberVariable",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 163,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 163,
                  "decorators": [],
                  "name": "Class2",
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
        "start": 105,
        "end": 111,
        "decorators": [],
        "name": "Class3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 111,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
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
      "start": 172,
      "end": 211,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 207,
        "end": 211,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 184,
        "decorators": [],
        "name": "Class4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 196,
        "end": 202,
        "decorators": [],
        "name": "Class3",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 202,
        "end": 205,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 203,
            "end": 204,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
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
        "start": 184,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 186,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
