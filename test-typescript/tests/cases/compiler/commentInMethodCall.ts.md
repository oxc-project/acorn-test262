__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 77,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 32,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 31,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 31,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 23,
                "end": 31,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 23,
                  "end": 29
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 33,
        "end": 75,
        "callee": {
          "type": "MemberExpression",
          "start": 33,
          "end": 38,
          "object": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "name": "map",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 59,
            "end": 74,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 74,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ],
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
