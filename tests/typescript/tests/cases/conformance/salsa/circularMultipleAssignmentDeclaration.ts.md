__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 36,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 35,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 7,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 2,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 3,
            "end": 7,
            "decorators": [],
            "name": "next",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "LogicalExpression",
          "start": 10,
          "end": 35,
          "operator": "||",
          "left": {
            "type": "MemberExpression",
            "start": 10,
            "end": 17,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 10,
              "end": 12,
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "ObjectExpression",
            "start": 21,
            "end": 35,
            "properties": [
              {
                "type": "Property",
                "start": 23,
                "end": 33,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "shared",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 31,
                  "end": 33,
                  "properties": []
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 66,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 37,
        "end": 65,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 37,
          "end": 60,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 37,
            "end": 51,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 37,
              "end": 44,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 37,
                "end": 39,
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 40,
                "end": 44,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 45,
              "end": 51,
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 60,
            "decorators": [],
            "name": "mymethod",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 63,
          "end": 65,
          "properties": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
