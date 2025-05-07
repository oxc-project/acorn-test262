__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 225,
  "end": 459,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 225,
      "end": 292,
      "body": {
        "type": "TSEnumBody",
        "start": 238,
        "end": 292,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 244,
            "end": 249,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 248,
              "end": 249,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 255,
            "end": 260,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 255,
              "end": 256,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 259,
              "end": 260,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 266,
            "end": 275,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 270,
              "end": 275,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 281,
            "end": 290,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 281,
              "end": 282,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 285,
              "end": 290,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 289,
                "end": 290,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 237,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 376,
      "end": 386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 385,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 381,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 384,
            "end": 385,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 387,
      "end": 403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 402,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 393,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 396,
            "end": 402,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 398,
              "end": 401,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 398,
                "end": 399,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 400,
                "end": 401,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 412,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 412,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 412,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 411,
                "end": 412,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 412,
                  "decorators": [],
                  "name": "G",
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
      "start": 414,
      "end": 427,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 414,
        "end": 426,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 414,
          "end": 415,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 418,
          "end": 426,
          "raw": "\"string\"",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 428,
      "end": 450,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 447,
        "end": 450,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 437,
        "end": 440,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 441,
          "end": 445,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 442,
            "end": 445,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 444,
              "end": 445,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "decorators": [],
                "name": "G",
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
      "start": 451,
      "end": 459,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 451,
        "end": 458,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 451,
          "end": 454,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 451,
            "end": 452,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 453,
            "end": 454,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 457,
          "end": 458,
          "raw": "3",
          "value": 3,
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
