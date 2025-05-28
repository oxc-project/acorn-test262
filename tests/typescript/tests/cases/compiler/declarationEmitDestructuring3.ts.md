__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 13,
          "end": 25,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "RestElement",
              "start": 20,
              "end": 24,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "decorators": [],
                "name": "w",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 30,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 44,
          "end": 75,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 44,
            "end": 53,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "RestElement",
                "start": 48,
                "end": 52,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrayExpression",
            "start": 56,
            "end": 75,
            "elements": [
              {
                "type": "Literal",
                "start": 57,
                "end": 58,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 60,
                "end": 68,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 70,
                "end": 74,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 80,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
