__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 26
          },
          "optional": false,
          "computed": false,
          "start": 12,
          "end": 26
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extends",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 42
              },
              "value": {
                "type": "Literal",
                "value": "base",
                "raw": "'base'",
                "start": 44,
                "end": 50
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 35,
              "end": 50
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "more",
                "optional": false,
                "typeAnnotation": null,
                "start": 56,
                "end": 60
              },
              "value": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "others",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 78
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": "strs",
                          "raw": "'strs'",
                          "start": 81,
                          "end": 87
                        }
                      ],
                      "start": 80,
                      "end": 88
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 72,
                    "end": 88
                  }
                ],
                "start": 62,
                "end": 94
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 56,
              "end": 94
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 101
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 100,
              "end": 101
            }
          ],
          "start": 29,
          "end": 103
        },
        "start": 12,
        "end": 103
      },
      "directive": null,
      "start": 12,
      "end": 104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
