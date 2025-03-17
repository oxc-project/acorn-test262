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
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 41,
            "name": "i",
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
                  "name": "I",
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
      "start": 43,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 56,
            "name": "f",
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
                  "name": "Object",
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "i",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 69,
          "end": 70,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 73,
      "end": 98,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 77,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 77,
            "end": 98,
            "name": "a",
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
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "name": "f",
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
