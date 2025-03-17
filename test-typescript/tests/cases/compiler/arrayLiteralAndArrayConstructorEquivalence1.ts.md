__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "myCars",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 11,
            "end": 22,
            "callee": {
              "type": "Identifier",
              "start": 15,
              "end": 20,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 36,
            "name": "myCars3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 39,
            "end": 52,
            "callee": {
              "type": "Identifier",
              "start": 43,
              "end": 48,
              "name": "Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 49,
                "end": 51,
                "properties": []
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 72,
            "name": "myCars4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 67,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 72,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "start": 83,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 108,
            "name": "myCars5",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 96,
                    "end": 101,
                    "name": "Array",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
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
      "start": 112,
      "end": 129,
      "expression": {
        "type": "AssignmentExpression",
        "start": 112,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 112,
          "end": 118,
          "name": "myCars",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 121,
          "end": 128,
          "name": "myCars3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 147,
      "expression": {
        "type": "AssignmentExpression",
        "start": 130,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 130,
          "end": 136,
          "name": "myCars",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 139,
          "end": 146,
          "name": "myCars4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 165,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 164,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 148,
          "end": 154,
          "name": "myCars",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 157,
          "end": 164,
          "name": "myCars5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 185,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 184,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 175,
          "name": "myCars3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 178,
          "end": 184,
          "name": "myCars",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 204,
      "expression": {
        "type": "AssignmentExpression",
        "start": 186,
        "end": 203,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 186,
          "end": 193,
          "name": "myCars3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 196,
          "end": 203,
          "name": "myCars4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 205,
      "end": 223,
      "expression": {
        "type": "AssignmentExpression",
        "start": 205,
        "end": 222,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 205,
          "end": 212,
          "name": "myCars3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 215,
          "end": 222,
          "name": "myCars5",
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
