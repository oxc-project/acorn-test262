__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 78,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 30,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 29,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
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
      "start": 31,
      "end": 55,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 55,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "v",
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 41,
        "end": 50,
        "elements": [
          {
            "type": "Literal",
            "start": 42,
            "end": 49,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 56,
      "end": 78,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 78,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "v",
        "optional": false
      },
      "right": {
        "type": "Literal",
        "start": 66,
        "end": 73,
        "raw": "\"hello\"",
        "value": "hello"
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
