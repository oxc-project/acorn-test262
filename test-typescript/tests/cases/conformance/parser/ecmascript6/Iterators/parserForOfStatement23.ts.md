parserForOfStatement23.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 75,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 75,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 33,
            "end": 43,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 42,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 42,
                  "decorators": [],
                  "name": "async",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ForOfStatement",
            "start": 48,
            "end": 73,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 73,
              "body": []
            },
            "left": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "decorators": [],
              "name": "async",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 25,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 25,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 22,
              "end": 25
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
