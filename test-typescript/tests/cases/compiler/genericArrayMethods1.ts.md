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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 15,
            "name": "x",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 19,
            "end": 33,
            "callee": {
              "type": "MemberExpression",
              "start": 19,
              "end": 30,
              "object": {
                "type": "ArrayExpression",
                "start": 19,
                "end": 24,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 20,
                    "end": 21,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 22,
                    "end": 23,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              },
              "property": {
                "type": "Identifier",
                "start": 25,
                "end": 30,
                "name": "slice",
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
                "start": 31,
                "end": 32,
                "value": 0,
                "raw": "0"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
