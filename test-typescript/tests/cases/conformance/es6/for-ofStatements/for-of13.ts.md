__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
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
      "type": "ForOfStatement",
      "start": 15,
      "end": 43,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 40,
        "end": 43,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 20,
        "end": 21,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "CallExpression",
        "start": 25,
        "end": 38,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 25,
          "end": 36,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 25,
            "end": 29,
            "elements": [
              {
                "type": "Literal",
                "start": 26,
                "end": 28,
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 30,
            "end": 36,
            "decorators": [],
            "name": "values",
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
