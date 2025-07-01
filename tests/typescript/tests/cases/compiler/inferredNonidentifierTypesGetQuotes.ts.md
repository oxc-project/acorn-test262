__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "a-b",
                      "raw": "\"a-b\"",
                      "start": 11,
                      "end": 16
                    },
                    "value": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 18,
                      "end": 26
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 11,
                    "end": 26
                  }
                ],
                "start": 9,
                "end": 28
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 30,
                "end": 32
              }
            ],
            "start": 8,
            "end": 33
          },
          "definite": false,
          "start": 4,
          "end": 33
        }
      ],
      "declare": false,
      "start": 0,
      "end": 34
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 40,
            "end": 41
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "value": "a-b",
                      "raw": "\"a-b\"",
                      "start": 48,
                      "end": 53
                    },
                    "value": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 56,
                      "end": 64
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 47,
                    "end": 64
                  }
                ],
                "start": 45,
                "end": 66
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 68,
                "end": 70
              }
            ],
            "start": 44,
            "end": 71
          },
          "definite": false,
          "start": 40,
          "end": 71
        }
      ],
      "declare": false,
      "start": 36,
      "end": 72
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 72
}
```
