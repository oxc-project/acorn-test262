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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo1",
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
          "start": 30,
          "end": 34,
          "name": "t",
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
        },
        {
          "type": "Identifier",
          "start": 36,
          "end": 40,
          "name": "u",
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
                "name": "U",
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
        "start": 42,
        "end": 45,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 25,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 25,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 25,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 27,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "name": "U",
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
    },
    {
      "type": "ExpressionStatement",
      "start": 46,
      "end": 76,
      "expression": {
        "type": "CallExpression",
        "start": 46,
        "end": 75,
        "callee": {
          "type": "Identifier",
          "start": 46,
          "end": 50,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 67,
            "end": 71,
            "value": "hm",
            "raw": "'hm'"
          },
          {
            "type": "Literal",
            "start": 73,
            "end": 74,
            "value": 1,
            "raw": "1"
          }
        ],
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
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 104,
        "name": "foo2",
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
          "start": 121,
          "end": 125,
          "name": "t",
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
        },
        {
          "type": "Identifier",
          "start": 127,
          "end": 131,
          "name": "u",
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
                "name": "U",
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
        "start": 133,
        "end": 136,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 104,
        "end": 120,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 106,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 108,
            "end": 119,
            "name": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 118,
              "end": 119,
              "typeName": {
                "type": "Identifier",
                "start": 118,
                "end": 119,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 167,
      "expression": {
        "type": "CallExpression",
        "start": 137,
        "end": 166,
        "callee": {
          "type": "Identifier",
          "start": 137,
          "end": 141,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 158,
            "end": 159,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 161,
            "end": 165,
            "value": "hm",
            "raw": "'hm'"
          }
        ],
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
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
