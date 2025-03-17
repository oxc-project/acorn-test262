__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 173,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
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
          "start": 11,
          "end": 59,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 59,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 14,
              "end": 59,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 14,
                  "end": 40,
                  "members": [
                    {
                      "type": "TSIndexSignature",
                      "start": 16,
                      "end": 38,
                      "parameters": [
                        {
                          "type": "Identifier",
                          "start": 17,
                          "end": 28,
                          "name": "key",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 20,
                            "end": 28,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 22,
                              "end": 28
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 29,
                        "end": 37,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 31,
                          "end": 37
                        }
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null
                    }
                  ]
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 173,
        "body": [
          {
            "type": "ForInStatement",
            "start": 67,
            "end": 136,
            "left": {
              "type": "VariableDeclaration",
              "start": 72,
              "end": 81,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 78,
                  "end": 81,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 81,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 88,
              "end": 136,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 104,
                  "end": 124,
                  "expression": {
                    "type": "CallExpression",
                    "start": 104,
                    "end": 123,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 104,
                      "end": 115,
                      "object": {
                        "type": "Identifier",
                        "start": 104,
                        "end": 111,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 112,
                        "end": 115,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 116,
                        "end": 122,
                        "object": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 117,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 118,
                          "end": 121,
                          "name": "key",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": true,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 141,
            "end": 149,
            "expression": {
              "type": "MemberExpression",
              "start": 141,
              "end": 148,
              "object": {
                "type": "Identifier",
                "start": 141,
                "end": 142,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 143,
                "end": 147,
                "value": "no",
                "raw": "\"no\""
              },
              "computed": true,
              "optional": false
            },
            "directive": null
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
