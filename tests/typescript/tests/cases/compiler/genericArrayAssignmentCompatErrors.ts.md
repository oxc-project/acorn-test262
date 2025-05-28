__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 362,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "myCars",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 11,
            "end": 22,
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 20,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 46,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "decorators": [],
            "name": "myCars2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 39,
            "end": 45,
            "callee": {
              "type": "ArrayExpression",
              "start": 43,
              "end": 45,
              "elements": []
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 75,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 58,
            "decorators": [],
            "name": "myCars3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 61,
            "end": 74,
            "callee": {
              "type": "Identifier",
              "start": 65,
              "end": 70,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 71,
                "end": 73,
                "properties": []
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
      "start": 76,
      "end": 95,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 80,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 94,
            "decorators": [],
            "name": "myCars4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 89,
                "end": 94,
                "typeName": {
                  "type": "Identifier",
                  "start": 89,
                  "end": 94,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 105,
      "end": 131,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 130,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 130,
            "decorators": [],
            "name": "myCars5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 130,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 118,
                "end": 130,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 118,
                  "end": 128,
                  "typeName": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 123,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 123,
                    "end": 128,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 124,
                        "end": 127
                      }
                    ]
                  }
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
      "start": 134,
      "end": 151,
      "expression": {
        "type": "AssignmentExpression",
        "start": 134,
        "end": 150,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 134,
          "end": 140,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 143,
          "end": 150,
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 152,
      "end": 169,
      "expression": {
        "type": "AssignmentExpression",
        "start": 152,
        "end": 168,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 152,
          "end": 158,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 161,
          "end": 168,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 187,
      "expression": {
        "type": "AssignmentExpression",
        "start": 170,
        "end": 186,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 176,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 179,
          "end": 186,
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 205,
      "expression": {
        "type": "AssignmentExpression",
        "start": 188,
        "end": 204,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 188,
          "end": 194,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 197,
          "end": 204,
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 225,
      "expression": {
        "type": "AssignmentExpression",
        "start": 208,
        "end": 224,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 208,
          "end": 215,
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 218,
          "end": 224,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 244,
      "expression": {
        "type": "AssignmentExpression",
        "start": 226,
        "end": 243,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 233,
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 236,
          "end": 243,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 245,
      "end": 263,
      "expression": {
        "type": "AssignmentExpression",
        "start": 245,
        "end": 262,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 245,
          "end": 252,
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 255,
          "end": 262,
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 282,
      "expression": {
        "type": "AssignmentExpression",
        "start": 264,
        "end": 281,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 264,
          "end": 271,
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 274,
          "end": 281,
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 302,
      "expression": {
        "type": "AssignmentExpression",
        "start": 285,
        "end": 301,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 285,
          "end": 292,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 295,
          "end": 301,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 321,
      "expression": {
        "type": "AssignmentExpression",
        "start": 303,
        "end": 320,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 303,
          "end": 310,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 313,
          "end": 320,
          "decorators": [],
          "name": "myCars2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 322,
      "end": 340,
      "expression": {
        "type": "AssignmentExpression",
        "start": 322,
        "end": 339,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 322,
          "end": 329,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 332,
          "end": 339,
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 341,
      "end": 359,
      "expression": {
        "type": "AssignmentExpression",
        "start": 341,
        "end": 358,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 341,
          "end": 348,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 351,
          "end": 358,
          "decorators": [],
          "name": "myCars5",
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
