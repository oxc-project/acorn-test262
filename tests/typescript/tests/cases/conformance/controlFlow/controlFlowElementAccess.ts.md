__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 21,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 21,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 7,
                "end": 21,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 9,
                    "end": 19,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 19,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 12,
                        "end": 19
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 24,
            "end": 36,
            "properties": [
              {
                "type": "Property",
                "start": 26,
                "end": 34,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 29,
                  "end": 34,
                  "value": false,
                  "raw": "false"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 37,
      "end": 80,
      "test": {
        "type": "BinaryExpression",
        "start": 41,
        "end": 57,
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 47,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 43,
            "end": 46,
            "value": "o",
            "raw": "'o'"
          },
          "optional": false,
          "computed": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 52,
          "end": 57,
          "value": false,
          "raw": "false"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 59,
        "end": 80,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 78,
            "expression": {
              "type": "AssignmentExpression",
              "start": 65,
              "end": 78,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 65,
                "end": 71,
                "object": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 67,
                  "end": 70,
                  "value": "o",
                  "raw": "'o'"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "Literal",
                "start": 74,
                "end": 78,
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 117,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 107,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 107,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 91,
                "end": 107,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 92,
                    "end": 98
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 100,
                    "end": 106
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 110,
            "end": 116,
            "elements": [
              {
                "type": "Literal",
                "start": 111,
                "end": 112,
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 114,
                "end": 115,
                "value": 0,
                "raw": "0"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 118,
      "end": 152,
      "test": {
        "type": "BinaryExpression",
        "start": 122,
        "end": 132,
        "left": {
          "type": "MemberExpression",
          "start": 122,
          "end": 126,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 124,
            "end": 125,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 131,
          "end": 132,
          "value": 0,
          "raw": "0"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 134,
        "end": 152,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 140,
            "end": 150,
            "expression": {
              "type": "AssignmentExpression",
              "start": 140,
              "end": 149,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 140,
                "end": 144,
                "object": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 142,
                  "end": 143,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "right": {
                "type": "UnaryExpression",
                "start": 147,
                "end": 149,
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "start": 148,
                  "end": 149,
                  "value": 1,
                  "raw": "1"
                },
                "prefix": true
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
