__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 9,
        "end": 35,
        "checkType": {
          "type": "TSAnyKeyword",
          "start": 9,
          "end": 12
        },
        "extendsType": {
          "type": "TSNumberKeyword",
          "start": 21,
          "end": 27
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 30,
          "end": 31,
          "literal": {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 34,
          "end": 35,
          "literal": {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 45,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 53,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 52,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 52,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 60,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 59,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 58,
          "end": 59,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "name": "U",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 87,
        "end": 117,
        "checkType": {
          "type": "TSTupleType",
          "start": 87,
          "end": 92,
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 88,
              "end": 91
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 101,
          "end": 109,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 102,
              "end": 108
            }
          ]
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 112,
          "end": 113,
          "literal": {
            "type": "Literal",
            "start": 112,
            "end": 113,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 116,
          "end": 117,
          "literal": {
            "type": "Literal",
            "start": 116,
            "end": 117,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 119,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 123,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 127,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 133,
          "end": 134,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 142,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 141,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 136,
          "end": 137,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 140,
          "end": 141,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
