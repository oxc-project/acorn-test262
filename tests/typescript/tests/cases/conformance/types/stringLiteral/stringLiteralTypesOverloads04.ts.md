__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 103,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 19,
          "end": 49,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 20,
            "end": 49,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 22,
              "end": 49,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 39,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 39,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 26,
                      "end": 39,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 26,
                          "end": 31,
                          "literal": {
                            "type": "Literal",
                            "start": 26,
                            "end": 31,
                            "value": "foo",
                            "raw": "\"foo\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 34,
                          "end": 39,
                          "literal": {
                            "type": "Literal",
                            "start": 34,
                            "end": 39,
                            "value": "bar",
                            "raw": "\"bar\""
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 41,
                "end": 49,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 44,
                  "end": 49,
                  "literal": {
                    "type": "Literal",
                    "start": 44,
                    "end": 49,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 53,
      "end": 103,
      "expression": {
        "type": "CallExpression",
        "start": 53,
        "end": 103,
        "callee": {
          "type": "Identifier",
          "start": 53,
          "end": 54,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 55,
            "end": 102,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 60,
              "end": 102,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 66,
                  "end": 86,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 72,
                      "end": 85,
                      "id": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 73,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AssignmentExpression",
                        "start": 76,
                        "end": 85,
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 77,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 80,
                          "end": 85,
                          "value": "foo",
                          "raw": "\"foo\""
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 91,
                  "end": 100,
                  "argument": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
