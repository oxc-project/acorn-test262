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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 34,
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
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
      "start": 36,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 69,
            "decorators": [],
            "name": "numNumTuple",
            "optional": false,
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
      "start": 71,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 105,
            "decorators": [],
            "name": "numEmptyObjTuple",
            "optional": false,
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
      "start": 107,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 130,
            "decorators": [],
            "name": "emptyObjTuple",
            "optional": false,
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
      "start": 133,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 155,
            "decorators": [],
            "name": "numArray",
            "optional": false,
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
      "start": 157,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 180,
            "decorators": [],
            "name": "emptyObjArray",
            "optional": false,
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
      "start": 195,
      "end": 218,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 195,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 195,
          "end": 203,
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 206,
          "end": 217,
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 249,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 219,
        "end": 248,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 219,
          "end": 232,
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 235,
          "end": 248,
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 278,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 250,
        "end": 277,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 250,
          "end": 263,
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 266,
          "end": 277,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 307,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 279,
        "end": 306,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 279,
          "end": 292,
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 295,
          "end": 306,
          "decorators": [],
          "name": "numNumTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 341,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 308,
        "end": 340,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 308,
          "end": 321,
          "decorators": [],
          "name": "emptyObjArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 324,
          "end": 340,
          "decorators": [],
          "name": "numEmptyObjTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 352,
      "end": 375,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 352,
        "end": 374,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 352,
          "end": 360,
          "decorators": [],
          "name": "numArray",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 363,
          "end": 374,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 406,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 376,
        "end": 405,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 376,
          "end": 389,
          "decorators": [],
          "name": "emptyObjTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 392,
          "end": 405,
          "decorators": [],
          "name": "emptyObjArray",
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
