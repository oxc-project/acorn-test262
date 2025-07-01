__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "toInstantiate",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 30
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 31,
            "end": 32
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 35
          }
        ],
        "start": 30,
        "end": 36
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 42
              },
              "typeArguments": null,
              "start": 41,
              "end": 42
            },
            "start": 39,
            "end": 42
          },
          "start": 37,
          "end": 42
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 48,
                "end": 49
              },
              "typeArguments": null,
              "start": 48,
              "end": 49
            },
            "start": 46,
            "end": 49
          },
          "start": 44,
          "end": 49
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "typeArguments": null,
          "start": 52,
          "end": 53
        },
        "start": 50,
        "end": 53
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "contextual",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 82
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              },
              "start": 89,
              "end": 97
            },
            "start": 87,
            "end": 97
          },
          "value": null,
          "start": 83,
          "end": 97
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 100,
          "end": 106
        },
        "start": 98,
        "end": 106
      },
      "body": null,
      "expression": false,
      "start": 55,
      "end": 106
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sig",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "contextual",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 124,
                  "end": 134
                },
                "typeArguments": null,
                "start": 117,
                "end": 134
              },
              "start": 115,
              "end": 134
            },
            "start": 112,
            "end": 134
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "toInstantiate",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 150
          },
          "definite": false,
          "start": 112,
          "end": 150
        }
      ],
      "declare": false,
      "start": 108,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 151
}
```
