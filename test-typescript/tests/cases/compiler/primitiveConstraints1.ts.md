__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 177,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 45,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 45,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 34,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 34,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 33,
              "end": 34,
              "typeName": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 40,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 37,
            "end": 40,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 39,
              "end": 40,
              "typeName": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 25,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 25,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 75,
        "arguments": [
          {
            "type": "Literal",
            "start": 67,
            "end": 71,
            "raw": "'hm'",
            "value": "hm"
          },
          {
            "type": "Literal",
            "start": 73,
            "end": 74,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 50,
          "decorators": [],
          "name": "foo1",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 50,
          "end": 66,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 51,
              "end": 57
            },
            {
              "type": "TSNumberKeyword",
              "start": 59,
              "end": 65
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 136,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 136,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 104,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 121,
          "end": 125,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 122,
            "end": 125,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 124,
              "end": 125,
              "typeName": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 127,
          "end": 131,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 128,
            "end": 131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 130,
              "end": 131,
              "typeName": {
                "type": "Identifier",
                "start": 130,
                "end": 131,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 104,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 106,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 119,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 167,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 166,
        "arguments": [
          {
            "type": "Literal",
            "start": 158,
            "end": 159,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 161,
            "end": 165,
            "raw": "'hm'",
            "value": "hm"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 141,
          "end": 157,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 142,
              "end": 148
            },
            {
              "type": "TSStringKeyword",
              "start": 150,
              "end": 156
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
