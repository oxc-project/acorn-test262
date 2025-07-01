__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
            "name": "ns",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 2
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "next",
            "optional": false,
            "typeAnnotation": null,
            "start": 3,
            "end": 7
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 7
        },
        "right": {
          "type": "LogicalExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "ns",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 12
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 17
            },
            "optional": false,
            "computed": false,
            "start": 10,
            "end": 17
          },
          "operator": "||",
          "right": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "shared",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 29
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 31,
                  "end": 33
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 23,
                "end": 33
              }
            ],
            "start": 21,
            "end": 35
          },
          "start": 10,
          "end": 35
        },
        "start": 0,
        "end": 35
      },
      "directive": null,
      "start": 0,
      "end": 36
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ns",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 39
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 44
              },
              "optional": false,
              "computed": false,
              "start": 37,
              "end": 44
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "shared",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 51
            },
            "optional": false,
            "computed": false,
            "start": 37,
            "end": 51
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "mymethod",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 60
          },
          "optional": false,
          "computed": false,
          "start": 37,
          "end": 60
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 63,
          "end": 65
        },
        "start": 37,
        "end": 65
      },
      "directive": null,
      "start": 37,
      "end": 66
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 66
}
```
