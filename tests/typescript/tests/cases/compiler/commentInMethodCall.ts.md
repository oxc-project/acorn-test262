__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 76,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 31,
            "decorators": [],
            "name": "s",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 76,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 33,
        "end": 75,
        "arguments": [
          {
            "type": "FunctionExpression",
            "start": 59,
            "end": 74,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 74,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 33,
          "end": 38,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 35,
            "end": 38,
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null
          }
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
