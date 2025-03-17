__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 142,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 19,
            "name": "trimmed",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 19,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 13,
                "end": 19
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "trimmed",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "trimEnd",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
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
          "name": "trimmed",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "trimStart",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
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
          "name": "trimmed",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "trimLeft",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
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
          "name": "trimmed",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "trimRight",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
