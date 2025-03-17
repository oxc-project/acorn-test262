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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 15,
                "end": 18,
                "name": "for",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 19,
                "end": 28,
                "value": "postfix",
                "raw": "\"postfix\""
              }
            ],
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
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
