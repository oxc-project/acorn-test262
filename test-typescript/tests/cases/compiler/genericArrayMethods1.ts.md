__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 14,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 6,
                "end": 14,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 6,
                  "end": 12
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 18,
            "end": 32,
            "arguments": [
              {
                "type": "Literal",
                "start": 30,
                "end": 31,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 18,
              "end": 29,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 18,
                "end": 23,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 19,
                    "end": 20,
                    "raw": "0",
                    "value": 0,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 21,
                    "end": 22,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 24,
                "end": 29,
                "decorators": [],
                "name": "slice",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
