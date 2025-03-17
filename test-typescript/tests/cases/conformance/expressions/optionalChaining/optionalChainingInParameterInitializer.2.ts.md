__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 195,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 108,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 99,
              "end": 108,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 95,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 95,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 70,
                    "end": 83,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 72,
                        "end": 81,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 73,
                          "name": "d",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 73,
                          "end": 81,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 75,
                            "end": 81
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 86,
                    "end": 95
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 110,
        "end": 140,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 111,
          "end": 137,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 112,
              "end": 122,
              "left": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ChainExpression",
                "start": 116,
                "end": 122,
                "expression": {
                  "type": "MemberExpression",
                  "start": 116,
                  "end": 122,
                  "object": {
                    "type": "CallExpression",
                    "start": 116,
                    "end": 119,
                    "callee": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 117,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 127,
            "end": 137,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 129,
                "end": 135,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 133,
                    "end": 134,
                    "id": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 134,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 149,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 153,
            "end": 155,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 157,
      "end": 195,
      "expression": {
        "type": "CallExpression",
        "start": 157,
        "end": 194,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 158,
          "end": 191,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 159,
              "end": 169,
              "left": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ChainExpression",
                "start": 163,
                "end": 169,
                "expression": {
                  "type": "MemberExpression",
                  "start": 163,
                  "end": 169,
                  "object": {
                    "type": "CallExpression",
                    "start": 163,
                    "end": 166,
                    "callee": {
                      "type": "Identifier",
                      "start": 163,
                      "end": 164,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 171,
              "end": 176,
              "left": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 181,
            "end": 191,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 183,
                "end": 189,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 187,
                    "end": 188,
                    "id": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
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
