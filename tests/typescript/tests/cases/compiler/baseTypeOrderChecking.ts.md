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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 18,
                  "end": 24,
                  "decorators": [],
                  "name": "Class4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 24,
                  "end": 32,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 25,
                      "end": 31,
                      "typeName": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 31,
                        "decorators": [],
                        "name": "Class2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 38,
      "end": 56,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 56,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 94,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 94,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 167,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 111,
        "end": 114,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 112,
            "end": 113,
            "name": {
              "type": "Identifier",
              "start": 112,
              "end": 113,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 167,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 164,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 155,
              "decorators": [],
              "name": "memberVariable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 155,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 163,
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 163,
                  "decorators": [],
                  "name": "Class2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 172,
      "end": 211,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 187,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 186,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "typeName": {
              "type": "Identifier",
              "start": 203,
              "end": 204,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 207,
        "end": 211,
        "body": []
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
