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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 22,
                              "end": 28
                            },
                            "start": 20,
                            "end": 28
                          },
                          "start": 17,
                          "end": 28
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 31,
                          "end": 37
                        },
                        "start": 29,
                        "end": 37
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 16,
                      "end": 38
                    }
                  ],
                  "start": 14,
                  "end": 40
                },
                {
                  "type": "TSNullKeyword",
                  "start": 43,
                  "end": 47
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 50,
                  "end": 59
                }
              ],
              "start": 14,
              "end": 59
            },
            "start": 12,
            "end": 59
          },
          "start": 11,
          "end": 59
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 81
                  },
                  "init": null,
                  "definite": false,
                  "start": 78,
                  "end": 81
                }
              ],
              "declare": false,
              "start": 72,
              "end": 81
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 86
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 104,
                        "end": 111
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 115
                      },
                      "optional": false,
                      "computed": false,
                      "start": 104,
                      "end": 115
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 116,
                          "end": 117
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 118,
                          "end": 121
                        },
                        "optional": false,
                        "computed": true,
                        "start": 116,
                        "end": 122
                      }
                    ],
                    "optional": false,
                    "start": 104,
                    "end": 123
                  },
                  "directive": null,
                  "start": 104,
                  "end": 124
                }
              ],
              "start": 88,
              "end": 136
            },
            "start": 67,
            "end": 136
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "property": {
                "type": "Literal",
                "value": "no",
                "raw": "\"no\"",
                "start": 143,
                "end": 147
              },
              "optional": false,
              "computed": true,
              "start": 141,
              "end": 148
            },
            "directive": null,
            "start": 141,
            "end": 149
          }
        ],
        "start": 61,
        "end": 173
      },
      "expression": false,
      "start": 0,
      "end": 173
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 173
}
```
