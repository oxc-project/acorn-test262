excessPropertyErrorsSuppressed.ts
```json
{
  "type": "Program",
  "start": 40,
  "end": 99,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 47,
                "end": 60,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 49,
                    "end": 58,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 49,
                      "end": 50,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 50,
                      "end": 58,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 52,
                        "end": 58
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 63,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 65,
                "end": 75,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 68,
                  "end": 75,
                  "raw": "\"hello\"",
                  "value": "hello"
                }
              },
              {
                "type": "Property",
                "start": 77,
                "end": 82,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 80,
                  "end": 82,
                  "raw": "42",
                  "value": 42
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
