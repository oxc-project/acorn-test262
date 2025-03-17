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
      "id": {
        "type": "Identifier",
        "start": 41,
        "end": 42,
        "name": "f",
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
          "start": 43,
          "end": 73,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 44,
            "end": 73,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 46,
              "end": 73,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 47,
                  "end": 63,
                  "name": "p",
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
                            "value": "foo",
                            "raw": "\"foo\""
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
                            "value": "bar",
                            "raw": "\"bar\""
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 127,
      "expression": {
        "type": "CallExpression",
        "start": 77,
        "end": 127,
        "callee": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 79,
            "end": 126,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                      "id": {
                        "type": "Identifier",
                        "start": 96,
                        "end": 97,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
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
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 104,
                          "end": 109,
                          "value": "foo",
                          "raw": "\"foo\""
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 115,
                  "end": 124,
                  "argument": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
