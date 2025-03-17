__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
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
      "type": "VariableDeclaration",
      "start": 26,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 53,
            "name": "tuple",
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
            },
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 95,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 65,
          "end": 86,
          "elements": [
            {
              "type": "RestElement",
              "start": 66,
              "end": 85,
              "argument": {
                "type": "ObjectPattern",
                "start": 69,
                "end": 85,
                "properties": [
                  {
                    "type": "Property",
                    "start": 71,
                    "end": 80,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 71,
                      "end": 72,
                      "value": 0,
                      "raw": "0"
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 74,
                      "end": 80,
                      "left": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 78,
                        "end": 80,
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
                    "start": 82,
                    "end": 83,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
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
          "type": "Identifier",
          "start": 89,
          "end": 94,
          "name": "tuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
