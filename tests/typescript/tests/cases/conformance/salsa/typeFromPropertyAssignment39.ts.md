__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 14,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 32,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 31,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 26,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 20,
            "end": 25,
            "value": "baz",
            "raw": "\"baz\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "ObjectExpression",
          "start": 29,
          "end": 31,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 56,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 55,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 33,
          "end": 51,
          "object": {
            "type": "MemberExpression",
            "start": 33,
            "end": 43,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 37,
              "end": 42,
              "value": "baz",
              "raw": "\"baz\""
            },
            "optional": false,
            "computed": true
          },
          "property": {
            "type": "Literal",
            "start": 44,
            "end": 50,
            "value": "blah",
            "raw": "\"blah\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 54,
          "end": 55,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
