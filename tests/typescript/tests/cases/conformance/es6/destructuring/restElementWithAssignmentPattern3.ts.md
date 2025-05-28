__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
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
      "type": "VariableDeclaration",
      "start": 26,
      "end": 64,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 53,
            "decorators": [],
            "name": "tuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 53,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 37,
                "end": 53,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 46,
                    "end": 52
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 56,
            "end": 63,
            "elements": [
              {
                "type": "Literal",
                "start": 57,
                "end": 59,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "value": 1,
                "raw": "1"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 89,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 88,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 65,
          "end": 80,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 66,
              "end": 79,
              "decorators": [],
              "argument": {
                "type": "ArrayPattern",
                "start": 69,
                "end": 79,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 70,
                    "end": 71,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "AssignmentPattern",
                    "start": 73,
                    "end": 78,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 77,
                      "end": 78,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "typeAnnotation": null
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
          "type": "Identifier",
          "start": 83,
          "end": 88,
          "decorators": [],
          "name": "tuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
