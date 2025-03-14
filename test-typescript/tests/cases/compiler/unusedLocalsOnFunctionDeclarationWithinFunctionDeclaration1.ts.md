__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 177,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 50,
        "end": 177,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 56,
            "end": 72,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 60,
                "end": 71,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "decorators": [],
                  "name": "unused",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 69,
                  "end": 71,
                  "raw": "20",
                  "value": 20
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 77,
            "end": 146,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 113,
              "end": 146,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 123,
                  "end": 140,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 127,
                      "end": 139,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 134,
                        "decorators": [],
                        "name": "unused2",
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 137,
                        "end": 139,
                        "raw": "22",
                        "value": 22
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "decorators": [],
              "name": "maker",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 105,
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 97,
                  "end": 105,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 99,
                    "end": 105
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 112,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 108,
                "end": 112
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 151,
            "end": 175,
            "expression": {
              "type": "AssignmentExpression",
              "start": 151,
              "end": 174,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 151,
                "end": 158,
                "decorators": [],
                "name": "person2",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 161,
                "end": 174,
                "raw": "\"dummy value\"",
                "value": "dummy value"
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
        "end": 16,
        "decorators": [],
        "name": "greeter",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          }
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 48,
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
