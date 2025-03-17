__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 176,
  "body": [
    {
      "type": "ForInStatement",
      "start": 68,
      "end": 121,
      "body": {
        "type": "ExpressionStatement",
        "start": 107,
        "end": 121,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 107,
          "end": 121,
          "arguments": [
            {
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 107,
            "end": 118,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 107,
              "end": 114,
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 92,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 77,
            "end": 92,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 77,
              "end": 92,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 78,
                  "end": 91,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "BinaryExpression",
                    "start": 82,
                    "end": 91,
                    "operator": "in",
                    "left": {
                      "type": "Literal",
                      "start": 82,
                      "end": 85,
                      "raw": "'a'",
                      "value": "a"
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 89,
                      "end": 91,
                      "properties": []
                    }
                  },
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ObjectExpression",
        "start": 96,
        "end": 105,
        "properties": [
          {
            "type": "Property",
            "start": 98,
            "end": 103,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 98,
              "end": 100,
              "raw": "''",
              "value": ""
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 102,
              "end": 103,
              "raw": "0",
              "value": 0
            }
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 122,
      "end": 175,
      "body": {
        "type": "ExpressionStatement",
        "start": 161,
        "end": 175,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 161,
          "end": 175,
          "arguments": [
            {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 161,
            "end": 172,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 161,
              "end": 168,
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 127,
        "end": 146,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 131,
            "end": 146,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 131,
              "end": 146,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 132,
                  "end": 145,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 132,
                    "end": 145,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "BinaryExpression",
                      "start": 136,
                      "end": 145,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 136,
                        "end": 139,
                        "raw": "'a'",
                        "value": "a"
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 143,
                        "end": 145,
                        "properties": []
                      }
                    },
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ObjectExpression",
        "start": 150,
        "end": 159,
        "properties": [
          {
            "type": "Property",
            "start": 152,
            "end": 157,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 152,
              "end": 154,
              "raw": "''",
              "value": ""
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "Literal",
              "start": 156,
              "end": 157,
              "raw": "0",
              "value": 0
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
