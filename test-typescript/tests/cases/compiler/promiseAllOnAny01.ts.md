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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 18,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 25,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 25,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 22,
              "end": 25
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 40,
                  "name": "abc",
                  "typeAnnotation": null,
                  "decorators": [],
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
                    "callee": {
                      "type": "MemberExpression",
                      "start": 49,
                      "end": 60,
                      "object": {
                        "type": "Identifier",
                        "start": 49,
                        "end": 56,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 57,
                        "end": 60,
                        "name": "all",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 62,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 86,
                  "name": "result",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 92,
                  "name": "abc",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 98,
            "end": 112,
            "argument": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
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
