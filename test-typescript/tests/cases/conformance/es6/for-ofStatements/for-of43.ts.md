__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 107,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 25,
            "name": "array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 28,
            "end": 45,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 29,
                "end": 44,
                "properties": [
                  {
                    "type": "Property",
                    "start": 31,
                    "end": 36,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 34,
                      "end": 36,
                      "value": "",
                      "raw": "\"\""
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 38,
                    "end": 42,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 38,
                      "end": 39,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 41,
                      "end": 42,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 46,
      "end": 107,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 51,
        "end": 79,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 79,
            "id": {
              "type": "ObjectPattern",
              "start": 55,
              "end": 79,
              "properties": [
                {
                  "type": "Property",
                  "start": 56,
                  "end": 65,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 59,
                    "end": 65,
                    "left": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 63,
                      "end": 65,
                      "value": "",
                      "raw": "\"\""
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 67,
                  "end": 78,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 70,
                    "end": 78,
                    "left": {
                      "type": "Identifier",
                      "start": 70,
                      "end": 71,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 74,
                      "end": 78,
                      "value": true,
                      "raw": "true"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 83,
        "end": 88,
        "name": "array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 90,
        "end": 107,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 98,
            "expression": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 103,
            "end": 105,
            "expression": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
