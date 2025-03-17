__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 172,
  "end": 315,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 172,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "name": "AA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 201,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 200,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 195,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 197,
                "name": "AA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 197,
                "end": 200,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 198,
                    "end": 199,
                    "typeName": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
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
        "start": 266,
        "end": 278,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 272,
            "end": 276,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 273,
              "end": 276,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 275,
                "end": 276,
                "typeName": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 276,
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
      "type": "TSInterfaceDeclaration",
      "start": 280,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 292,
        "name": "BB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 301,
          "end": 311,
          "expression": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "name": "AA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 303,
            "end": 311,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 304,
                "end": 310,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 306,
                  "name": "AA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 306,
                  "end": 310,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 307,
                      "end": 309,
                      "typeName": {
                        "type": "Identifier",
                        "start": 307,
                        "end": 309,
                        "name": "BB",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 312,
        "end": 315,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
