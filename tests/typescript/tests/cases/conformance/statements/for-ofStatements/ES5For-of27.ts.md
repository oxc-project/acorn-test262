__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 58,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 29,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 29,
            "id": {
              "type": "ObjectPattern",
              "start": 9,
              "end": 29,
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "start": 10,
                  "end": 18,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 10,
                    "end": 11,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 13,
                    "end": 18,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 13,
                      "end": 14,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 17,
                      "end": 18,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 20,
                  "end": 28,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 20,
                    "end": 21,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 23,
                    "end": 28,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 23,
                      "end": 24,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 27,
                      "end": 28,
                      "value": 1,
                      "raw": "1"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 33,
        "end": 39,
        "elements": [
          {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 37,
            "end": 38,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 58,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 47,
            "end": 49,
            "expression": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 54,
            "end": 56,
            "expression": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
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
