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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "name": "recurser",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 15,
            "end": 33,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "name": "foo",
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
              "start": 30,
              "end": 33,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 83,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 82,
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 80,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 118,
      "expression": {
        "type": "CallExpression",
        "start": 107,
        "end": 117,
        "callee": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "name": "recurser",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 204,
      "expression": {
        "type": "FunctionExpression",
        "start": 121,
        "end": 202,
        "id": {
          "type": "Identifier",
          "start": 130,
          "end": 133,
          "name": "bar",
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
          "start": 136,
          "end": 202,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 194,
              "end": 200,
              "expression": {
                "type": "CallExpression",
                "start": 194,
                "end": 199,
                "callee": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 197,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 242,
        "end": 247,
        "callee": {
          "type": "Identifier",
          "start": 242,
          "end": 245,
          "name": "bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
