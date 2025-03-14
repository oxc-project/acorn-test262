nonArrayRestArgs.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 79,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 30,
        "end": 79,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 66,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 46,
                "end": 65,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 55,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 47,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 49,
                      "end": 55
                    }
                  }
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 58,
                  "end": 65,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 58,
                    "end": 62,
                    "decorators": [],
                    "name": "rest",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 63,
                    "end": 64,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 68,
            "end": 77,
            "argument": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
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
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 13,
          "end": 28,
          "argument": {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "decorators": [],
            "name": "rest",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 28,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 22,
              "end": 28
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
