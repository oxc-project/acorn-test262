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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "normal",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 79
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 83,
                  "end": 87
                },
                "start": 81,
                "end": 87
              },
              "body": null,
              "expression": false,
              "start": 64,
              "end": 88
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 88
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
                "start": 118,
                "end": 122
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
                    "start": 133,
                    "end": 137
                  },
                  "typeArguments": null,
                  "start": 126,
                  "end": 137
                },
                "start": 124,
                "end": 137
              },
              "body": null,
              "expression": false,
              "start": 109,
              "end": 138
            },
            "exportKind": "value",
            "start": 94,
            "end": 138
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
                        "start": 162,
                        "end": 166
                      },
                      "typeArguments": null,
                      "start": 155,
                      "end": 166
                    },
                    "start": 153,
                    "end": 166
                  },
                  "start": 148,
                  "end": 166
                },
                "init": null,
                "definite": false,
                "start": 148,
                "end": 166
              }
            ],
            "declare": false,
            "start": 144,
            "end": 167
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": null,
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 173,
            "end": 182
          }
        ],
        "start": 21,
        "end": 184
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 184
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 184
}
```
