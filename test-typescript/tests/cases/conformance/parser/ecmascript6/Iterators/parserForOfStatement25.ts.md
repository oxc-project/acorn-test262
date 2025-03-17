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
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 102,
        "end": 116,
        "expression": {
          "type": "CallExpression",
          "start": 102,
          "end": 116,
          "callee": {
            "type": "MemberExpression",
            "start": 102,
            "end": 113,
            "object": {
              "type": "Identifier",
              "start": 102,
              "end": 109,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 110,
              "end": 113,
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
              "start": 114,
              "end": 115,
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
      "type": "ForOfStatement",
      "start": 117,
      "end": 165,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 122,
        "end": 141,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 126,
            "end": 141,
            "id": {
              "type": "ObjectPattern",
              "start": 126,
              "end": 141,
              "properties": [
                {
                  "type": "Property",
                  "start": 127,
                  "end": 140,
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 128,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 127,
                    "end": 140,
                    "left": {
                      "type": "Identifier",
                      "start": 127,
                      "end": 128,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "start": 131,
                      "end": 140,
                      "left": {
                        "type": "Literal",
                        "start": 131,
                        "end": 134,
                        "value": "a",
                        "raw": "'a'"
                      },
                      "operator": "in",
                      "right": {
                        "type": "ObjectExpression",
                        "start": 138,
                        "end": 140,
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
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 151,
        "end": 165,
        "expression": {
          "type": "CallExpression",
          "start": 151,
          "end": 165,
          "callee": {
            "type": "MemberExpression",
            "start": 151,
            "end": 162,
            "object": {
              "type": "Identifier",
              "start": 151,
              "end": 158,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
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
              "start": 163,
              "end": 164,
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
