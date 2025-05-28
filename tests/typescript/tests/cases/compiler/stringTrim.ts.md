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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 19,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 21,
      "end": 49,
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
          "callee": {
            "type": "MemberExpression",
            "start": 31,
            "end": 46,
            "object": {
              "type": "Literal",
              "start": 31,
              "end": 38,
              "value": "abcde",
              "raw": "\"abcde\""
            },
            "property": {
              "type": "Identifier",
              "start": 39,
              "end": 46,
              "decorators": [],
              "name": "trimEnd",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 80,
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
          "callee": {
            "type": "MemberExpression",
            "start": 60,
            "end": 77,
            "object": {
              "type": "Literal",
              "start": 60,
              "end": 67,
              "value": "abcde",
              "raw": "\"abcde\""
            },
            "property": {
              "type": "Identifier",
              "start": 68,
              "end": 77,
              "decorators": [],
              "name": "trimStart",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 110,
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
          "callee": {
            "type": "MemberExpression",
            "start": 91,
            "end": 107,
            "object": {
              "type": "Literal",
              "start": 91,
              "end": 98,
              "value": "abcde",
              "raw": "\"abcde\""
            },
            "property": {
              "type": "Identifier",
              "start": 99,
              "end": 107,
              "decorators": [],
              "name": "trimLeft",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 141,
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
          "callee": {
            "type": "MemberExpression",
            "start": 121,
            "end": 138,
            "object": {
              "type": "Literal",
              "start": 121,
              "end": 128,
              "value": "abcde",
              "raw": "\"abcde\""
            },
            "property": {
              "type": "Identifier",
              "start": 129,
              "end": 138,
              "decorators": [],
              "name": "trimRight",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
