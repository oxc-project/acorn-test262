__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 305,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 18,
            "properties": [
              {
                "type": "Property",
                "start": 10,
                "end": 16,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 13,
                  "decorators": [],
                  "name": "one",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "value": 1,
                  "raw": "1"
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
      "type": "VariableDeclaration",
      "start": 20,
      "end": 52,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 51,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 27,
                "end": 51,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 29,
                    "end": 49,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 30,
                        "end": 43,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 35,
                          "end": 43,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 37,
                            "end": 43
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 46,
                        "end": 49
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 53,
      "end": 85,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 84,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 60,
                "end": 84,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 62,
                    "end": 82,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 76,
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 68,
                          "end": 76,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 70,
                            "end": 76
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 82,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 79,
                        "end": 82
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
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
      "start": 86,
      "end": 92,
      "expression": {
        "type": "AssignmentExpression",
        "start": 86,
        "end": 91,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 109,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 107,
          "end": 108,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 159,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 158,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 170,
        "end": 175,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 171,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 174,
          "end": 175,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 230,
      "expression": {
        "type": "AssignmentExpression",
        "start": 220,
        "end": 229,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 220,
          "end": 221,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 224,
          "end": 229,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 240,
      "end": 250,
      "expression": {
        "type": "AssignmentExpression",
        "start": 240,
        "end": 249,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 240,
          "end": 241,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 244,
          "end": 249,
          "value": "foo",
          "raw": "\"foo\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 295,
      "expression": {
        "type": "AssignmentExpression",
        "start": 285,
        "end": 294,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 289,
          "end": 294,
          "value": false,
          "raw": "false"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
