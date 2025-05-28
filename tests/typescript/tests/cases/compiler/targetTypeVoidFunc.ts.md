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
        "decorators": [],
        "name": "f1",
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
      },
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
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            }
          }
        ]
      },
      "expression": false
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 85,
            "end": 89,
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 87,
              "decorators": [],
              "name": "f1",
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
      "type": "VariableDeclaration",
      "start": 91,
      "end": 107,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 95,
          "end": 106,
          "id": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 99,
            "end": 106,
            "callee": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 108,
      "end": 129,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 112,
          "end": 128,
          "id": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
