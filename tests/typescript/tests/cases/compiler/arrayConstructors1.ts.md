__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 184,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 15,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 15,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 7,
                "end": 15,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 7,
                  "end": 13
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
      "type": "ExpressionStatement",
      "start": 17,
      "end": 34,
      "expression": {
        "type": "AssignmentExpression",
        "start": 17,
        "end": 33,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 21,
          "end": 33,
          "callee": {
            "type": "Identifier",
            "start": 25,
            "end": 30,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 31,
              "end": 32,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 35,
      "end": 62,
      "expression": {
        "type": "AssignmentExpression",
        "start": 35,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 35,
          "end": 36,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 39,
          "end": 61,
          "callee": {
            "type": "Identifier",
            "start": 43,
            "end": 48,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 49,
              "end": 53,
              "value": "hi",
              "raw": "'hi'"
            },
            {
              "type": "Literal",
              "start": 55,
              "end": 60,
              "value": "bye",
              "raw": "'bye'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 99,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 98,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 64,
          "end": 65,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 68,
          "end": 98,
          "callee": {
            "type": "Identifier",
            "start": 72,
            "end": 77,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 77,
            "end": 85,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              }
            ]
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 86,
              "end": 90,
              "value": "hi",
              "raw": "'hi'"
            },
            {
              "type": "Literal",
              "start": 92,
              "end": 97,
              "value": "bye",
              "raw": "'bye'"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 117,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 116,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 116,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 108,
                "end": 116,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 108,
                  "end": 114
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
      "type": "ExpressionStatement",
      "start": 118,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 122,
          "end": 134,
          "callee": {
            "type": "Identifier",
            "start": 126,
            "end": 131,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 132,
              "end": 133,
              "value": 1,
              "raw": "1"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 155,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 154,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 136,
          "end": 137,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 140,
          "end": 154,
          "callee": {
            "type": "Identifier",
            "start": 144,
            "end": 149,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "start": 150,
              "end": 151,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 152,
              "end": 153,
              "value": 2,
              "raw": "2"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 156,
      "end": 184,
      "expression": {
        "type": "AssignmentExpression",
        "start": 156,
        "end": 183,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "NewExpression",
          "start": 160,
          "end": 183,
          "callee": {
            "type": "Identifier",
            "start": 164,
            "end": 169,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 169,
            "end": 177,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              }
            ]
          },
          "arguments": [
            {
              "type": "Literal",
              "start": 178,
              "end": 179,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 181,
              "end": 182,
              "value": 2,
              "raw": "2"
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
