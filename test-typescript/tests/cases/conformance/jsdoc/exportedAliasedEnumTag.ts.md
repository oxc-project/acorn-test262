__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 16,
            "decorators": [],
            "name": "middlewarify",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 19,
            "end": 38,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 19,
              "end": 33,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 19,
                "end": 25,
                "decorators": [],
                "name": "module",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 26,
                "end": 33,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "ObjectExpression",
              "start": 36,
              "end": 38,
              "properties": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 97,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 96,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 54,
          "end": 71,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 54,
            "end": 66,
            "decorators": [],
            "name": "middlewarify",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 67,
            "end": 71,
            "decorators": [],
            "name": "Type",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 74,
          "end": 96,
          "properties": [
            {
              "type": "Property",
              "start": 78,
              "end": 94,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 78,
                "end": 84,
                "decorators": [],
                "name": "BEFORE",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 86,
                "end": 94,
                "raw": "'before'",
                "value": "before",
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
