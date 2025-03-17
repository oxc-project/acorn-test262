__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 60,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 31,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 11,
            "end": 31,
            "id": {
              "type": "ObjectPattern",
              "start": 11,
              "end": 31,
              "properties": [
                {
                  "type": "Property",
                  "start": 12,
                  "end": 20,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 12,
                    "end": 13,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 15,
                    "end": 20,
                    "left": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 16,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 19,
                      "end": 20,
                      "value": 0,
                      "raw": "0"
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
                  "start": 22,
                  "end": 30,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 25,
                    "end": 30,
                    "left": {
                      "type": "Identifier",
                      "start": 25,
                      "end": 26,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 29,
                      "end": 30,
                      "value": 1,
                      "raw": "1"
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
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 35,
        "end": 41,
        "elements": [
          {
            "type": "Literal",
            "start": 36,
            "end": 37,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 39,
            "end": 40,
            "value": 3,
            "raw": "3"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 60,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 51,
            "expression": {
              "type": "Identifier",
              "start": 49,
              "end": 50,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 56,
            "end": 58,
            "expression": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
