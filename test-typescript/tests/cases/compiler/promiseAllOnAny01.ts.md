__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 114,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 114,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 114,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 33,
            "end": 64,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 63,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "decorators": [],
                  "name": "abc",
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 43,
                  "end": 63,
                  "argument": {
                    "type": "CallExpression",
                    "start": 49,
                    "end": 63,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 49,
                      "end": 60,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 56,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 60,
                        "decorators": [],
                        "name": "all",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 69,
            "end": 93,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 92,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 86,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 79,
                    "end": 86,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 81,
                      "end": 86,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 81,
                        "end": 84
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "decorators": [],
                  "name": "abc",
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 98,
            "end": 112,
            "argument": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "decorators": [],
              "name": "result",
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
  "sourceType": "script",
  "hashbang": null
}
```
