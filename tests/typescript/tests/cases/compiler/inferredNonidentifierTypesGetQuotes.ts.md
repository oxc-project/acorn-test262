__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 72,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 33,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 9,
                "end": 28,
                "properties": [
                  {
                    "type": "Property",
                    "start": 11,
                    "end": 26,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 11,
                      "end": 16,
                      "value": "a-b",
                      "raw": "\"a-b\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 18,
                      "end": 26,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 30,
                "end": 32,
                "properties": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 72,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 44,
            "end": 71,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 45,
                "end": 66,
                "properties": [
                  {
                    "type": "Property",
                    "start": 47,
                    "end": 64,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 48,
                      "end": 53,
                      "value": "a-b",
                      "raw": "\"a-b\""
                    },
                    "value": {
                      "type": "Literal",
                      "start": 56,
                      "end": 64,
                      "value": "string",
                      "raw": "\"string\""
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 68,
                "end": 70,
                "properties": []
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
