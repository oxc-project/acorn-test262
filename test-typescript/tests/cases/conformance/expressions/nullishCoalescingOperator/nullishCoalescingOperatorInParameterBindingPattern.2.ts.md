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
            "end": 101,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
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
      "start": 103,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 147,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 144,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 105,
              "end": 129,
              "properties": [
                {
                  "type": "Property",
                  "start": 107,
                  "end": 127,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "LogicalExpression",
                    "start": 108,
                    "end": 118,
                    "left": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 111,
                      "callee": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 109,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "start": 115,
                      "end": 118,
                      "value": "d",
                      "raw": "\"d\""
                    }
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 121,
                    "end": 127,
                    "left": {
                      "type": "Identifier",
                      "start": 121,
                      "end": 122,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 125,
                      "end": 127,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
                    "id": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
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
      "start": 150,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 162,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 160,
            "end": 162,
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
      "start": 164,
      "end": 216,
      "expression": {
        "type": "CallExpression",
        "start": 164,
        "end": 215,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 165,
          "end": 212,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 166,
              "end": 197,
              "properties": [
                {
                  "type": "Property",
                  "start": 168,
                  "end": 188,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "LogicalExpression",
                    "start": 169,
                    "end": 179,
                    "left": {
                      "type": "CallExpression",
                      "start": 169,
                      "end": 172,
                      "callee": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "start": 176,
                      "end": 179,
                      "value": "d",
                      "raw": "\"d\""
                    }
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 182,
                    "end": 188,
                    "left": {
                      "type": "Identifier",
                      "start": 182,
                      "end": 183,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 186,
                      "end": 188,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 190,
                  "end": 195,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 191,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 190,
                    "end": 195,
                    "left": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 191,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
                    "id": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
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
