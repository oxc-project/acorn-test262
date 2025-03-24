__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 18,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "x",
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
              "start": 19,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 21,
                "end": 26,
                "typeName": {
                  "type": "Identifier",
                  "start": 21,
                  "end": 23,
                  "name": "C2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 23,
                  "end": 26,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 24,
                      "end": 25,
                      "typeName": {
                        "type": "Identifier",
                        "start": 24,
                        "end": 25,
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
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 11,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 10,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
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
      "start": 31,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 39,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 51,
        "end": 53,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 57,
        "end": 74,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 63,
            "end": 72,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "name": "x",
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
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 66,
                "end": 72
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 39,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
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
        "start": 53,
        "end": 56,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 54,
            "end": 55,
            "typeName": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
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
