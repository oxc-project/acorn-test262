__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 212,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 32,
            "name": "someVariable",
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
                  "name": "Class4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "Class2",
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
      "type": "ClassDeclaration",
      "start": 38,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 50,
        "name": "Class1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 56,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 61,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 73,
        "name": "Class2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 82,
        "end": 88,
        "name": "Class1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 90,
        "end": 94,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 99,
      "end": 167,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 111,
        "name": "Class3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 116,
        "end": 167,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 164,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 155,
              "name": "memberVariable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
                  "name": "Class2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
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
    {
      "type": "ClassDeclaration",
      "start": 172,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 184,
        "name": "Class4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 196,
        "end": 202,
        "name": "Class3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 207,
        "end": 211,
        "body": []
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
