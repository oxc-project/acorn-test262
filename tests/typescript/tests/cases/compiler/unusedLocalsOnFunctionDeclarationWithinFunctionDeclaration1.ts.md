__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "greeter",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 16
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 25,
              "end": 31
            },
            "start": 23,
            "end": 31
          },
          "start": 17,
          "end": 31
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "person2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 42,
              "end": 48
            },
            "start": 40,
            "end": 48
          },
          "start": 33,
          "end": 48
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "unused",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 66
                },
                "init": {
                  "type": "Literal",
                  "value": 20,
                  "raw": "20",
                  "start": 69,
                  "end": 71
                },
                "definite": false,
                "start": 60,
                "end": 71
              }
            ],
            "declare": false,
            "start": 56,
            "end": 72
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "maker",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 91
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "child",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 99,
                    "end": 105
                  },
                  "start": 97,
                  "end": 105
                },
                "start": 92,
                "end": 105
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 108,
                "end": 112
              },
              "start": 106,
              "end": 112
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "unused2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 127,
                        "end": 134
                      },
                      "init": {
                        "type": "Literal",
                        "value": 22,
                        "raw": "22",
                        "start": 137,
                        "end": 139
                      },
                      "definite": false,
                      "start": 127,
                      "end": 139
                    }
                  ],
                  "declare": false,
                  "start": 123,
                  "end": 140
                }
              ],
              "start": 113,
              "end": 146
            },
            "expression": false,
            "start": 77,
            "end": 146
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "person2",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 158
              },
              "right": {
                "type": "Literal",
                "value": "dummy value",
                "raw": "\"dummy value\"",
                "start": 161,
                "end": 174
              },
              "start": 151,
              "end": 174
            },
            "directive": null,
            "start": 151,
            "end": 175
          }
        ],
        "start": 50,
        "end": 177
      },
      "expression": false,
      "start": 0,
      "end": 177
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 177
}
```
