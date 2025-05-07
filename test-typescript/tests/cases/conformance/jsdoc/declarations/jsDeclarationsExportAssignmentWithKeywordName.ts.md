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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
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
            "raw": "12",
            "value": 12,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 104,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 103,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 12,
          "end": 26,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 19,
            "end": 26,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 42,
                "decorators": [],
                "name": "extends",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 44,
                "end": 50,
                "raw": "'base'",
                "value": "base",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "Property",
              "start": 56,
              "end": 94,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 56,
                "end": 60,
                "decorators": [],
                "name": "more",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 62,
                "end": 94,
                "properties": [
                  {
                    "type": "Property",
                    "start": 72,
                    "end": 88,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 78,
                      "decorators": [],
                      "name": "others",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ArrayExpression",
                      "start": 80,
                      "end": 88,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 81,
                          "end": 87,
                          "raw": "'strs'",
                          "value": "strs",
                          "regex": null,
                          "bigint": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "Property",
              "start": 100,
              "end": 101,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
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
