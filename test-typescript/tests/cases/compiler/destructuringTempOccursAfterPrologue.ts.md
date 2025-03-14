destructuringTempOccursAfterPrologue.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 86,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 86,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 28,
            "end": 41,
            "directive": "use strict",
            "expression": {
              "type": "Literal",
              "start": 28,
              "end": 40,
              "raw": "'use strict'",
              "value": "use strict"
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 46,
            "end": 59,
            "directive": "use strong",
            "expression": {
              "type": "Literal",
              "start": 46,
              "end": 58,
              "raw": "'use strong'",
              "value": "use strong"
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 84,
            "expression": {
              "type": "AssignmentExpression",
              "start": 64,
              "end": 83,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "p",
                "optional": false
              },
              "right": {
                "type": "AssignmentExpression",
                "start": 68,
                "end": 83,
                "operator": "=",
                "left": {
                  "type": "ObjectPattern",
                  "start": 68,
                  "end": 79,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 70,
                      "end": 77,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 74,
                        "decorators": [],
                        "name": "prop",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 76,
                        "end": 77,
                        "decorators": [],
                        "name": "p",
                        "optional": false
                      }
                    }
                  ]
                },
                "right": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 83,
                  "decorators": [],
                  "name": "p",
                  "optional": false
                }
              }
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
        "end": 13,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 20,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 20,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 17,
              "end": 20
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
