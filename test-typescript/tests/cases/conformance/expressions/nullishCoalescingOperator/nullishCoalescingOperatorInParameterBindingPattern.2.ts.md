__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 216,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 101,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 88,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 88,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 79,
                    "end": 88
                  }
                ]
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 147,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 144,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 134,
            "end": 144,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 136,
                "end": 142,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 140,
                    "end": 141,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 105,
              "end": 129,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 107,
                  "end": 127,
                  "computed": true,
                  "key": {
                    "type": "LogicalExpression",
                    "start": 108,
                    "end": 118,
                    "operator": "??",
                    "left": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 111,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 115,
                      "end": 118,
                      "raw": "\"d\"",
                      "value": "d",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 121,
                    "end": 127,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 125,
                      "end": 127,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 160,
            "end": 162,
            "raw": "\"\"",
            "value": "",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 216,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 215,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 165,
          "end": 212,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 202,
            "end": 212,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 204,
                "end": 210,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 208,
                    "end": 209,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null
                  }
                ],
                "declare": false,
                "kind": "var"
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 166,
              "end": 197,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 168,
                  "end": 188,
                  "computed": true,
                  "key": {
                    "type": "LogicalExpression",
                    "start": 169,
                    "end": 179,
                    "operator": "??",
                    "left": {
                      "type": "CallExpression",
                      "start": 169,
                      "end": 172,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 176,
                      "end": 179,
                      "raw": "\"d\"",
                      "value": "d",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 182,
                    "end": 188,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 186,
                      "end": 188,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    },
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Property",
                  "start": 190,
                  "end": 195,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 191,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 190,
                    "end": 195,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 191,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
