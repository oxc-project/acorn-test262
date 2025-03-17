__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 62,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 15,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 15,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 15,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 7,
                  "end": 13
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 19,
            "end": 33,
            "arguments": [
              {
                "type": "Literal",
                "start": 31,
                "end": 32,
                "raw": "0",
                "value": 0
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 19,
              "end": 30,
              "computed": false,
              "object": {
                "type": "ArrayExpression",
                "start": 19,
                "end": 24,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 20,
                    "end": 21,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 23,
                    "raw": "1",
                    "value": 1
                  }
                ]
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 25,
                "end": 30,
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
