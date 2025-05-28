__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 184,
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
        "end": 184,
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
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 88,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 64,
              "end": 88,
              "id": {
                "type": "Identifier",
                "start": 73,
                "end": 79,
                "decorators": [],
                "name": "normal",
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
                "start": 81,
                "end": 87,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 83,
                  "end": 87
                }
              },
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 94,
            "end": 138,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 109,
              "end": 138,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 122,
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
                "start": 124,
                "end": 137,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 126,
                  "end": 137,
                  "exprName": {
                    "type": "Identifier",
                    "start": 133,
                    "end": 137,
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
            "start": 144,
            "end": 167,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 148,
                "end": 166,
                "id": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 166,
                  "decorators": [],
                  "name": "after",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 153,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 155,
                      "end": 166,
                      "exprName": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 166,
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
            "type": "ExportNamedDeclaration",
            "start": 173,
            "end": 182,
            "declaration": null,
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
