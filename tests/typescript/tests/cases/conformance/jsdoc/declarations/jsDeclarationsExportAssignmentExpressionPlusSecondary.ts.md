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
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 23
                },
                "value": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "\"A\"",
                  "start": 25,
                  "end": 28
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 22,
                "end": 28
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "value": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 37,
                  "end": 40
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 34,
                "end": 40
              }
            ],
            "start": 16,
            "end": 42
          },
          "definite": false,
          "start": 6,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
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
            "start": 44,
            "end": 50
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 51,
            "end": 58
          },
          "optional": false,
          "computed": false,
          "start": 44,
          "end": 58
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
                "name": "thing",
                "optional": false,
                "typeAnnotation": null,
                "start": 67,
                "end": 72
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 74,
                "end": 78
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 67,
              "end": 78
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "also",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 88
              },
              "value": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 90,
                "end": 94
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 84,
              "end": 94
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "desc",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 104
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
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 116,
                      "end": 120
                    },
                    "value": {
                      "type": "Literal",
                      "value": "ok",
                      "raw": "\"ok\"",
                      "start": 122,
                      "end": 126
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 116,
                    "end": 126
                  }
                ],
                "start": 106,
                "end": 132
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 100,
              "end": 132
            }
          ],
          "start": 61,
          "end": 134
        },
        "start": 44,
        "end": 134
      },
      "directive": null,
      "start": 44,
      "end": 135
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
              "name": "module",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 142
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 150
            },
            "optional": false,
            "computed": false,
            "start": 136,
            "end": 150
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 158
          },
          "optional": false,
          "computed": false,
          "start": 136,
          "end": 158
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 161,
          "end": 168
        },
        "start": 136,
        "end": 168
      },
      "directive": null,
      "start": 136,
      "end": 169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 169
}
```
