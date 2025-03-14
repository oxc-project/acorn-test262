parameterReferenceInInitializer2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 179,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 179,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 179,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "Example",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 17,
          "end": 51,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "FunctionExpression",
            "start": 21,
            "end": 51,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 38,
              "end": 51,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 40,
                  "end": 49,
                  "argument": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 30,
                "end": 36,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 33,
                    "end": 36
                  }
                }
              }
            ]
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
