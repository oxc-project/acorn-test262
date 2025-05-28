__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 376,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 15,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 14,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 11,
                "end": 14
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
      "start": 56,
      "end": 71,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
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
      "start": 72,
      "end": 85,
      "expression": {
        "type": "AssignmentExpression",
        "start": 72,
        "end": 84,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 72,
          "end": 74,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 79,
          "end": 84,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 100,
          "end": 110,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 110,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 104,
              "end": 110
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 133,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 118,
            "end": 131,
            "expression": {
              "type": "AssignmentExpression",
              "start": 118,
              "end": 130,
              "operator": "**=",
              "left": {
                "type": "Identifier",
                "start": 118,
                "end": 120,
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 178,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 177,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 164,
                "end": 177,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 166,
                    "end": 175,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 175,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 169,
                        "end": 175
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "start": 179,
      "end": 194,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 193,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 179,
          "end": 183,
          "object": {
            "type": "Identifier",
            "start": 179,
            "end": 181,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 188,
          "end": 193,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 214,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 213,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 196,
          "end": 203,
          "object": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 199,
            "end": 202,
            "value": "a",
            "raw": "'a'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Identifier",
          "start": 208,
          "end": 213,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 285,
      "expression": {
        "type": "AssignmentExpression",
        "start": 270,
        "end": 284,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 271,
          "end": 273,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 279,
          "end": 284,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 287,
      "end": 335,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 299,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 300,
          "end": 310,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 302,
            "end": 310,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 304,
              "end": 310
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 312,
        "end": 335,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 318,
            "end": 333,
            "expression": {
              "type": "AssignmentExpression",
              "start": 318,
              "end": 332,
              "operator": "**=",
              "left": {
                "type": "Identifier",
                "start": 319,
                "end": 321,
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 327,
                "end": 332,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 354,
      "expression": {
        "type": "AssignmentExpression",
        "start": 337,
        "end": 353,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 338,
          "end": 342,
          "object": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 348,
          "end": 353,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 376,
      "expression": {
        "type": "AssignmentExpression",
        "start": 356,
        "end": 375,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 357,
          "end": 364,
          "object": {
            "type": "Identifier",
            "start": 357,
            "end": 359,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 360,
            "end": 363,
            "value": "a",
            "raw": "'a'"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Identifier",
          "start": 370,
          "end": 375,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
