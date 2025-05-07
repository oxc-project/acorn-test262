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
      "end": 39,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 39,
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
        "type": "ArrayExpression",
        "start": 25,
        "end": 34,
        "elements": [
          {
            "type": "Literal",
            "start": 26,
            "end": 33,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 40,
      "end": 62,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 62,
        "body": []
      },
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
        "raw": "\"hello\"",
        "value": "hello",
        "regex": null,
        "bigint": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
