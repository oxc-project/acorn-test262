__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 407,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 34,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 34,
            "name": "numStrTuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 34,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 18,
                "end": 34,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 27,
                    "end": 33
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
      "start": 36,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 69,
            "name": "numNumTuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 53,
                "end": 69,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 54,
                    "end": 60
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
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
      "start": 71,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 105,
            "name": "numEmptyObjTuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 105,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 93,
                "end": 105,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 94,
                    "end": 100
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 102,
                    "end": 104,
                    "members": []
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
      "start": 107,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 130,
            "name": "emptyObjTuple",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 124,
              "end": 130,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 126,
                "end": 130,
                "elementTypes": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 127,
                    "end": 129,
                    "members": []
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
      "start": 133,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 155,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 155,
            "name": "numArray",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 155,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 147,
                "end": 155,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 147,
                  "end": 153
                }
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
      "start": 157,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 180,
            "name": "emptyObjArray",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 180,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 176,
                "end": 180,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 176,
                  "end": 178,
                  "members": []
                }
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
      "start": 195,
      "end": 218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 195,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 195,
          "end": 203,
          "name": "numArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 206,
          "end": 217,
          "name": "numNumTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 249,
      "expression": {
        "type": "AssignmentExpression",
        "start": 219,
        "end": 248,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 232,
          "name": "emptyObjArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 235,
          "end": 248,
          "name": "emptyObjTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 278,
      "expression": {
        "type": "AssignmentExpression",
        "start": 250,
        "end": 277,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 250,
          "end": 263,
          "name": "emptyObjArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 266,
          "end": 277,
          "name": "numStrTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 307,
      "expression": {
        "type": "AssignmentExpression",
        "start": 279,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 279,
          "end": 292,
          "name": "emptyObjArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 295,
          "end": 306,
          "name": "numNumTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 341,
      "expression": {
        "type": "AssignmentExpression",
        "start": 308,
        "end": 340,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 308,
          "end": 321,
          "name": "emptyObjArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 324,
          "end": 340,
          "name": "numEmptyObjTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 352,
      "end": 375,
      "expression": {
        "type": "AssignmentExpression",
        "start": 352,
        "end": 374,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 352,
          "end": 360,
          "name": "numArray",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 363,
          "end": 374,
          "name": "numStrTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 406,
      "expression": {
        "type": "AssignmentExpression",
        "start": 376,
        "end": 405,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 376,
          "end": 389,
          "name": "emptyObjTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 392,
          "end": 405,
          "name": "emptyObjArray",
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
