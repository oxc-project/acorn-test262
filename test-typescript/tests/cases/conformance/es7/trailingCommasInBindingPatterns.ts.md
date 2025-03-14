trailingCommasInBindingPatterns.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 206,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 18,
          "definite": false,
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
                "argument": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 16,
            "end": 18,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 38,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 26,
            "end": 33,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "RestElement",
                "start": 27,
                "end": 31,
                "argument": {
                  "type": "Identifier",
                  "start": 30,
                  "end": 31,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 36,
            "end": 38,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
              "argument": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 61,
          "end": 63,
          "elements": []
        }
      }
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
          "optional": false,
          "properties": [
            {
              "type": "RestElement",
              "start": 68,
              "end": 72,
              "argument": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "decorators": [],
              "optional": false
            }
          ]
        },
        "right": {
          "type": "ObjectExpression",
          "start": 77,
          "end": 79,
          "properties": []
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 116,
      "end": 137,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 136,
          "definite": false,
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
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 129,
            "end": 136,
            "expression": {
              "type": "ArrayExpression",
              "start": 134,
              "end": 136,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 130,
              "end": 133
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 158,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 144,
            "end": 148,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 145,
                "end": 146,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 151,
            "end": 158,
            "expression": {
              "type": "ObjectExpression",
              "start": 156,
              "end": 158,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 152,
              "end": 155
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 165,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 167,
          "end": 168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 178,
          "end": 185,
          "expression": {
            "type": "ArrayExpression",
            "start": 183,
            "end": 185,
            "elements": []
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 179,
            "end": 182
          }
        }
      }
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
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 190,
              "end": 191,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "h",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": true,
              "value": {
                "type": "Identifier",
                "start": 190,
                "end": 191,
                "decorators": [],
                "name": "h",
                "optional": false
              }
            }
          ]
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 196,
          "end": 203,
          "expression": {
            "type": "ObjectExpression",
            "start": 201,
            "end": 203,
            "properties": []
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 197,
            "end": 200
          }
        }
      }
    }
  ],
  "sourceType": "script"
}
```
