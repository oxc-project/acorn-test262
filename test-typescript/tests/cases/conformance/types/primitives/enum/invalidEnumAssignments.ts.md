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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 13,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 20,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 23,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 25,
      "end": 49,
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 32,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 39,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 46,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 33,
        "end": 49,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 39,
            "end": 40,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 47,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 59,
            "name": "e",
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
                  "name": "E",
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
      "start": 61,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 71,
            "name": "e2",
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
                  "name": "E2",
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 78,
          "end": 82,
          "object": {
            "type": "Identifier",
            "start": 78,
            "end": 80,
            "name": "E2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "name": "e2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 89,
          "end": 92,
          "object": {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
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
            "value": null,
            "raw": "null"
          },
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 99,
            "end": 103
          }
        }
      },
      "directive": null
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 114,
          "end": 116,
          "properties": []
        }
      },
      "directive": null
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
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 122,
          "end": 124,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 127,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 141,
          "end": 145,
          "name": "a",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 157,
                "end": 158,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 137,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 139,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
