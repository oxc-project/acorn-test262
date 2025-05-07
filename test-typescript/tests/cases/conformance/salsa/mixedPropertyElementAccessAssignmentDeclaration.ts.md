__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 28,
  "end": 62,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 35,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 38,
            "end": 40,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 62,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 42,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 42,
          "end": 56,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 42,
            "end": 53,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 42,
              "end": 48,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 42,
                "end": 45,
                "decorators": [],
                "name": "arr",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 46,
                "end": 47,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 54,
            "end": 55,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 59,
          "end": 61,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
