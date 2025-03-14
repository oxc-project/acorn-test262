__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 23,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 23,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 21,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 25,
      "end": 49,
      "body": {
        "type": "TSEnumBody",
        "start": 33,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 39,
            "end": 40,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 47,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 32,
        "decorators": [],
        "name": "E2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 59,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 59,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "E",
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
      "start": 61,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 71,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 71,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 69,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 69,
                  "end": 71,
                  "decorators": [],
                  "name": "E2",
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
      "start": 74,
      "end": 83,
      "expression": {
        "type": "AssignmentExpression",
        "start": 74,
        "end": 82,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 74,
          "end": 75,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 78,
          "end": 82,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 78,
            "end": 80,
            "decorators": [],
            "name": "E2",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 93,
      "expression": {
        "type": "AssignmentExpression",
        "start": 84,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 84,
          "end": 86,
          "decorators": [],
          "name": "e2",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 89,
          "end": 92,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 109,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 108,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 98,
          "end": 108,
          "expression": {
            "type": "Literal",
            "start": 104,
            "end": 108,
            "raw": "null",
            "value": null
          },
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 99,
            "end": 103
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 117,
      "expression": {
        "type": "AssignmentExpression",
        "start": 110,
        "end": 116,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 114,
          "end": 116,
          "properties": []
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 125,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 124,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 122,
          "end": 124,
          "raw": "''",
          "value": ""
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 161,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 147,
        "end": 161,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 153,
            "end": 159,
            "expression": {
              "type": "AssignmentExpression",
              "start": 153,
              "end": 158,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 141,
          "end": 145,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 142,
            "end": 145,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 144,
              "end": 145,
              "typeName": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 137,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 139,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
