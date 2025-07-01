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
        "start": 100,
        "end": 103
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
          "start": 104,
          "end": 105
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
                "start": 134,
                "end": 138
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 140
              },
              "optional": false,
              "computed": false,
              "start": 134,
              "end": 140
            },
            "directive": null,
            "start": 134,
            "end": 140
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
                  "start": 145,
                  "end": 149
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 150,
                  "end": 151
                },
                "optional": false,
                "computed": false,
                "start": 145,
                "end": 151
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 154,
                "end": 155
              },
              "start": 145,
              "end": 155
            },
            "directive": null,
            "start": 145,
            "end": 155
          }
        ],
        "start": 107,
        "end": 157
      },
      "expression": false,
      "start": 91,
      "end": 157
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
              "start": 203,
              "end": 206
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 216
            },
            "optional": false,
            "computed": false,
            "start": 203,
            "end": 216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "add",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "optional": false,
          "computed": false,
          "start": 203,
          "end": 220
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
              "start": 232,
              "end": 233
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 235,
              "end": 237
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
                      "start": 245,
                      "end": 249
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 250,
                      "end": 251
                    },
                    "optional": false,
                    "computed": false,
                    "start": 245,
                    "end": 251
                  },
                  "right": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 255
                    },
                    "operator": "||",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 259,
                        "end": 263
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 264,
                        "end": 265
                      },
                      "optional": false,
                      "computed": false,
                      "start": 259,
                      "end": 265
                    },
                    "start": 254,
                    "end": 265
                  },
                  "start": 245,
                  "end": 265
                },
                "directive": null,
                "start": 245,
                "end": 265
              },
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 277,
                    "end": 279
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 280,
                        "end": 284
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 285,
                        "end": 286
                      },
                      "optional": false,
                      "computed": false,
                      "start": 280,
                      "end": 286
                    }
                  ],
                  "optional": false,
                  "start": 277,
                  "end": 287
                },
                "start": 270,
                "end": 287
              }
            ],
            "start": 239,
            "end": 289
          },
          "expression": false,
          "start": 223,
          "end": 289
        },
        "start": 203,
        "end": 289
      },
      "directive": null,
      "start": 203,
      "end": 289
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
            "start": 294,
            "end": 295
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Zet",
              "optional": false,
              "typeAnnotation": null,
              "start": 302,
              "end": 305
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 306,
                "end": 307
              }
            ],
            "start": 298,
            "end": 308
          },
          "definite": false,
          "start": 294,
          "end": 308
        }
      ],
      "declare": false,
      "start": 290,
      "end": 308
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
            "start": 309,
            "end": 310
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 312
          },
          "optional": false,
          "computed": false,
          "start": 309,
          "end": 312
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 315,
          "end": 316
        },
        "start": 309,
        "end": 316
      },
      "directive": null,
      "start": 309,
      "end": 316
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
            "start": 317,
            "end": 318
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 319,
            "end": 320
          },
          "optional": false,
          "computed": false,
          "start": 317,
          "end": 320
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 323,
          "end": 328
        },
        "start": 317,
        "end": 328
      },
      "directive": null,
      "start": 317,
      "end": 328
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 91,
  "end": 328
}
```
