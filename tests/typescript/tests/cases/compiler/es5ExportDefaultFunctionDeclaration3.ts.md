__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 23,
            "decorators": [],
            "name": "before",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 10,
              "end": 23,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 12,
                "end": 23,
                "exprName": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 23,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 26,
            "end": 32,
            "callee": {
              "type": "Identifier",
              "start": 26,
              "end": 30,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 35,
      "end": 99,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 50,
        "end": 99,
        "id": {
          "type": "Identifier",
          "start": 59,
          "end": 63,
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
          "start": 65,
          "end": 78,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 67,
            "end": 78,
            "exprName": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 79,
          "end": 99,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 85,
              "end": 97,
              "argument": {
                "type": "Identifier",
                "start": 92,
                "end": 96,
                "decorators": [],
                "name": "func",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "expression": false
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 133,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 132,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 123,
            "decorators": [],
            "name": "after",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 123,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 112,
                "end": 123,
                "exprName": {
                  "type": "Identifier",
                  "start": 119,
                  "end": 123,
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 126,
            "end": 132,
            "callee": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "func",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
