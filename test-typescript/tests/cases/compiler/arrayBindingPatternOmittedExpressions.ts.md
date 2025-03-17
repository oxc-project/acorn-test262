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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "name": "results",
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
              "id": {
                "type": "ArrayPattern",
                "start": 34,
                "end": 44,
                "elements": [
                  null,
                  {
                    "type": "Identifier",
                    "start": 37,
                    "end": 38,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  null,
                  {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 47,
                "end": 54,
                "name": "results",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
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
              "id": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
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
                    "start": 89,
                    "end": 90,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 89,
                      "end": 90,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "let",
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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 112,
          "end": 147,
          "left": {
            "type": "ArrayPattern",
            "start": 112,
            "end": 137,
            "elements": [
              null,
              {
                "type": "Identifier",
                "start": 115,
                "end": 116,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              null,
              {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              null,
              null,
              null,
              {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              null,
              null
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 140,
            "end": 147,
            "name": "results",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 159,
                "end": 163,
                "object": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 161,
                  "end": 162,
                  "value": 1,
                  "raw": "1"
                },
                "computed": true,
                "optional": false
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 173,
                "end": 177,
                "object": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 175,
                  "end": 176,
                  "value": 2,
                  "raw": "2"
                },
                "computed": true,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
