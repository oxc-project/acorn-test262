__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 12,
            "raw": "12"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 104,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 103,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 26,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 19,
            "end": 26,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 29,
          "end": 103,
          "properties": [
            {
              "type": "Property",
              "start": 35,
              "end": 50,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 42,
                "decorators": [],
                "name": "extends",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 44,
                "end": 50,
                "value": "base",
                "raw": "'base'"
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 56,
              "end": 94,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 56,
                "end": 60,
                "decorators": [],
                "name": "more",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "ObjectExpression",
                "start": 62,
                "end": 94,
                "properties": [
                  {
                    "type": "Property",
                    "start": 72,
                    "end": 88,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 78,
                      "decorators": [],
                      "name": "others",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 80,
                      "end": 88,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 81,
                          "end": 87,
                          "value": "strs",
                          "raw": "'strs'"
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 100,
              "end": 101,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
