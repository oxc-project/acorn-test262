contextualTyping17.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 21,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 10,
                    "end": 20,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 10,
                      "end": 12,
                      "decorators": [],
                      "name": "id",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 12,
                      "end": 19,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 13,
                        "end": 19
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 24,
            "end": 30,
            "properties": [
              {
                "type": "Property",
                "start": 25,
                "end": 29,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 27,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 28,
                  "end": 29,
                  "raw": "4",
                  "value": 4
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 58,
      "expression": {
        "type": "AssignmentExpression",
        "start": 32,
        "end": 57,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 32,
          "end": 35,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 38,
          "end": 57,
          "properties": [
            {
              "type": "Property",
              "start": 39,
              "end": 44,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 41,
                "decorators": [],
                "name": "id",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 43,
                "end": 44,
                "raw": "5",
                "value": 5
              }
            },
            {
              "type": "Property",
              "start": 46,
              "end": 56,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 46,
                "end": 50,
                "decorators": [],
                "name": "name",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 51,
                "end": 56,
                "raw": "\"foo\"",
                "value": "foo"
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
