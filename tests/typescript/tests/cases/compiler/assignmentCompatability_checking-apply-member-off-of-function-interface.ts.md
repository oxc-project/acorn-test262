__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Applicable",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 56
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "apply",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 68
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "blah",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 75,
                    "end": 78
                  },
                  "start": 73,
                  "end": 78
                },
                "start": 69,
                "end": 78
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 63,
            "end": 80
          }
        ],
        "start": 57,
        "end": 108
      },
      "declare": false,
      "start": 36,
      "end": 108
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Applicable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 127
                },
                "typeArguments": null,
                "start": 117,
                "end": 127
              },
              "start": 115,
              "end": 127
            },
            "start": 114,
            "end": 127
          },
          "init": null,
          "definite": false,
          "start": 114,
          "end": 127
        }
      ],
      "declare": false,
      "start": 110,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 146
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "''",
          "start": 149,
          "end": 151
        },
        "start": 145,
        "end": 151
      },
      "directive": null,
      "start": 145,
      "end": 152
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 153,
          "end": 154
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 158,
              "end": 160
            }
          ],
          "start": 157,
          "end": 161
        },
        "start": 153,
        "end": 161
      },
      "directive": null,
      "start": 153,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 167,
          "end": 168
        },
        "start": 163,
        "end": 168
      },
      "directive": null,
      "start": 163,
      "end": 169
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 170,
          "end": 171
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 174,
          "end": 176
        },
        "start": 170,
        "end": 176
      },
      "directive": null,
      "start": 170,
      "end": 177
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 203,
        "end": 204
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 207,
        "end": 210
      },
      "expression": false,
      "start": 194,
      "end": 210
    },
    {
      "type": "EmptyStatement",
      "start": 210,
      "end": 211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 212,
          "end": 213
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 216,
          "end": 217
        },
        "start": 212,
        "end": 217
      },
      "directive": null,
      "start": 212,
      "end": 218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 231
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Applicable",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 245
              },
              "typeArguments": null,
              "start": 235,
              "end": 245
            },
            "start": 233,
            "end": 245
          },
          "start": 232,
          "end": 245
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 247,
        "end": 250
      },
      "expression": false,
      "start": 220,
      "end": 250
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 267,
          "end": 269
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 270,
            "end": 272
          }
        ],
        "optional": false,
        "start": 267,
        "end": 273
      },
      "directive": null,
      "start": 267,
      "end": 274
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 275,
          "end": 277
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 279,
                "end": 281
              }
            ],
            "start": 278,
            "end": 282
          }
        ],
        "optional": false,
        "start": 275,
        "end": 283
      },
      "directive": null,
      "start": 275,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 285,
          "end": 287
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 288,
            "end": 289
          }
        ],
        "optional": false,
        "start": 285,
        "end": 290
      },
      "directive": null,
      "start": 285,
      "end": 291
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 292,
          "end": 294
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 295,
            "end": 297
          }
        ],
        "optional": false,
        "start": 292,
        "end": 298
      },
      "directive": null,
      "start": 292,
      "end": 299
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 317,
          "end": 319
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 325,
              "end": 328
            },
            "id": null,
            "generator": false,
            "start": 320,
            "end": 328
          }
        ],
        "optional": false,
        "start": 317,
        "end": 329
      },
      "directive": null,
      "start": 317,
      "end": 330
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 36,
  "end": 330
}
```
