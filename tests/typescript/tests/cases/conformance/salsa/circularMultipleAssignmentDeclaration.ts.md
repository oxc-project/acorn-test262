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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 35,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 7,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 2,
            "decorators": [],
            "name": "ns",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 3,
            "end": 7,
            "decorators": [],
            "name": "next",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "LogicalExpression",
          "start": 10,
          "end": 35,
          "left": {
            "type": "MemberExpression",
            "start": 10,
            "end": 17,
            "object": {
              "type": "Identifier",
              "start": 10,
              "end": 12,
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "start": 21,
            "end": 35,
            "properties": [
              {
                "type": "Property",
                "start": 23,
                "end": 33,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 29,
                  "decorators": [],
                  "name": "shared",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 31,
                  "end": 33,
                  "properties": []
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 37,
      "end": 66,
      "expression": {
        "type": "AssignmentExpression",
        "start": 37,
        "end": 65,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 37,
          "end": 60,
          "object": {
            "type": "MemberExpression",
            "start": 37,
            "end": 51,
            "object": {
              "type": "MemberExpression",
              "start": 37,
              "end": 44,
              "object": {
                "type": "Identifier",
                "start": 37,
                "end": 39,
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 40,
                "end": 44,
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Identifier",
              "start": 45,
              "end": 51,
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 52,
            "end": 60,
            "decorators": [],
            "name": "mymethod",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 63,
          "end": 65,
          "properties": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
