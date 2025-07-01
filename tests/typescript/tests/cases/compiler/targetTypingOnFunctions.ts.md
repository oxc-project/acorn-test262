__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "fu",
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
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 12,
                        "end": 18
                      },
                      "start": 10,
                      "end": 18
                    },
                    "start": 9,
                    "end": 18
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 23,
                    "end": 29
                  },
                  "start": 20,
                  "end": 29
                },
                "start": 8,
                "end": 29
              },
              "start": 6,
              "end": 29
            },
            "start": 4,
            "end": 29
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 43
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 54,
                        "end": 55
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toLowerCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 56,
                        "end": 67
                      },
                      "optional": false,
                      "computed": false,
                      "start": 54,
                      "end": 67
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 54,
                    "end": 69
                  },
                  "start": 47,
                  "end": 69
                }
              ],
              "start": 45,
              "end": 71
            },
            "expression": false,
            "start": 32,
            "end": 71
          },
          "definite": false,
          "start": 4,
          "end": 71
        }
      ],
      "declare": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "zu",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 80
          },
          "init": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "fu",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 85
            },
            "right": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 110,
                          "end": 111
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toLowerCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 123
                        },
                        "optional": false,
                        "computed": false,
                        "start": 110,
                        "end": 123
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 110,
                      "end": 125
                    },
                    "start": 103,
                    "end": 125
                  }
                ],
                "start": 101,
                "end": 127
              },
              "expression": false,
              "start": 88,
              "end": 127
            },
            "start": 83,
            "end": 127
          },
          "definite": false,
          "start": 78,
          "end": 127
        }
      ],
      "declare": false,
      "start": 74,
      "end": 128
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 128
}
```
