__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 25,
                  "end": 31
                },
                "start": 23,
                "end": 31
              },
              "start": 17,
              "end": 32
            }
          ],
          "start": 15,
          "end": 34
        },
        "start": 13,
        "end": 34
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 62,
                    "end": 69
                  }
                ],
                "start": 60,
                "end": 71
              },
              "expression": false,
              "start": 48,
              "end": 71
            },
            "start": 41,
            "end": 71
          }
        ],
        "start": 35,
        "end": 73
      },
      "expression": false,
      "start": 0,
      "end": 73
    },
    {
      "type": "EmptyStatement",
      "start": 73,
      "end": 74
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 87
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 85,
            "end": 89
          },
          "definite": false,
          "start": 81,
          "end": 89
        }
      ],
      "declare": false,
      "start": 77,
      "end": 90
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 104
            },
            "typeArguments": null,
            "arguments": [],
            "start": 99,
            "end": 106
          },
          "definite": false,
          "start": 95,
          "end": 106
        }
      ],
      "declare": false,
      "start": 91,
      "end": 107
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 121,
                "end": 123
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 121,
              "end": 125
            },
            "typeArguments": null,
            "arguments": [],
            "start": 116,
            "end": 128
          },
          "definite": false,
          "start": 112,
          "end": 128
        }
      ],
      "declare": false,
      "start": 108,
      "end": 129
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 129
}
```
