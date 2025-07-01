__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Zet",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 51
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 52,
          "end": 53
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 82,
                "end": 86
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 87,
                "end": 88
              },
              "optional": false,
              "computed": false,
              "start": 82,
              "end": 88
            },
            "directive": null,
            "start": 82,
            "end": 88
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 93,
                  "end": 97
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 99
                },
                "optional": false,
                "computed": false,
                "start": 93,
                "end": 99
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 103
              },
              "start": 93,
              "end": 103
            },
            "directive": null,
            "start": 93,
            "end": 103
          }
        ],
        "start": 55,
        "end": 105
      },
      "expression": false,
      "start": 39,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 177
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 187
            },
            "optional": false,
            "computed": false,
            "start": 174,
            "end": 187
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 191
          },
          "optional": false,
          "computed": false,
          "start": 174,
          "end": 191
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 204
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": null,
              "start": 206,
              "end": 207
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 215,
                      "end": 219
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 221
                    },
                    "optional": false,
                    "computed": false,
                    "start": 215,
                    "end": 221
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 225
                    },
                    "operator": "||",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 230
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nested",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 231,
                        "end": 237
                      },
                      "optional": false,
                      "computed": false,
                      "start": 229,
                      "end": 237
                    },
                    "start": 224,
                    "end": 237
                  },
                  "start": 215,
                  "end": 237
                },
                "directive": null,
                "start": 215,
                "end": 237
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 249,
                    "end": 253
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 254,
                    "end": 255
                  },
                  "optional": false,
                  "computed": false,
                  "start": 249,
                  "end": 255
                },
                "start": 242,
                "end": 255
              }
            ],
            "start": 209,
            "end": 257
          },
          "expression": false,
          "start": 194,
          "end": 257
        },
        "start": 174,
        "end": 257
      },
      "directive": null,
      "start": 174,
      "end": 257
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 262,
            "end": 263
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 273
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 274,
                "end": 275
              }
            ],
            "start": 266,
            "end": 276
          },
          "definite": false,
          "start": 262,
          "end": 276
        }
      ],
      "declare": false,
      "start": 258,
      "end": 276
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 278
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 280
          },
          "optional": false,
          "computed": false,
          "start": 277,
          "end": 280
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 283,
          "end": 284
        },
        "start": 277,
        "end": 284
      },
      "directive": null,
      "start": 277,
      "end": 284
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 285,
            "end": 286
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          "optional": false,
          "computed": false,
          "start": 285,
          "end": 288
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 291,
          "end": 296
        },
        "start": 285,
        "end": 296
      },
      "directive": null,
      "start": 285,
      "end": 296
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "answer",
            "optional": false,
            "typeAnnotation": null,
            "start": 323,
            "end": 329
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "add",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 337
              },
              "optional": false,
              "computed": false,
              "start": 332,
              "end": 337
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 338,
                "end": 339
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 349
                    },
                    "value": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 351,
                      "end": 352
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 343,
                    "end": 352
                  }
                ],
                "start": 341,
                "end": 354
              }
            ],
            "optional": false,
            "start": 332,
            "end": 355
          },
          "definite": false,
          "start": 323,
          "end": 355
        }
      ],
      "declare": false,
      "start": 319,
      "end": 355
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 523
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 528,
                  "end": 533
                },
                "value": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 535,
                  "end": 539
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 528,
                "end": 539
              }
            ],
            "start": 526,
            "end": 541
          },
          "definite": false,
          "start": 516,
          "end": 541
        }
      ],
      "declare": false,
      "start": 510,
      "end": 542
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 542
}
```
