objectTypeWithCallSignatureHidingMembersOfFunctionAssignmentCompat.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 29,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 29,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 18,
            "end": 27,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 26,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 22,
                "end": 26
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 39,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 38,
                "end": 39,
                "typeName": {
                  "type": "Identifier",
                  "start": 38,
                  "end": 39,
                  "decorators": [],
                  "name": "I",
                  "optional": false
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
      "start": 41,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 54,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 54,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 54,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 54,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
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
      "start": 56,
      "end": 62,
      "expression": {
        "type": "AssignmentExpression",
        "start": 56,
        "end": 61,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 56,
          "end": 57,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "i",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 63,
      "end": 69,
      "expression": {
        "type": "AssignmentExpression",
        "start": 63,
        "end": 68,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 94,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 94,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 94,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 94,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 84,
                    "end": 92,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 86,
                      "end": 92,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 88,
                        "end": 92
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
      "start": 95,
      "end": 101,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 100,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 99,
          "end": 100,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 108,
      "expression": {
        "type": "AssignmentExpression",
        "start": 102,
        "end": 107,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
