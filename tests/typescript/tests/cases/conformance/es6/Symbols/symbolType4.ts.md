__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 30,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 29,
            "callee": {
              "type": "MemberExpression",
              "start": 8,
              "end": 18,
              "object": {
                "type": "Identifier",
                "start": 8,
                "end": 14,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 15,
                "end": 18,
                "decorators": [],
                "name": "for",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 28,
                "value": "postfix",
                "raw": "\"postfix\""
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 35,
      "expression": {
        "type": "UpdateExpression",
        "start": 31,
        "end": 34,
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 36,
      "end": 40,
      "expression": {
        "type": "UpdateExpression",
        "start": 36,
        "end": 39,
        "operator": "--",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "start": 36,
          "end": 37,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
