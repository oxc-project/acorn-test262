__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 331,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 56,
        "name": "Applicable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 108,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 63,
            "end": 80,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 68,
              "name": "apply",
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
                "start": 69,
                "end": 78,
                "name": "blah",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 73,
                  "end": 78,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 75,
                    "end": 78
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
      "start": 110,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 127,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 127,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 127,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 127,
                  "name": "Applicable",
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
      "start": 145,
      "end": 152,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 151,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 145,
          "end": 146,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 149,
          "end": 151,
          "value": "",
          "raw": "''"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 162,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 161,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 153,
          "end": 154,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 157,
          "end": 161,
          "elements": [
            {
              "type": "Literal",
              "start": 158,
              "end": 160,
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
      "start": 163,
      "end": 169,
      "expression": {
        "type": "AssignmentExpression",
        "start": 163,
        "end": 168,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 167,
          "end": 168,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 170,
      "end": 177,
      "expression": {
        "type": "AssignmentExpression",
        "start": 170,
        "end": 176,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 170,
          "end": 171,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 174,
          "end": 176,
          "properties": []
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 194,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 204,
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
        "start": 207,
        "end": 210,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 210,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 218,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 217,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 213,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 216,
          "end": 217,
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
      "start": 220,
      "end": 250,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 231,
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
          "start": 232,
          "end": 245,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 233,
            "end": 245,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 235,
              "end": 245,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 245,
                "name": "Applicable",
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
        "start": 247,
        "end": 250,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 267,
      "end": 274,
      "expression": {
        "type": "CallExpression",
        "start": 267,
        "end": 273,
        "callee": {
          "type": "Identifier",
          "start": 267,
          "end": 269,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 270,
            "end": 272,
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
      "start": 275,
      "end": 284,
      "expression": {
        "type": "CallExpression",
        "start": 275,
        "end": 283,
        "callee": {
          "type": "Identifier",
          "start": 275,
          "end": 277,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 278,
            "end": 282,
            "elements": [
              {
                "type": "Literal",
                "start": 279,
                "end": 281,
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
      "start": 285,
      "end": 291,
      "expression": {
        "type": "CallExpression",
        "start": 285,
        "end": 290,
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
            "type": "Literal",
            "start": 288,
            "end": 289,
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
      "start": 292,
      "end": 299,
      "expression": {
        "type": "CallExpression",
        "start": 292,
        "end": 298,
        "callee": {
          "type": "Identifier",
          "start": 292,
          "end": 294,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 295,
            "end": 297,
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
      "start": 317,
      "end": 330,
      "expression": {
        "type": "CallExpression",
        "start": 317,
        "end": 329,
        "callee": {
          "type": "Identifier",
          "start": 317,
          "end": 319,
          "name": "fn",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 320,
            "end": 328,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 320,
                "end": 321,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 325,
              "end": 328,
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
