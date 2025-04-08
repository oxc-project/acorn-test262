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
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 29,
            "name": "v",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 31,
      "end": 55,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
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
            "value": "hello",
            "raw": "\"hello\""
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 55,
        "body": []
      }
    },
    {
      "type": "ForOfStatement",
      "start": 56,
      "end": 78,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "name": "v",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "right": {
        "type": "Literal",
        "start": 66,
        "end": 73,
        "value": "hello",
        "raw": "\"hello\""
      },
      "body": {
        "type": "BlockStatement",
        "start": 75,
        "end": 78,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
