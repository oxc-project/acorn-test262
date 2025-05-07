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
          "definite": false,
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
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 24,
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 61,
                "end": 62,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 95,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 65,
          "end": 86,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 66,
              "end": 85,
              "argument": {
                "type": "ObjectPattern",
                "start": 69,
                "end": 85,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 71,
                    "end": 80,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 71,
                      "end": 72,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 74,
                      "end": 80,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 74,
                        "end": 75,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 78,
                        "end": 80,
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 82,
                    "end": 83,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 82,
                      "end": 83,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              },
              "decorators": [],
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
          "start": 89,
          "end": 94,
          "decorators": [],
          "name": "tuple",
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
