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
                  "start": 19,
                  "end": 23
                },
                "typeArguments": null,
                "start": 12,
                "end": 23
              },
              "start": 10,
              "end": 23
            },
            "start": 4,
            "end": 23
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 26,
            "end": 32
          },
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 59,
          "end": 63
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
              "start": 74,
              "end": 78
            },
            "typeArguments": null,
            "start": 67,
            "end": 78
          },
          "start": 65,
          "end": 78
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 96
              },
              "start": 85,
              "end": 97
            }
          ],
          "start": 79,
          "end": 99
        },
        "expression": false,
        "start": 50,
        "end": 99
      },
      "exportKind": "value",
      "start": 35,
      "end": 99
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
                  "start": 119,
                  "end": 123
                },
                "typeArguments": null,
                "start": 112,
                "end": 123
              },
              "start": 110,
              "end": 123
            },
            "start": 105,
            "end": 123
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 130
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 126,
            "end": 132
          },
          "definite": false,
          "start": 105,
          "end": 132
        }
      ],
      "declare": false,
      "start": 101,
      "end": 133
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 133
}
```
