__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 132,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "bar",
        "raw": "\"bar\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 132,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 51,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 31,
                "end": 50,
                "id": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 50,
                  "decorators": [],
                  "name": "before",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 37,
                    "end": 50,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 39,
                      "end": 50,
                      "exprName": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 50,
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 57,
            "end": 101,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 72,
              "end": 101,
              "id": {
                "type": "Identifier",
                "start": 81,
                "end": 85,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 87,
                "end": 100,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 89,
                  "end": 100,
                  "exprName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 100,
                    "decorators": [],
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": null,
              "expression": false
            },
            "exportKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 107,
            "end": 130,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 111,
                "end": 129,
                "id": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 129,
                  "decorators": [],
                  "name": "after",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 129,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 118,
                      "end": 129,
                      "exprName": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 129,
                        "decorators": [],
                        "name": "func",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
