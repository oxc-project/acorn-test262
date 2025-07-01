__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 18
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 26,
                            "end": 31
                          },
                          "start": 26,
                          "end": 31
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 34,
                            "end": 39
                          },
                          "start": 34,
                          "end": 39
                        }
                      ],
                      "start": 26,
                      "end": 39
                    },
                    "start": 24,
                    "end": 39
                  },
                  "start": 23,
                  "end": 39
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "\"foo\"",
                    "start": 44,
                    "end": 49
                  },
                  "start": 44,
                  "end": 49
                },
                "start": 41,
                "end": 49
              },
              "start": 22,
              "end": 49
            },
            "start": 20,
            "end": 49
          },
          "start": 19,
          "end": 49
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 73
                      },
                      "init": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 77
                        },
                        "right": {
                          "type": "Literal",
                          "value": "foo",
                          "raw": "\"foo\"",
                          "start": 80,
                          "end": 85
                        },
                        "start": 76,
                        "end": 85
                      },
                      "definite": false,
                      "start": 72,
                      "end": 85
                    }
                  ],
                  "declare": false,
                  "start": 66,
                  "end": 86
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 98,
                    "end": 99
                  },
                  "start": 91,
                  "end": 100
                }
              ],
              "start": 60,
              "end": 102
            },
            "id": null,
            "generator": false,
            "start": 55,
            "end": 102
          }
        ],
        "optional": false,
        "start": 53,
        "end": 103
      },
      "directive": null,
      "start": 53,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 103
}
```
