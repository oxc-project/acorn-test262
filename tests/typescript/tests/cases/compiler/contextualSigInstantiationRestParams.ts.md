__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 54,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 30,
        "decorators": [],
        "name": "toInstantiate",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 37,
          "end": 42,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 42,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 42,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 42,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 44,
          "end": 49,
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 53,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 52,
          "end": 53,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 32,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 35,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 55,
      "end": 106,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 82,
        "decorators": [],
        "name": "contextual",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 83,
          "end": 97,
          "argument": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 87,
            "end": 97,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 89,
              "end": 97,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 98,
        "end": 106,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 100,
          "end": 106
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 150,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 134,
            "decorators": [],
            "name": "sig",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 117,
                "end": 134,
                "exprName": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 134,
                  "decorators": [],
                  "name": "contextual",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 137,
            "end": 150,
            "decorators": [],
            "name": "toInstantiate",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
