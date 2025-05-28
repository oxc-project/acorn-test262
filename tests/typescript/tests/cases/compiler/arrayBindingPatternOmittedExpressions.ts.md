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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
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
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 34,
              "end": 54,
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
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 60,
          "end": 96,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 64,
              "end": 96,
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 89,
                    "end": 90,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
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
                ]
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 101,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 110,
        "end": 111,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
          "right": {
            "type": "Identifier",
            "start": 140,
            "end": 147,
            "decorators": [],
            "name": "results",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 149,
        "end": 180,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 155,
            "end": 164,
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
                "object": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 161,
                  "end": 162,
                  "value": 1,
                  "raw": "1"
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 178,
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
                "object": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 175,
                  "end": 176,
                  "value": 2,
                  "raw": "2"
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
