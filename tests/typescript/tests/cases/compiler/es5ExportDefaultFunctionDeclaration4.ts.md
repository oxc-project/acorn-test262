__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 15,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "before",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 46,
                        "end": 50
                      },
                      "typeArguments": null,
                      "start": 39,
                      "end": 50
                    },
                    "start": 37,
                    "end": 50
                  },
                  "start": 31,
                  "end": 50
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 50
              }
            ],
            "declare": false,
            "start": 27,
            "end": 51
          },
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 85
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 96,
                    "end": 100
                  },
                  "typeArguments": null,
                  "start": 89,
                  "end": 100
                },
                "start": 87,
                "end": 100
              },
              "body": null,
              "expression": false,
              "start": 72,
              "end": 101
            },
            "exportKind": "value",
            "start": 57,
            "end": 101
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
                  "name": "after",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 125,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 118,
                      "end": 129
                    },
                    "start": 116,
                    "end": 129
                  },
                  "start": 111,
                  "end": 129
                },
                "init": null,
                "definite": false,
                "start": 111,
                "end": 129
              }
            ],
            "declare": false,
            "start": 107,
            "end": 130
          }
        ],
        "start": 21,
        "end": 132
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 132
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 132
}
```
