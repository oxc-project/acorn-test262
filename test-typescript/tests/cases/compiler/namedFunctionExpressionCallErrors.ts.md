__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "recurser",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 15,
            "end": 33,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 30,
              "end": 33,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 83,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 82,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 118,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 117,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "decorators": [],
          "name": "recurser",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 204,
      "directive": null,
      "expression": {
        "type": "FunctionExpression",
        "start": 121,
        "end": 202,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 136,
          "end": 202,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 194,
              "end": 200,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 194,
                "end": 199,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 197,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 130,
          "end": 133,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
        "typeParameters": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 248,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 247,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 242,
          "end": 245,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
