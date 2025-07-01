__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 14
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "initializer": null,
            "computed": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 7,
        "end": 23
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 30,
        "end": 32
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "initializer": null,
            "computed": false,
            "start": 39,
            "end": 40
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 47
            },
            "initializer": null,
            "computed": false,
            "start": 46,
            "end": 47
          }
        ],
        "start": 33,
        "end": 49
      },
      "const": false,
      "declare": false,
      "start": 25,
      "end": 49
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "typeArguments": null,
                "start": 58,
                "end": 59
              },
              "start": 56,
              "end": 59
            },
            "start": 55,
            "end": 59
          },
          "init": null,
          "definite": false,
          "start": 55,
          "end": 59
        }
      ],
      "declare": false,
      "start": 51,
      "end": 60
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 71
                },
                "typeArguments": null,
                "start": 69,
                "end": 71
              },
              "start": 67,
              "end": 71
            },
            "start": 65,
            "end": 71
          },
          "init": null,
          "definite": false,
          "start": 65,
          "end": 71
        }
      ],
      "declare": false,
      "start": 61,
      "end": 72
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 74,
          "end": 75
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 80
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "optional": false,
          "computed": false,
          "start": 78,
          "end": 82
        },
        "start": 74,
        "end": 82
      },
      "directive": null,
      "start": 74,
      "end": 83
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e2",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 86
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 89,
            "end": 90
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "optional": false,
          "computed": false,
          "start": 89,
          "end": 92
        },
        "start": 84,
        "end": 92
      },
      "directive": null,
      "start": 84,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 95
        },
        "right": {
          "type": "TSTypeAssertion",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 99,
            "end": 103
          },
          "expression": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 104,
            "end": 108
          },
          "start": 98,
          "end": 108
        },
        "start": 94,
        "end": 108
      },
      "directive": null,
      "start": 94,
      "end": 109
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 110,
          "end": 111
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 114,
          "end": 116
        },
        "start": 110,
        "end": 116
      },
      "directive": null,
      "start": 110,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 119
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 122,
          "end": 124
        },
        "start": 118,
        "end": 124
      },
      "directive": null,
      "start": 118,
      "end": 125
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 137
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 139
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 138,
            "end": 139
          }
        ],
        "start": 137,
        "end": 140
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 145
              },
              "typeArguments": null,
              "start": 144,
              "end": 145
            },
            "start": 142,
            "end": 145
          },
          "start": 141,
          "end": 145
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 154
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 157,
                "end": 158
              },
              "start": 153,
              "end": 158
            },
            "directive": null,
            "start": 153,
            "end": 159
          }
        ],
        "start": 147,
        "end": 161
      },
      "expression": false,
      "start": 127,
      "end": 161
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 161
}
```
