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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 101,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
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
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 105,
              "end": 129,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 107,
                  "end": 127,
                  "kind": "init",
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                    "right": {
                      "type": "Literal",
                      "start": 125,
                      "end": 127,
                      "value": "",
                      "raw": "\"\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 134,
            "end": 144,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 136,
                "end": 142,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 140,
                    "end": 141,
                    "id": {
                      "type": "Identifier",
                      "start": 140,
                      "end": 141,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              }
            ]
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 163,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 162,
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
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
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
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ObjectPattern",
              "start": 166,
              "end": 197,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 168,
                  "end": 188,
                  "kind": "init",
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
                    "right": {
                      "type": "Literal",
                      "start": 186,
                      "end": 188,
                      "value": "",
                      "raw": "\"\""
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 190,
                  "end": 195,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 191,
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                    "right": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 202,
            "end": 212,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 204,
                "end": 210,
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 208,
                    "end": 209,
                    "id": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "declare": false
              }
            ]
          },
          "id": null,
          "generator": false
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
