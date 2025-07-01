__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
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
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 97,
            "end": 99
          }
        ],
        "start": 96,
        "end": 100
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
              "start": 102,
              "end": 109
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 113
            },
            "optional": false,
            "computed": false,
            "start": 102,
            "end": 113
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 115
            }
          ],
          "optional": false,
          "start": 102,
          "end": 116
        },
        "directive": null,
        "start": 102,
        "end": 116
      },
      "start": 68,
      "end": 116
    },
    {
      "type": "ForOfStatement",
      "await": false,
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
                    "start": 127,
                    "end": 128
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
                      "start": 127,
                      "end": 128
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 131,
                        "end": 134
                      },
                      "operator": "in",
                      "right": {
                        "type": "ObjectExpression",
                        "properties": [],
                        "start": 138,
                        "end": 140
                      },
                      "start": 131,
                      "end": 140
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 140
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 127,
                  "end": 140
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 141
            },
            "init": null,
            "definite": false,
            "start": 126,
            "end": 141
          }
        ],
        "declare": false,
        "start": 122,
        "end": 141
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 146,
            "end": 148
          }
        ],
        "start": 145,
        "end": 149
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
              "start": 151,
              "end": 158
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 162
            },
            "optional": false,
            "computed": false,
            "start": 151,
            "end": 162
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            }
          ],
          "optional": false,
          "start": 151,
          "end": 165
        },
        "directive": null,
        "start": 151,
        "end": 165
      },
      "start": 117,
      "end": 165
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 165
}
```
