__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 12,
            "end": 14
          },
          "definite": false,
          "start": 6,
          "end": 14
        }
      ],
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 16,
            "end": 19
          },
          "property": {
            "type": "Literal",
            "value": "baz",
            "raw": "\"baz\"",
            "start": 20,
            "end": 25
          },
          "optional": false,
          "computed": true,
          "start": 16,
          "end": 26
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 29,
          "end": 31
        },
        "start": 16,
        "end": 31
      },
      "directive": null,
      "start": 16,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 36
            },
            "property": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 37,
              "end": 42
            },
            "optional": false,
            "computed": true,
            "start": 33,
            "end": 43
          },
          "property": {
            "type": "Literal",
            "value": "blah",
            "raw": "\"blah\"",
            "start": 44,
            "end": 50
          },
          "optional": false,
          "computed": true,
          "start": 33,
          "end": 51
        },
        "right": {
          "type": "Literal",
          "value": 3,
          "raw": "3",
          "start": 54,
          "end": 55
        },
        "start": 33,
        "end": 55
      },
      "directive": null,
      "start": 33,
      "end": 56
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
