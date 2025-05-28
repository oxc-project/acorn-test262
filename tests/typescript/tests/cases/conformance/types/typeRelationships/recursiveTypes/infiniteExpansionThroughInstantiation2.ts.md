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
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 195,
              "end": 200,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 197,
                "decorators": [],
                "name": "AA",
                "optional": false,
                "typeAnnotation": null
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
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
      "extends": [],
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
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
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
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 301,
          "end": 311,
          "expression": {
            "type": "Identifier",
            "start": 301,
            "end": 303,
            "decorators": [],
            "name": "AA",
            "optional": false,
            "typeAnnotation": null
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
                  "decorators": [],
                  "name": "AA",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "BB",
                        "optional": false,
                        "typeAnnotation": null
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
