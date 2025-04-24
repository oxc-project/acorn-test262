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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 14,
          "definite": false,
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 16,
      "end": 32,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 16,
        "end": 31,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 16,
          "end": 26,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 16,
            "end": 19,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 20,
            "end": 25,
            "raw": "\"baz\"",
            "value": "baz"
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 29,
          "end": 31,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 33,
      "end": 56,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 33,
        "end": 55,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 33,
          "end": 51,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 33,
            "end": 43,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 37,
              "end": 42,
              "raw": "\"baz\"",
              "value": "baz"
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 44,
            "end": 50,
            "raw": "\"blah\"",
            "value": "blah"
          }
        },
        "right": {
          "type": "Literal",
          "start": 54,
          "end": 55,
          "raw": "3",
          "value": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
