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
        "name": "Enum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "None",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 16
            },
            "initializer": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 19,
              "end": 20
            },
            "computed": false,
            "start": 12,
            "end": 20
          }
        ],
        "start": 10,
        "end": 22
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 22
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
            "name": "enumType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Enum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 41
                },
                "typeArguments": null,
                "start": 37,
                "end": 41
              },
              "start": 35,
              "end": 41
            },
            "start": 27,
            "end": 41
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Enum",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "None",
              "optional": false,
              "typeAnnotation": null,
              "start": 49,
              "end": 53
            },
            "optional": false,
            "computed": false,
            "start": 44,
            "end": 53
          },
          "definite": false,
          "start": 27,
          "end": 53
        }
      ],
      "declare": false,
      "start": 23,
      "end": 54
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
            "name": "numberType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
              },
              "start": 69,
              "end": 77
            },
            "start": 59,
            "end": 77
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 80,
            "end": 81
          },
          "definite": false,
          "start": 59,
          "end": 81
        }
      ],
      "declare": false,
      "start": 55,
      "end": 82
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
            "name": "anyType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              },
              "start": 94,
              "end": 99
            },
            "start": 87,
            "end": 99
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 102,
            "end": 103
          },
          "definite": false,
          "start": 87,
          "end": 103
        }
      ],
      "declare": false,
      "start": 83,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 107,
          "end": 115
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberType",
          "optional": false,
          "typeAnnotation": null,
          "start": 118,
          "end": 128
        },
        "start": 107,
        "end": 128
      },
      "directive": null,
      "start": 107,
      "end": 129
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberType",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 140
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 150
        },
        "start": 130,
        "end": 150
      },
      "directive": null,
      "start": 130,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 154,
          "end": 162
        },
        "operator": "&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 172
        },
        "start": 154,
        "end": 172
      },
      "directive": null,
      "start": 154,
      "end": 173
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 182
        },
        "operator": "|",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 185,
          "end": 192
        },
        "start": 174,
        "end": 192
      },
      "directive": null,
      "start": 174,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 194,
          "end": 202
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 205,
          "end": 212
        },
        "start": 194,
        "end": 212
      },
      "directive": null,
      "start": 194,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 215,
          "end": 222
        },
        "prefix": true,
        "start": 214,
        "end": 222
      },
      "directive": null,
      "start": 214,
      "end": 223
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 224,
          "end": 232
        },
        "operator": "<<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 235,
          "end": 242
        },
        "start": 224,
        "end": 242
      },
      "directive": null,
      "start": 224,
      "end": 243
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 244,
          "end": 252
        },
        "operator": ">>",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 255,
          "end": 262
        },
        "start": 244,
        "end": 262
      },
      "directive": null,
      "start": 244,
      "end": 263
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "enumType",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 272
        },
        "operator": ">>>",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyType",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
          "end": 283
        },
        "start": 264,
        "end": 283
      },
      "directive": null,
      "start": 264,
      "end": 284
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 284
}
```
