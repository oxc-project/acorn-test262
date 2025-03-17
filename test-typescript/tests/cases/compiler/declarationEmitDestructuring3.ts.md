__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 13,
          "end": 25,
          "elements": [
            {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 17,
              "end": 18,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 20,
              "end": 24,
              "argument": {
                "type": "Identifier",
                "start": 23,
                "end": 24,
                "name": "w",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 80,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 43,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 44,
          "end": 75,
          "left": {
            "type": "ArrayPattern",
            "start": 44,
            "end": 53,
            "elements": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 46,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 48,
                "end": 52,
                "argument": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
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
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 80,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
