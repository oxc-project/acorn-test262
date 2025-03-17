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
      "left": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 92,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 77,
            "end": 92,
            "id": {
              "type": "ArrayPattern",
              "start": 77,
              "end": 92,
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 78,
                  "end": 91,
                  "left": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "start": 82,
                    "end": 91,
                    "left": {
                      "type": "Literal",
                      "start": 82,
                      "end": 85,
                      "value": "a",
                      "raw": "'a'"
                    },
                    "operator": "in",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 89,
                      "end": 91,
                      "properties": []
                    }
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
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
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 98,
              "end": 100,
              "value": "",
              "raw": "''"
            },
            "value": {
              "type": "Literal",
              "start": 102,
              "end": 103,
              "value": 0,
              "raw": "0"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 107,
        "end": 121,
        "expression": {
          "type": "CallExpression",
          "start": 107,
          "end": 121,
          "callee": {
            "type": "MemberExpression",
            "start": 107,
            "end": 118,
            "object": {
              "type": "Identifier",
              "start": 107,
              "end": 114,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
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
              "type": "Identifier",
              "start": 119,
              "end": 120,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      }
    },
    {
      "type": "ForInStatement",
      "start": 122,
      "end": 175,
      "left": {
        "type": "VariableDeclaration",
        "start": 127,
        "end": 146,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 131,
            "end": 146,
            "id": {
              "type": "ObjectPattern",
              "start": 131,
              "end": 146,
              "properties": [
                {
                  "type": "Property",
                  "start": 132,
                  "end": 145,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 132,
                    "end": 133,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 132,
                    "end": 145,
                    "left": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 133,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 136,
                      "end": 145,
                      "left": {
                        "type": "Literal",
                        "start": 136,
                        "end": 139,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "operator": "in",
                      "right": {
                        "type": "ObjectExpression",
                        "start": 143,
                        "end": 145,
                        "properties": []
                      }
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
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
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
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 152,
              "end": 154,
              "value": "",
              "raw": "''"
            },
            "value": {
              "type": "Literal",
              "start": 156,
              "end": 157,
              "value": 0,
              "raw": "0"
            },
            "kind": "init",
            "optional": false
          }
        ]
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 161,
        "end": 175,
        "expression": {
          "type": "CallExpression",
          "start": 161,
          "end": 175,
          "callee": {
            "type": "MemberExpression",
            "start": 161,
            "end": 172,
            "object": {
              "type": "Identifier",
              "start": 161,
              "end": 168,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
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
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
