letInNonStrictMode.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
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
            "type": "ArrayPattern",
            "start": 4,
            "end": 7,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 10,
            "end": 13,
            "elements": [
              {
                "type": "Literal",
                "start": 11,
                "end": 12,
                "raw": "1",
                "value": 1
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 34,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 19,
            "end": 25,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 20,
                "end": 24,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 20,
                  "end": 21,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 28,
            "end": 34,
            "properties": [
              {
                "type": "Property",
                "start": 29,
                "end": 33,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 32,
                  "end": 33,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
