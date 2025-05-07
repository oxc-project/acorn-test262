__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 169,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 13,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 16,
            "end": 42,
            "properties": [
              {
                "type": "Property",
                "start": 22,
                "end": 28,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 23,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 25,
                  "end": 28,
                  "raw": "\"A\"",
                  "value": "A",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 34,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 37,
                  "end": 40,
                  "raw": "\"B\"",
                  "value": "B",
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 44,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 44,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 44,
          "end": 58,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 51,
            "end": 58,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "ObjectExpression",
          "start": 61,
          "end": 134,
          "properties": [
            {
              "type": "Property",
              "start": 67,
              "end": 78,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 67,
                "end": 72,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 74,
                "end": 78,
                "raw": "\"ok\"",
                "value": "ok",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "Property",
              "start": 84,
              "end": 94,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 84,
                "end": 88,
                "decorators": [],
                "name": "also",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 90,
                "end": 94,
                "raw": "\"ok\"",
                "value": "ok",
                "regex": null,
                "bigint": null
              }
            },
            {
              "type": "Property",
              "start": 100,
              "end": 132,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 100,
                "end": 104,
                "decorators": [],
                "name": "desc",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "ObjectExpression",
                "start": 106,
                "end": 132,
                "properties": [
                  {
                    "type": "Property",
                    "start": 116,
                    "end": 126,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 116,
                      "end": 120,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 122,
                      "end": 126,
                      "raw": "\"ok\"",
                      "value": "ok",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 169,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 168,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 136,
          "end": 158,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 136,
            "end": 150,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 136,
              "end": 142,
              "decorators": [],
              "name": "module",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 143,
              "end": 150,
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 151,
            "end": 158,
            "decorators": [],
            "name": "Strings",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 161,
          "end": 168,
          "decorators": [],
          "name": "Strings",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
