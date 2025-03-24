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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 30,
        "name": "toInstantiate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 37,
          "end": 42,
          "name": "a",
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
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        },
        {
          "type": "Identifier",
          "start": 44,
          "end": 49,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 46,
            "end": 49,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 48,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 36,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 32,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 34,
            "end": 35,
            "name": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "name": "B",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 53,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 52,
          "end": 53,
          "typeName": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 55,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 82,
        "name": "contextual",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 83,
          "end": 97,
          "argument": {
            "type": "Identifier",
            "start": 86,
            "end": 87,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 98,
        "end": 106,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 100,
          "end": 106
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 134,
            "name": "sig",
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
                  "name": "contextual",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 137,
            "end": 150,
            "name": "toInstantiate",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
