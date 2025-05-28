__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 17,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 12,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 17,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 55,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 54,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 48,
                "end": 54
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 72,
      "expression": {
        "type": "CallExpression",
        "start": 56,
        "end": 71,
        "callee": {
          "type": "MemberExpression",
          "start": 56,
          "end": 69,
          "object": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 69,
            "decorators": [],
            "name": "toLowerCase",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
