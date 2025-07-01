__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 72,
                          "end": 73
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          },
                          "start": 73,
                          "end": 81
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 72,
                        "end": 81
                      }
                    ],
                    "start": 70,
                    "end": 83
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 86,
                    "end": 95
                  }
                ],
                "start": 70,
                "end": 95
              },
              "start": 68,
              "end": 95
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 108
            },
            "id": null,
            "generator": false,
            "start": 66,
            "end": 108
          },
          "definite": false,
          "start": 62,
          "end": 108
        }
      ],
      "declare": false,
      "start": 56,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 113
              },
              "right": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 117
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 116,
                    "end": 119
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 122
                  },
                  "optional": true,
                  "computed": false,
                  "start": 116,
                  "end": 122
                },
                "start": 116,
                "end": 122
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 122
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 133,
                      "end": 134
                    },
                    "init": null,
                    "definite": false,
                    "start": 133,
                    "end": 134
                  }
                ],
                "declare": false,
                "start": 129,
                "end": 135
              }
            ],
            "start": 127,
            "end": 137
          },
          "id": null,
          "generator": false,
          "start": 111,
          "end": 137
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 110,
        "end": 140
      },
      "directive": null,
      "start": 110,
      "end": 141
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 149,
            "end": 150
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 153,
            "end": 155
          },
          "definite": false,
          "start": 149,
          "end": 155
        }
      ],
      "declare": false,
      "start": 143,
      "end": 156
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 159,
                "end": 160
              },
              "right": {
                "type": "ChainExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 164
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 163,
                    "end": 166
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 168,
                    "end": 169
                  },
                  "optional": true,
                  "computed": false,
                  "start": 163,
                  "end": 169
                },
                "start": 163,
                "end": 169
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 169
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 175,
                "end": 176
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 176
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 187,
                      "end": 188
                    },
                    "init": null,
                    "definite": false,
                    "start": 187,
                    "end": 188
                  }
                ],
                "declare": false,
                "start": 183,
                "end": 189
              }
            ],
            "start": 181,
            "end": 191
          },
          "id": null,
          "generator": false,
          "start": 158,
          "end": 191
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 157,
        "end": 194
      },
      "directive": null,
      "start": 157,
      "end": 195
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 195
}
```
