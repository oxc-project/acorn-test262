__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 20,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 19,
            "decorators": [],
            "name": "trimmed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 19,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 49,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 21,
        "end": 48,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 21,
          "end": 28,
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 31,
          "end": 48,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 31,
            "end": 46,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 31,
              "end": 38,
              "raw": "\"abcde\"",
              "value": "abcde",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 46,
              "decorators": [],
              "name": "trimEnd",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 50,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 50,
          "end": 57,
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 60,
          "end": 79,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 60,
            "end": 77,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 60,
              "end": 67,
              "raw": "\"abcde\"",
              "value": "abcde",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 77,
              "decorators": [],
              "name": "trimStart",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 110,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 109,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 88,
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 91,
          "end": 109,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 91,
            "end": 107,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 91,
              "end": 98,
              "raw": "\"abcde\"",
              "value": "abcde",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 99,
              "end": 107,
              "decorators": [],
              "name": "trimLeft",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 141,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 111,
        "end": 140,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 111,
          "end": 118,
          "decorators": [],
          "name": "trimmed",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 121,
          "end": 140,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 121,
            "end": 138,
            "computed": false,
            "object": {
              "type": "Literal",
              "start": 121,
              "end": 128,
              "raw": "\"abcde\"",
              "value": "abcde",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 138,
              "decorators": [],
              "name": "trimRight",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
