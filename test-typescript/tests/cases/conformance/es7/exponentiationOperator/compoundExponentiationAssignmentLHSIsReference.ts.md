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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 72,
      "end": 85,
      "directive": null,
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 133,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 112,
        "end": 133,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 118,
            "end": 131,
            "directive": null,
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
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
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
          "definite": false,
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
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 167,
                      "end": 175,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 169,
                        "end": 175
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 194,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 193,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 179,
          "end": 183,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 179,
            "end": 181,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 182,
            "end": 183,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 214,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 213,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 196,
          "end": 203,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 199,
            "end": 202,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 285,
      "directive": null,
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 287,
      "end": 335,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 312,
        "end": 335,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 318,
            "end": 333,
            "directive": null,
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
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 299,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 337,
      "end": 354,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 337,
        "end": 353,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 338,
          "end": 342,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 338,
            "end": 340,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 356,
      "end": 376,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 356,
        "end": 375,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 357,
          "end": 364,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 357,
            "end": 359,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 360,
            "end": 363,
            "raw": "'a'",
            "value": "a",
            "regex": null,
            "bigint": null
          }
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
