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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 23,
                  "end": 29
                },
                "start": 23,
                "end": 31
              },
              "start": 21,
              "end": 31
            },
            "start": 20,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 20,
          "end": 31
        }
      ],
      "declare": false,
      "start": 16,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 34
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 38
          },
          "optional": false,
          "computed": false,
          "start": 33,
          "end": 38
        },
        "typeArguments": null,
        "arguments": [
          {
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
              "body": [],
              "start": 71,
              "end": 74
            },
            "expression": false,
            "start": 59,
            "end": 74
          }
        ],
        "optional": false,
        "start": 33,
        "end": 75
      },
      "directive": null,
      "start": 33,
      "end": 76
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 76
}
```
