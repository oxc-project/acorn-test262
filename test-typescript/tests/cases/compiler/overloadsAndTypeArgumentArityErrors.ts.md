__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 418,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 49,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 26,
        "decorators": [],
        "name": "Callbacks",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 41,
          "decorators": [],
          "name": "flags",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 33,
            "end": 41,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 35,
              "end": 41
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 42,
        "end": 48,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 44,
          "end": 48
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 50,
      "end": 102,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 76,
        "decorators": [],
        "name": "Callbacks",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 80,
          "end": 94,
          "decorators": [],
          "name": "flags",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 86,
            "end": 94,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 88,
              "end": 94
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 95,
        "end": 101,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 97,
          "end": 101
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 103,
      "end": 160,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 120,
        "end": 129,
        "decorators": [],
        "name": "Callbacks",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 138,
          "end": 152,
          "decorators": [],
          "name": "flags",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 144,
            "end": 152,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 146,
              "end": 152
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 153,
        "end": 159,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 155,
          "end": 159
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 129,
        "end": 137,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 130,
            "end": 132,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 130,
              "end": 132,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 134,
            "end": 136,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 134,
              "end": 136,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 202,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 162,
        "end": 201,
        "arguments": [
          {
            "type": "Literal",
            "start": 197,
            "end": 200,
            "raw": "'s'",
            "value": "s"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 162,
          "end": 171,
          "decorators": [],
          "name": "Callbacks",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 171,
          "end": 196,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 172,
              "end": 178
            },
            {
              "type": "TSStringKeyword",
              "start": 180,
              "end": 186
            },
            {
              "type": "TSBooleanKeyword",
              "start": 188,
              "end": 195
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 237,
      "end": 281,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 237,
        "end": 280,
        "arguments": [
          {
            "type": "Literal",
            "start": 276,
            "end": 279,
            "raw": "'s'",
            "value": "s"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 241,
          "end": 250,
          "decorators": [],
          "name": "Callbacks",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 250,
          "end": 275,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 251,
              "end": 257
            },
            {
              "type": "TSStringKeyword",
              "start": 259,
              "end": 265
            },
            {
              "type": "TSBooleanKeyword",
              "start": 267,
              "end": 274
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 317,
      "end": 366,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 335,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 347,
          "end": 358,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 350,
            "end": 358,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 352,
              "end": 358
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 359,
        "end": 365,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 361,
          "end": 365
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 335,
        "end": 346,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 336,
            "end": 337,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 336,
              "end": 337,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 339,
            "end": 345,
            "const": false,
            "constraint": null,
            "default": {
              "type": "TSTypeLiteral",
              "start": 343,
              "end": 345,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 379,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 367,
        "end": 378,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 367,
          "end": 368,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 368,
          "end": 376,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 369,
              "end": 375
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
