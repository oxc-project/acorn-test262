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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 42,
            "end": 43
          },
          "definite": false,
          "start": 38,
          "end": 43
        }
      ],
      "declare": false,
      "start": 34,
      "end": 44
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
            "name": "xs",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 61
                  },
                  "typeArguments": null,
                  "start": 53,
                  "end": 61
                },
                "start": 53,
                "end": 63
              },
              "start": 51,
              "end": 63
            },
            "start": 49,
            "end": 63
          },
          "init": null,
          "definite": false,
          "start": 49,
          "end": 63
        }
      ],
      "declare": false,
      "start": 45,
      "end": 64
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
            "name": "xs2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 138,
                  "end": 143
                },
                "typeArguments": null,
                "start": 131,
                "end": 143
              },
              "start": 129,
              "end": 143
            },
            "start": 126,
            "end": 143
          },
          "init": null,
          "definite": false,
          "start": 126,
          "end": 143
        }
      ],
      "declare": false,
      "start": 122,
      "end": 144
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
            "name": "xs3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 166
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 167,
                      "end": 173
                    }
                  ],
                  "start": 166,
                  "end": 174
                },
                "start": 154,
                "end": 174
              },
              "start": 152,
              "end": 174
            },
            "start": 149,
            "end": 174
          },
          "init": null,
          "definite": false,
          "start": 149,
          "end": 174
        }
      ],
      "declare": false,
      "start": 145,
      "end": 175
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
            "name": "xs4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 197
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 206
                      },
                      "typeArguments": null,
                      "start": 198,
                      "end": 206
                    }
                  ],
                  "start": 197,
                  "end": 207
                },
                "start": 185,
                "end": 207
              },
              "start": 183,
              "end": 207
            },
            "start": 180,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 180,
          "end": 207
        }
      ],
      "declare": false,
      "start": 176,
      "end": 208
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 208
}
```
