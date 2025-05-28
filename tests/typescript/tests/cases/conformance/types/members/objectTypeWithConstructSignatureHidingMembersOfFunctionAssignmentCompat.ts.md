__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 18,
            "end": 29,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 28,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 25,
                "end": 28
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 42,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 40,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 40,
                  "end": 41,
                  "decorators": [],
                  "name": "I",
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
      "start": 43,
      "end": 57,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 56,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 56,
                  "decorators": [],
                  "name": "Object",
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
      "type": "ExpressionStatement",
      "start": 58,
      "end": 64,
      "expression": {
        "type": "AssignmentExpression",
        "start": 58,
        "end": 63,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 58,
          "end": 59,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 65,
      "end": 71,
      "expression": {
        "type": "AssignmentExpression",
        "start": 65,
        "end": 70,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 65,
          "end": 66,
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 98,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 98,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 80,
                "end": 98,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 86,
                    "end": 96,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 91,
                      "end": 96,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 93,
                        "end": 96
                      }
                    }
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
      "start": 99,
      "end": 105,
      "expression": {
        "type": "AssignmentExpression",
        "start": 99,
        "end": 104,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 106,
      "end": 112,
      "expression": {
        "type": "AssignmentExpression",
        "start": 106,
        "end": 111,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "decorators": [],
          "name": "f",
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
