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
      "id": {
        "type": "Identifier",
        "start": 260,
        "end": 261,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 268,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 269,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "value": 1,
            "raw": "1"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 279,
          "end": 284,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 280,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 283,
            "end": 284,
            "value": 2,
            "raw": "2"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 290,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 294,
            "end": 299,
            "left": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 298,
              "end": 299,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 305,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 306,
            "name": "D",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "BinaryExpression",
            "start": 309,
            "end": 314,
            "left": {
              "type": "Identifier",
              "start": 309,
              "end": 310,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "*",
            "right": {
              "type": "Literal",
              "start": 313,
              "end": 314,
              "value": 2,
              "raw": "2"
            }
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 262,
        "end": 316,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 268,
            "end": 273,
            "id": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 272,
              "end": 273,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 279,
            "end": 284,
            "id": {
              "type": "Identifier",
              "start": 279,
              "end": 280,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 283,
              "end": 284,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 290,
            "end": 299,
            "id": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 294,
              "end": 299,
              "left": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 305,
            "end": 314,
            "id": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 309,
              "end": 314,
              "left": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "Literal",
                "start": 313,
                "end": 314,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 404,
            "end": 405,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
            "name": "G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 417,
            "name": "z1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 420,
            "end": 426,
            "object": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "name": "G",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "MemberExpression",
              "start": 422,
              "end": 425,
              "object": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "name": "G",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 432,
            "end": 436,
            "name": "g",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 433,
              "end": 436,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 435,
                "end": 436,
                "typeName": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "name": "G",
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
      "start": 438,
      "end": 451,
      "expression": {
        "type": "AssignmentExpression",
        "start": 438,
        "end": 450,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 438,
          "end": 439,
          "name": "g",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 442,
          "end": 450,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 452,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 464,
        "name": "foo",
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
          "start": 465,
          "end": 469,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 466,
            "end": 469,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 468,
              "end": 469,
              "typeName": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "name": "G",
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
        "start": 471,
        "end": 474,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 475,
      "end": 483,
      "expression": {
        "type": "AssignmentExpression",
        "start": 475,
        "end": 482,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 475,
          "end": 478,
          "object": {
            "type": "Identifier",
            "start": 475,
            "end": 476,
            "name": "G",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 481,
          "end": 482,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
