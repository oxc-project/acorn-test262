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
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 79,
                    "end": 88
                  }
                ],
                "start": 70,
                "end": 88
              },
              "start": 68,
              "end": 88
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 101
            },
            "id": null,
            "generator": false,
            "start": 66,
            "end": 101
          },
          "definite": false,
          "start": 62,
          "end": 101
        }
      ],
      "declare": false,
      "start": 56,
      "end": 102
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 109
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 108,
                      "end": 111
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "d",
                      "raw": "\"d\"",
                      "start": 115,
                      "end": 118
                    },
                    "start": 108,
                    "end": 118
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 121,
                      "end": 122
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 125,
                      "end": 127
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 127
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 107,
                  "end": 127
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 129
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
                      "start": 140,
                      "end": 141
                    },
                    "init": null,
                    "definite": false,
                    "start": 140,
                    "end": 141
                  }
                ],
                "declare": false,
                "start": 136,
                "end": 142
              }
            ],
            "start": 134,
            "end": 144
          },
          "id": null,
          "generator": false,
          "start": 104,
          "end": 144
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 103,
        "end": 147
      },
      "directive": null,
      "start": 103,
      "end": 148
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
            "start": 156,
            "end": 157
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 160,
            "end": 162
          },
          "definite": false,
          "start": 156,
          "end": 162
        }
      ],
      "declare": false,
      "start": 150,
      "end": 163
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
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 169,
                        "end": 170
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 169,
                      "end": 172
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "d",
                      "raw": "\"d\"",
                      "start": 176,
                      "end": 179
                    },
                    "start": 169,
                    "end": 179
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 182,
                      "end": 183
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 186,
                      "end": 188
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 182,
                    "end": 188
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 168,
                  "end": 188
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 191
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 191
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 195
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 195
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 190,
                  "end": 195
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 197
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
                      "start": 208,
                      "end": 209
                    },
                    "init": null,
                    "definite": false,
                    "start": 208,
                    "end": 209
                  }
                ],
                "declare": false,
                "start": 204,
                "end": 210
              }
            ],
            "start": 202,
            "end": 212
          },
          "id": null,
          "generator": false,
          "start": 165,
          "end": 212
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 164,
        "end": 215
      },
      "directive": null,
      "start": 164,
      "end": 216
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 216
}
```
