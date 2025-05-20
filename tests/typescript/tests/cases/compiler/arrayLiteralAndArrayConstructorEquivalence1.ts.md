__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 226,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 22,
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 20,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "decorators": [],
            "name": "myCars3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 39,
            "end": 52,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 49,
                "end": 51,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 72,
            "decorators": [],
            "name": "myCars4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 72,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 72,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 83,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 108,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 108,
            "decorators": [],
            "name": "myCars5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 108,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 96,
                "end": 108,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 96,
                  "end": 106,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 101,
                    "end": 106,
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 102,
                        "end": 105
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 101,
                    "decorators": [],
                    "name": "Array",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
      "start": 112,
      "end": 129,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 121,
          "end": 128,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 130,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 130,
          "end": 136,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 139,
          "end": 146,
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 165,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 148,
          "end": 154,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 157,
          "end": 164,
          "decorators": [],
          "name": "myCars5",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 185,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 184,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 175,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 178,
          "end": 184,
          "decorators": [],
          "name": "myCars",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 204,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 186,
        "end": 203,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 186,
          "end": 193,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 196,
          "end": 203,
          "decorators": [],
          "name": "myCars4",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 205,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 205,
          "end": 212,
          "decorators": [],
          "name": "myCars3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 215,
          "end": 222,
          "decorators": [],
          "name": "myCars5",
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
