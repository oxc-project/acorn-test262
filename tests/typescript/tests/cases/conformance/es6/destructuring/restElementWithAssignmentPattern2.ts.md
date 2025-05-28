__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 26,
      "end": 58,
      "expression": {
        "type": "AssignmentExpression",
        "start": 26,
        "end": 57,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 26,
          "end": 47,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 27,
              "end": 46,
              "decorators": [],
              "argument": {
                "type": "ObjectPattern",
                "start": 30,
                "end": 46,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 32,
                    "end": 41,
                    "kind": "init",
                    "key": {
                      "type": "Literal",
                      "start": 32,
                      "end": 33,
                      "value": 0,
                      "raw": "0"
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 35,
                      "end": 41,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 39,
                        "end": 41,
                        "value": "",
                        "raw": "\"\""
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
                    "start": 43,
                    "end": 44,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 50,
          "end": 57,
          "elements": [
            {
              "type": "Literal",
              "start": 51,
              "end": 53,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "Literal",
              "start": 55,
              "end": 56,
              "value": 1,
              "raw": "1"
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
