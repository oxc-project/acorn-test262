controlFlowElementAccess.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 153,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 36,
          "definite": false,
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
                    "key": {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "decorators": [],
                      "name": "o",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 10,
                      "end": 19,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 12,
                        "end": 19
                      }
                    }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "o",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 29,
                  "end": 34,
                  "raw": "false",
                  "value": false
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 37,
      "end": 80,
      "alternate": null,
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
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 66,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 67,
                  "end": 70,
                  "raw": "'o'",
                  "value": "o"
                }
              },
              "right": {
                "type": "Literal",
                "start": 74,
                "end": 78,
                "raw": "true",
                "value": true
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 41,
        "end": 57,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 41,
          "end": 47,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 43,
            "end": 46,
            "raw": "'o'",
            "value": "o"
          }
        },
        "right": {
          "type": "Literal",
          "start": 52,
          "end": 57,
          "raw": "false",
          "value": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 116,
          "definite": false,
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
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 114,
                "end": 115,
                "raw": "0",
                "value": 0
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 118,
      "end": 152,
      "alternate": null,
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
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 142,
                  "end": 143,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "UnaryExpression",
                "start": 147,
                "end": 149,
                "argument": {
                  "type": "Literal",
                  "start": 148,
                  "end": 149,
                  "raw": "1",
                  "value": 1
                },
                "operator": "-",
                "prefix": true
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 122,
        "end": 132,
        "operator": "===",
        "left": {
          "type": "MemberExpression",
          "start": 122,
          "end": 126,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 123,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 124,
            "end": 125,
            "raw": "0",
            "value": 0
          }
        },
        "right": {
          "type": "Literal",
          "start": 131,
          "end": 132,
          "raw": "0",
          "value": 0
        }
      }
    }
  ],
  "sourceType": "script"
}
```
