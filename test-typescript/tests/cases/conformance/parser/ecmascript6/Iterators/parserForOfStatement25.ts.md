__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 166,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 68,
      "end": 116,
      "await": false,
      "body": {
        "type": "ExpressionStatement",
        "start": 102,
        "end": 116,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 102,
          "end": 116,
          "arguments": [
            {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 102,
            "end": 113,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 102,
              "end": 109,
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
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
        "type": "ArrayExpression",
        "start": 96,
        "end": 100,
        "elements": [
          {
            "type": "ArrayExpression",
            "start": 97,
            "end": 99,
            "elements": []
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 117,
      "end": 165,
      "await": false,
      "body": {
        "type": "ExpressionStatement",
        "start": 151,
        "end": 165,
        "directive": null,
        "expression": {
          "type": "CallExpression",
          "start": 151,
          "end": 165,
          "arguments": [
            {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 151,
            "end": 162,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 151,
              "end": 158,
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
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
        "start": 122,
        "end": 141,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 126,
            "end": 141,
            "definite": false,
            "id": {
              "type": "ObjectPattern",
              "start": 126,
              "end": 141,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 127,
                  "end": 140,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
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
                    "start": 127,
                    "end": 140,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "right": {
                      "type": "BinaryExpression",
                      "start": 131,
                      "end": 140,
                      "operator": "in",
                      "left": {
                        "type": "Literal",
                        "start": 131,
                        "end": 134,
                        "raw": "'a'",
                        "value": "a"
                      },
                      "right": {
                        "type": "ObjectExpression",
                        "start": 138,
                        "end": 140,
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
        "type": "ArrayExpression",
        "start": 145,
        "end": 149,
        "elements": [
          {
            "type": "ObjectExpression",
            "start": 146,
            "end": 148,
            "properties": []
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
