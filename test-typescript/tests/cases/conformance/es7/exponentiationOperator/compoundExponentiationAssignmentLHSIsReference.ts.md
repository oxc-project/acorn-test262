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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "name": "value",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 14,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 11,
                "end": 14
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
      "start": 56,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 79,
          "end": 84,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 100,
          "end": 110,
          "name": "x2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 102,
            "end": 110,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 104,
              "end": 110
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "x2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 125,
                "end": 130,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 177,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 177,
            "name": "x3",
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 188,
          "end": 193,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 199,
            "end": 202,
            "value": "a",
            "raw": "'a'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 208,
          "end": 213,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 279,
          "end": 284,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "fn2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 300,
          "end": 310,
          "name": "x4",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 302,
            "end": 310,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 304,
              "end": 310
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "x4",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 327,
                "end": 332,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 348,
          "end": 353,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 360,
            "end": 363,
            "value": "a",
            "raw": "'a'"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 370,
          "end": 375,
          "name": "value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
