__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
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
      "end": 39,
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
        "type": "ArrayExpression",
        "start": 25,
        "end": 34,
        "elements": [
          {
            "type": "Literal",
            "start": 26,
            "end": 33,
            "value": "hello",
            "raw": "\"hello\""
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 39,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 40,
      "end": 62,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "Literal",
        "start": 50,
        "end": 57,
        "value": "hello",
        "raw": "\"hello\""
      },
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 62,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
