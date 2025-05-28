__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 15,
      "end": 46,
      "await": false,
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
        "end": 41,
        "callee": {
          "type": "MemberExpression",
          "start": 25,
          "end": 39,
          "object": {
            "type": "ArrayExpression",
            "start": 25,
            "end": 32,
            "elements": [
              {
                "type": "Literal",
                "start": 26,
                "end": 27,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 29,
                "end": 31,
                "value": "",
                "raw": "\"\""
              }
            ]
          },
          "property": {
            "type": "Identifier",
            "start": 33,
            "end": 39,
            "decorators": [],
            "name": "values",
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
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 46,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
