__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 205,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 18,
          "id": {
            "type": "ArrayPattern",
            "start": 6,
            "end": 13,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 7,
                "end": 11,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
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
          "init": {
            "type": "ArrayExpression",
            "start": 16,
            "end": 18,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 39,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 38,
          "id": {
            "type": "ObjectPattern",
            "start": 26,
            "end": 33,
            "decorators": [],
            "properties": [
              {
                "type": "RestElement",
                "start": 27,
                "end": 31,
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "b",
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
          "init": {
            "type": "ObjectExpression",
            "start": 36,
            "end": 38,
            "properties": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 49,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 48,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 50,
      "end": 65,
      "expression": {
        "type": "AssignmentExpression",
        "start": 51,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 51,
          "end": 58,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 52,
              "end": 56,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "c",
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
          "start": 61,
          "end": 63,
          "elements": []
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 66,
      "end": 81,
      "expression": {
        "type": "AssignmentExpression",
        "start": 67,
        "end": 79,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 67,
          "end": 74,
          "decorators": [],
          "properties": [
            {
              "type": "RestElement",
              "start": 68,
              "end": 72,
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "d",
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
          "type": "ObjectExpression",
          "start": 77,
          "end": 79,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 137,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 136,
          "id": {
            "type": "ArrayPattern",
            "start": 122,
            "end": 126,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 129,
            "end": 136,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 130,
              "end": 133
            },
            "expression": {
              "type": "ArrayExpression",
              "start": 134,
              "end": 136,
              "elements": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 159,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 158,
          "id": {
            "type": "ObjectPattern",
            "start": 144,
            "end": 148,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 145,
                "end": 146,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "f",
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
          "init": {
            "type": "TSTypeAssertion",
            "start": 151,
            "end": 158,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 152,
              "end": 155
            },
            "expression": {
              "type": "ObjectExpression",
              "start": 156,
              "end": 158,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 169,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 165,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 187,
      "expression": {
        "type": "AssignmentExpression",
        "start": 171,
        "end": 185,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 171,
          "end": 175,
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 178,
          "end": 185,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 179,
            "end": 182
          },
          "expression": {
            "type": "ArrayExpression",
            "start": 183,
            "end": 185,
            "elements": []
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 205,
      "expression": {
        "type": "AssignmentExpression",
        "start": 189,
        "end": 203,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 189,
          "end": 193,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 190,
              "end": 191,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "h",
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
        "right": {
          "type": "TSTypeAssertion",
          "start": 196,
          "end": 203,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 197,
            "end": 200
          },
          "expression": {
            "type": "ObjectExpression",
            "start": 201,
            "end": 203,
            "properties": []
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
