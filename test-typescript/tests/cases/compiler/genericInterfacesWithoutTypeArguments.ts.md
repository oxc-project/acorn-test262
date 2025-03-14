genericInterfacesWithoutTypeArguments.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
      "type": "ClassDeclaration",
      "start": 19,
      "end": 33,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 33,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 26,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
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
      "start": 34,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 38,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 38,
            "end": 42,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 42,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "I",
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
      "start": 44,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 55,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 55,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 52,
                  "end": 55,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 53,
                      "end": 54,
                      "typeName": {
                        "type": "Identifier",
                        "start": 53,
                        "end": 54,
                        "decorators": [],
                        "name": "I",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
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
    }
  ],
  "sourceType": "script"
}
```
