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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 13,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 13,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 7,
                "end": 13
              }
            },
            "decorators": [],
            "optional": false
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
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 24,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
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
          "elements": [
            {
              "type": "RestElement",
              "start": 27,
              "end": 46,
              "argument": {
                "type": "ObjectPattern",
                "start": 30,
                "end": 46,
                "properties": [
                  {
                    "type": "Property",
                    "start": 32,
                    "end": 41,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
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
                      "left": {
                        "type": "Identifier",
                        "start": 35,
                        "end": 36,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 39,
                        "end": 41,
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
                    "start": 43,
                    "end": 44,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 43,
                      "end": 44,
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
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
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
