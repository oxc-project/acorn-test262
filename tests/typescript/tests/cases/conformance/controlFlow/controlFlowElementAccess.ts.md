__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "o",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9,
                      "end": 10
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 12,
                        "end": 19
                      },
                      "start": 10,
                      "end": 19
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 9,
                    "end": 19
                  }
                ],
                "start": 7,
                "end": 21
              },
              "start": 5,
              "end": 21
            },
            "start": 4,
            "end": 21
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 26,
                  "end": 27
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 29,
                  "end": 34
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 26,
                "end": 34
              }
            ],
            "start": 24,
            "end": 36
          },
          "definite": false,
          "start": 4,
          "end": 36
        }
      ],
      "declare": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 42
          },
          "property": {
            "type": "Literal",
            "value": "o",
            "raw": "'o'",
            "start": 43,
            "end": 46
          },
          "optional": false,
          "computed": true,
          "start": 41,
          "end": 47
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 52,
          "end": 57
        },
        "start": 41,
        "end": 57
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 66
                },
                "property": {
                  "type": "Literal",
                  "value": "o",
                  "raw": "'o'",
                  "start": 67,
                  "end": 70
                },
                "optional": false,
                "computed": true,
                "start": 65,
                "end": 71
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 74,
                "end": 78
              },
              "start": 65,
              "end": 78
            },
            "directive": null,
            "start": 65,
            "end": 78
          }
        ],
        "start": 59,
        "end": 80
      },
      "alternate": null,
      "start": 37,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
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
                ],
                "start": 91,
                "end": 107
              },
              "start": 89,
              "end": 107
            },
            "start": 88,
            "end": 107
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 111,
                "end": 112
              },
              {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 114,
                "end": 115
              }
            ],
            "start": 110,
            "end": 116
          },
          "definite": false,
          "start": 88,
          "end": 116
        }
      ],
      "declare": false,
      "start": 82,
      "end": 117
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 122,
            "end": 123
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 124,
            "end": 125
          },
          "optional": false,
          "computed": true,
          "start": 122,
          "end": 126
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 131,
          "end": 132
        },
        "start": 122,
        "end": 132
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 141
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 142,
                  "end": 143
                },
                "optional": false,
                "computed": true,
                "start": 140,
                "end": 144
              },
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 148,
                  "end": 149
                },
                "prefix": true,
                "start": 147,
                "end": 149
              },
              "start": 140,
              "end": 149
            },
            "directive": null,
            "start": 140,
            "end": 150
          }
        ],
        "start": 134,
        "end": 152
      },
      "alternate": null,
      "start": 118,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 152
}
```
