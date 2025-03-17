__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 324,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 105,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 105,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 61,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "decorators": [],
              "name": "call",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 66,
                "end": 75,
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 72,
                    "end": 75
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": null,
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 54,
        "decorators": [],
        "name": "Callable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 107,
      "end": 123,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 111,
          "end": 122,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 122,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 122,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 122,
                  "decorators": [],
                  "name": "Callable",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 140,
      "end": 147,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 140,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 144,
          "end": 146,
          "raw": "''",
          "value": ""
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 157,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 156,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 152,
          "end": 156,
          "elements": [
            {
              "type": "Literal",
              "start": 153,
              "end": 155,
              "raw": "''",
              "value": ""
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 164,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 158,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 163,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 172,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 171,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 169,
          "end": 171,
          "properties": []
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 205,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 205,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 205,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "start": 207,
      "end": 213,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 207,
        "end": 212,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 215,
      "end": 243,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 243,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 227,
          "end": 238,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 228,
            "end": 238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 230,
              "end": 238,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 230,
                "end": 238,
                "decorators": [],
                "name": "Callable",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 267,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 266,
        "arguments": [
          {
            "type": "Literal",
            "start": 263,
            "end": 265,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 260,
          "end": 262,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 277,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 268,
        "end": 276,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 271,
            "end": 275,
            "elements": [
              {
                "type": "Literal",
                "start": 272,
                "end": 274,
                "raw": "''",
                "value": ""
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 268,
          "end": 270,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 284,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 278,
        "end": 283,
        "arguments": [
          {
            "type": "Literal",
            "start": 281,
            "end": 282,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 278,
          "end": 280,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 292,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 291,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 288,
            "end": 290,
            "properties": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 285,
          "end": 287,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 310,
      "end": 323,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 310,
        "end": 322,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 313,
            "end": 321,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 318,
              "end": 321,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 313,
                "end": 314,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 310,
          "end": 312,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
