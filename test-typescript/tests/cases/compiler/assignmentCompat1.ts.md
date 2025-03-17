__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 306,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 10,
                  "end": 13,
                  "name": "one",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 15,
                  "end": 16,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 51,
            "name": "y",
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
                        "name": "index",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 35,
                          "end": 43,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 37,
                            "end": 43
                          }
                        },
                        "decorators": [],
                        "optional": false
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
      "type": "VariableDeclaration",
      "start": 53,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 84,
            "name": "z",
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
                        "name": "index",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 68,
                          "end": 76,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 70,
                            "end": 76
                          }
                        },
                        "decorators": [],
                        "optional": false
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 107,
          "end": 108,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 157,
          "end": 158,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 174,
          "end": 175,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
