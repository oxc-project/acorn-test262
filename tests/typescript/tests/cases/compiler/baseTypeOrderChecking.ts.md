__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "someVariable",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Class4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 24
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Class2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 25,
                        "end": 31
                      },
                      "typeArguments": null,
                      "start": 25,
                      "end": 31
                    }
                  ],
                  "start": 24,
                  "end": 32
                },
                "start": 18,
                "end": 32
              },
              "start": 16,
              "end": 32
            },
            "start": 4,
            "end": 32
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class1",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 50
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 52,
        "end": 56
      },
      "abstract": false,
      "declare": false,
      "start": 38,
      "end": 56
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class2",
        "optional": false,
        "typeAnnotation": null,
        "start": 67,
        "end": 73
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class1",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 88
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 90,
        "end": 94
      },
      "abstract": false,
      "declare": false,
      "start": 61,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class3",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 111
      },
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
              "start": 112,
              "end": 113
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 112,
            "end": 113
          }
        ],
        "start": 111,
        "end": 114
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
              "name": "memberVariable",
              "optional": false,
              "typeAnnotation": null,
              "start": 141,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Class2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 157,
                  "end": 163
                },
                "typeArguments": null,
                "start": 157,
                "end": 163
              },
              "start": 155,
              "end": 163
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 134,
            "end": 164
          }
        ],
        "start": 116,
        "end": 167
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 167
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class4",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 184
      },
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
              "start": 185,
              "end": 186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 186
          }
        ],
        "start": 184,
        "end": 187
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Class3",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 202
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 204
            },
            "typeArguments": null,
            "start": 203,
            "end": 204
          }
        ],
        "start": 202,
        "end": 205
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 207,
        "end": 211
      },
      "abstract": false,
      "declare": false,
      "start": 172,
      "end": 211
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 211
}
```
