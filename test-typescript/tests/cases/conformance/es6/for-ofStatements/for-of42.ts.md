__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 95,
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
      "end": 95,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 51,
        "end": 67,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 55,
            "end": 67,
            "id": {
              "type": "ObjectPattern",
              "start": 55,
              "end": 67,
              "properties": [
                {
                  "type": "Property",
                  "start": 56,
                  "end": 60,
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
                    "type": "Identifier",
                    "start": 59,
                    "end": 60,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 62,
                  "end": 66,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 62,
                    "end": 63,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
        "start": 71,
        "end": 76,
        "name": "array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 95,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 84,
            "end": 86,
            "expression": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 91,
            "end": 93,
            "expression": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
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
