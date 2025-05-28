__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 18,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 44,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 44,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 43,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 43,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 43,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 33,
                  "end": 43,
                  "exprName": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 43,
                    "decorators": [],
                    "name": "foo",
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
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 64,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 52,
        "end": 64,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 56,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
