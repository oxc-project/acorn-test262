__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 24,
  "end": 127,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 24,
      "end": 75,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 43,
          "end": 73,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 73,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 46,
              "end": 73,
              "params": [
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 63,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 63,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 50,
                      "end": 63,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 50,
                          "end": 55,
                          "literal": {
                            "type": "Literal",
                            "start": 50,
                            "end": 55,
                            "raw": "\"foo\"",
                            "value": "foo"
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 58,
                          "end": 63,
                          "literal": {
                            "type": "Literal",
                            "start": 58,
                            "end": 63,
                            "raw": "\"bar\"",
                            "value": "bar"
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 65,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 68,
                  "end": 73,
                  "literal": {
                    "type": "Literal",
                    "start": 68,
                    "end": 73,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 127,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 79,
            "end": 126,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 84,
              "end": 126,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 90,
                  "end": 110,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 96,
                      "end": 109,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      },
                      "init": {
                        "type": "AssignmentExpression",
                        "start": 100,
                        "end": 109,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 100,
                          "end": 101,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 104,
                          "end": 109,
                          "raw": "\"foo\"",
                          "value": "foo"
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ReturnStatement",
                  "start": 115,
                  "end": 124,
                  "argument": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
