__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 35,
        "end": 73,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 41,
            "end": 71,
            "argument": {
              "type": "FunctionExpression",
              "start": 48,
              "end": 71,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 60,
                "end": 71,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 62,
                    "end": 69,
                    "argument": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 13,
        "end": 34,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 15,
          "end": 34,
          "members": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 17,
              "end": 32,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 23,
                "end": 31,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 25,
                  "end": 31
                }
              }
            }
          ]
        }
      }
    },
    {
      "type": "EmptyStatement",
      "start": 73,
      "end": 74
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 85,
            "end": 89,
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 87,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 91,
      "end": 107,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 99,
            "end": 106,
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 116,
            "end": 128,
            "callee": {
              "type": "CallExpression",
              "start": 121,
              "end": 125,
              "callee": {
                "type": "Identifier",
                "start": 121,
                "end": 123,
                "name": "f1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
