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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
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
        "falseType": {
          "type": "TSLiteralType",
          "start": 34,
          "end": 35,
          "literal": {
            "type": "Literal",
            "start": 34,
            "end": 35,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 30,
          "end": 31,
          "literal": {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 45,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 44,
                "end": 45,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 44,
                  "end": 45,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 53,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 52,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 47,
          "end": 48,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 51,
          "end": 52,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 54,
      "end": 60,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 54,
        "end": 59,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 54,
          "end": 55,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 58,
          "end": 59,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 78,
      "end": 118,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null
      },
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
        "falseType": {
          "type": "TSLiteralType",
          "start": 116,
          "end": 117,
          "literal": {
            "type": "Literal",
            "start": 116,
            "end": 117,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 112,
          "end": 113,
          "literal": {
            "type": "Literal",
            "start": 112,
            "end": 113,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        }
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 123,
            "end": 127,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 126,
                "end": 127,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 127,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 135,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 133,
          "end": 134,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 142,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 141,
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
          "type": "Literal",
          "start": 140,
          "end": 141,
          "raw": "0",
          "value": 0,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
