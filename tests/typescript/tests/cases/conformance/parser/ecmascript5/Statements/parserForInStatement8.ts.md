__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 78,
                    "end": 79
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 82,
                      "end": 85
                    },
                    "operator": "in",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 89,
                      "end": 91
                    },
                    "start": 82,
                    "end": 91
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 91
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 92
            },
            "init": null,
            "definite": false,
            "start": 77,
            "end": 92
          }
        ],
        "declare": false,
        "start": 73,
        "end": 92
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 98,
              "end": 100
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 102,
              "end": 103
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 98,
            "end": 103
          }
        ],
        "start": 96,
        "end": 105
      },
      "body": {
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
              "start": 107,
              "end": 114
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 118
            },
            "optional": false,
            "computed": false,
            "start": 107,
            "end": 118
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            }
          ],
          "optional": false,
          "start": 107,
          "end": 121
        },
        "directive": null,
        "start": 107,
        "end": 121
      },
      "start": 68,
      "end": 121
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 133
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 133
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 136,
                        "end": 139
                      },
                      "operator": "in",
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 143,
                        "end": 145
                      },
                      "start": 136,
                      "end": 145
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 145
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 132,
                  "end": 145
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 146
            },
            "init": null,
            "definite": false,
            "start": 131,
            "end": 146
          }
        ],
        "declare": false,
        "start": 127,
        "end": 146
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 152,
              "end": 154
            },
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 156,
              "end": 157
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 152,
            "end": 157
          }
        ],
        "start": 150,
        "end": 159
      },
      "body": {
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
              "start": 161,
              "end": 168
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 172
            },
            "optional": false,
            "computed": false,
            "start": 161,
            "end": 172
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 173,
              "end": 174
            }
          ],
          "optional": false,
          "start": 161,
          "end": 175
        },
        "directive": null,
        "start": 161,
        "end": 175
      },
      "start": 122,
      "end": 175
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 175
}
```
