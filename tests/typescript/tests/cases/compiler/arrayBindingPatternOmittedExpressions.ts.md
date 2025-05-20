__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "results",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 21,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 13,
                "end": 21,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 13,
                  "end": 19
                }
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
      "type": "BlockStatement",
      "start": 24,
      "end": 98,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 30,
          "end": 55,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 34,
              "end": 54,
              "definite": false,
              "id": {
                "type": "ArrayPattern",
                "start": 34,
                "end": 44,
                "decorators": [],
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  null,
                  {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 47,
                "end": 54,
                "decorators": [],
                "name": "results",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "start": 60,
          "end": 96,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 64,
              "end": 96,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "ObjectExpression",
                "start": 68,
                "end": 96,
                "properties": [
                  {
                    "type": "Property",
                    "start": 78,
                    "end": 79,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 89,
                    "end": 90,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
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
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          ],
          "declare": false,
          "kind": "let"
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 180,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 149,
        "end": 180,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 155,
            "end": 164,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 155,
              "end": 163,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 159,
                "end": 163,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 161,
                  "end": 162,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 178,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 169,
              "end": 177,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 173,
                "end": 177,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 175,
                  "end": 176,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 112,
          "end": 147,
          "decorators": [],
          "left": {
            "type": "ArrayPattern",
            "start": 112,
            "end": 137,
            "decorators": [],
            "elements": [
              null,
              {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              null,
              {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              null,
              null,
              null,
              {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              null,
              null
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 140,
            "end": 147,
            "decorators": [],
            "name": "results",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
