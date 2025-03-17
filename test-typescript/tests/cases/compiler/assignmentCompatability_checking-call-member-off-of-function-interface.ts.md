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
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 54,
        "name": "Callable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 55,
        "end": 105,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 61,
            "end": 77,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 65,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 66,
                "end": 75,
                "name": "blah",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 72,
                    "end": 75
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 111,
            "end": 122,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 122,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 114,
                "end": 122,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 122,
                  "name": "Callable",
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
      "start": 140,
      "end": 147,
      "expression": {
        "type": "AssignmentExpression",
        "start": 140,
        "end": 146,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 140,
          "end": 141,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 144,
          "end": 146,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 148,
      "end": 157,
      "expression": {
        "type": "AssignmentExpression",
        "start": 148,
        "end": 156,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "value": "",
              "raw": "''"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 158,
      "end": 164,
      "expression": {
        "type": "AssignmentExpression",
        "start": 158,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 158,
          "end": 159,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 162,
          "end": 163,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 172,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 171,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 169,
          "end": 171,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 189,
      "end": 205,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 202,
        "end": 205,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "expression": {
        "type": "AssignmentExpression",
        "start": 207,
        "end": 212,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 207,
          "end": 208,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 215,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 224,
        "end": 226,
        "name": "fn",
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
          "start": 227,
          "end": 238,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 228,
            "end": 238,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 230,
              "end": 238,
              "typeName": {
                "type": "Identifier",
                "start": 230,
                "end": 238,
                "name": "Callable",
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
        "start": 240,
        "end": 243,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 260,
      "end": 267,
      "expression": {
        "type": "CallExpression",
        "start": 260,
        "end": 266,
        "callee": {
          "type": "Identifier",
          "start": 260,
          "end": 262,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 263,
            "end": 265,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 277,
      "expression": {
        "type": "CallExpression",
        "start": 268,
        "end": 276,
        "callee": {
          "type": "Identifier",
          "start": 268,
          "end": 270,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": "",
                "raw": "''"
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 278,
      "end": 284,
      "expression": {
        "type": "CallExpression",
        "start": 278,
        "end": 283,
        "callee": {
          "type": "Identifier",
          "start": 278,
          "end": 280,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 281,
            "end": 282,
            "value": 4,
            "raw": "4"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 292,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 291,
        "callee": {
          "type": "Identifier",
          "start": 285,
          "end": 287,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 288,
            "end": 290,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 310,
      "end": 323,
      "expression": {
        "type": "CallExpression",
        "start": 310,
        "end": 322,
        "callee": {
          "type": "Identifier",
          "start": 310,
          "end": 312,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 313,
            "end": 321,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 313,
                "end": 314,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 318,
              "end": 321,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
