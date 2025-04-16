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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "greeter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 17,
          "end": 31,
          "name": "person",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 31,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 33,
          "end": 48,
          "name": "person2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 40,
            "end": 48,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 66,
                  "name": "unused",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 69,
                  "end": 71,
                  "value": 20,
                  "raw": "20"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 77,
            "end": 146,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 91,
              "name": "maker",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 92,
                "end": 105,
                "name": "child",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 97,
                  "end": 105,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 99,
                    "end": 105
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 134,
                        "name": "unused2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Literal",
                        "start": 137,
                        "end": 139,
                        "value": 22,
                        "raw": "22"
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
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
                "name": "person2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 161,
                "end": 174,
                "value": "dummy value",
                "raw": "\"dummy value\""
              }
            },
            "directive": null
          }
        ]
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
