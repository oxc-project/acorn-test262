__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 249,
  "end": 484,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 249,
      "end": 316,
      "body": {
        "type": "TSEnumBody",
        "start": 262,
        "end": 316,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 268,
            "end": 273,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 272,
              "end": 273,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "TSEnumMember",
            "start": 279,
            "end": 284,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 283,
              "end": 284,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "TSEnumMember",
            "start": 290,
            "end": 299,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 294,
              "end": 299,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 305,
            "end": 314,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 309,
              "end": 314,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 400,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 404,
          "end": 409,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
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
      "start": 411,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 426,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 417,
            "decorators": [],
            "name": "z1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 420,
            "end": 426,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 422,
              "end": 425,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
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
      "start": 428,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 432,
          "end": 436,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 436,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 436,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 435,
                "end": 436,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
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
      "start": 438,
      "end": 451,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 438,
        "end": 450,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 438,
          "end": 439,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 442,
          "end": 450,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 452,
      "end": 474,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 471,
        "end": 474,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 464,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 465,
          "end": 469,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 466,
            "end": 469,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 468,
              "end": 469,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
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
      "start": 475,
      "end": 483,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 475,
        "end": 482,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 475,
          "end": 478,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 475,
            "end": 476,
            "decorators": [],
            "name": "G",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 481,
          "end": 482,
          "raw": "3",
          "value": 3
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
