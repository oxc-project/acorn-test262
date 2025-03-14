validNumberAssignments.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 27,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 26,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 22,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 19,
                "end": 22
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 28,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 32,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 32,
            "end": 41,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 41,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 60,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 54,
                "end": 60
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 63,
            "end": 64,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 66,
      "end": 78,
      "body": {
        "type": "TSEnumBody",
        "start": 73,
        "end": 78,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 75,
            "end": 76,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 78,
      "end": 79
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 93,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 92,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 87,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 94,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 98,
          "end": 105,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 102,
            "end": 105,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 113,
      "expression": {
        "type": "AssignmentExpression",
        "start": 107,
        "end": 112,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 108,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 111,
          "end": 112,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
