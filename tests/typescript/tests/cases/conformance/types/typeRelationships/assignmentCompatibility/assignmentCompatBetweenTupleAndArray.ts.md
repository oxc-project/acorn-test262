__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 405,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 33,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 33,
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 33,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 17,
                "end": 33,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 18,
                    "end": 24
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 26,
                    "end": 32
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
      "start": 35,
      "end": 69,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 68,
            "decorators": [],
            "name": "numNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 52,
                "end": 68,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 53,
                    "end": 59
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 61,
                    "end": 67
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
      "start": 70,
      "end": 105,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 104,
            "decorators": [],
            "name": "numEmptyObjTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 104,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 92,
                "end": 104,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 93,
                    "end": 99
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 101,
                    "end": 103,
                    "members": []
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
      "start": 106,
      "end": 130,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 129,
            "decorators": [],
            "name": "emptyObjTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 125,
                "end": 129,
                "elementTypes": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 126,
                    "end": 128,
                    "members": []
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
      "start": 132,
      "end": 155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 154,
            "decorators": [],
            "name": "numArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 154,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 146,
                "end": 154,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 146,
                  "end": 152
                }
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
      "start": 156,
      "end": 180,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 179,
            "decorators": [],
            "name": "emptyObjArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 179,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 175,
                "end": 179,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 175,
                  "end": 177,
                  "members": []
                }
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
      "start": 194,
      "end": 217,
      "expression": {
        "type": "AssignmentExpression",
        "start": 194,
        "end": 216,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 194,
          "end": 202,
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 205,
          "end": 216,
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 218,
      "end": 248,
      "expression": {
        "type": "AssignmentExpression",
        "start": 218,
        "end": 247,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 218,
          "end": 231,
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 234,
          "end": 247,
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 277,
      "expression": {
        "type": "AssignmentExpression",
        "start": 249,
        "end": 276,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 249,
          "end": 262,
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 265,
          "end": 276,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 306,
      "expression": {
        "type": "AssignmentExpression",
        "start": 278,
        "end": 305,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 278,
          "end": 291,
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 294,
          "end": 305,
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 307,
      "end": 340,
      "expression": {
        "type": "AssignmentExpression",
        "start": 307,
        "end": 339,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 307,
          "end": 320,
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 323,
          "end": 339,
          "decorators": [],
          "name": "numEmptyObjTuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 351,
      "end": 374,
      "expression": {
        "type": "AssignmentExpression",
        "start": 351,
        "end": 373,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 351,
          "end": 359,
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 362,
          "end": 373,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 375,
      "end": 405,
      "expression": {
        "type": "AssignmentExpression",
        "start": 375,
        "end": 404,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 375,
          "end": 388,
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 391,
          "end": 404,
          "decorators": [],
          "name": "emptyObjArray",
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
