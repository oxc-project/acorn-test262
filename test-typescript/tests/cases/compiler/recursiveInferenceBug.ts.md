recursiveInferenceBug.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 122,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 57,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 57,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 41,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 32,
                "end": 40,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 36,
                  "end": 40,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 36,
                    "end": 37,
                    "decorators": [],
                    "name": "f",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 46,
            "end": 55,
            "argument": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
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
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 11,
          "end": 20,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 20,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 14,
              "end": 20
            }
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 60,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 64,
          "end": 120,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 64,
            "end": 66,
            "decorators": [],
            "name": "zz",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 69,
            "end": 120,
            "properties": [
              {
                "type": "Property",
                "start": 75,
                "end": 86,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 76,
                  "decorators": [],
                  "name": "g",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 78,
                  "end": 86,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 83,
                    "end": 86,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              },
              {
                "type": "Property",
                "start": 92,
                "end": 117,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "get",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 97,
                  "end": 117,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 100,
                    "end": 117,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 102,
                        "end": 115,
                        "argument": {
                          "type": "Literal",
                          "start": 109,
                          "end": 114,
                          "raw": "\"abc\"",
                          "value": "abc"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
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
