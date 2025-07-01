__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "initializer": null,
            "computed": false,
            "start": 13,
            "end": 14
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "initializer": null,
            "computed": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "initializer": null,
            "computed": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 7,
        "end": 22
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 36
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 43,
              "end": 44
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 47,
                "end": 48
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 52,
                "end": 53
              },
              "start": 47,
              "end": 53
            },
            "computed": false,
            "start": 43,
            "end": 53
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 60
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 63,
                "end": 64
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 68,
                "end": 69
              },
              "start": 63,
              "end": 69
            },
            "computed": false,
            "start": 59,
            "end": 69
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 76
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 79,
                "end": 80
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 84,
                "end": 85
              },
              "start": 79,
              "end": 85
            },
            "computed": false,
            "start": 75,
            "end": 85
          }
        ],
        "start": 37,
        "end": 88
      },
      "const": false,
      "declare": false,
      "start": 23,
      "end": 88
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
              },
              "start": 94,
              "end": 102
            },
            "start": 93,
            "end": 102
          },
          "init": null,
          "definite": false,
          "start": 93,
          "end": 102
        }
      ],
      "declare": false,
      "start": 89,
      "end": 103
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 111,
                  "end": 112
                },
                "typeArguments": null,
                "start": 111,
                "end": 112
              },
              "start": 109,
              "end": 112
            },
            "start": 108,
            "end": 112
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 116
          },
          "definite": false,
          "start": 108,
          "end": 116
        }
      ],
      "declare": false,
      "start": 104,
      "end": 117
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 164,
          "end": 165
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 168,
          "end": 169
        },
        "start": 164,
        "end": 169
      },
      "directive": null,
      "start": 164,
      "end": 170
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 188
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 191,
          "end": 192
        },
        "start": 187,
        "end": 192
      },
      "directive": null,
      "start": 187,
      "end": 193
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 275
                  },
                  "start": 272,
                  "end": 275
                },
                "typeArguments": null,
                "start": 272,
                "end": 275
              },
              "start": 270,
              "end": 275
            },
            "start": 269,
            "end": 275
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 278,
            "end": 279
          },
          "definite": false,
          "start": 269,
          "end": 279
        }
      ],
      "declare": false,
      "start": 265,
      "end": 280
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 296,
          "end": 297
        },
        "right": {
          "type": "Literal",
          "value": 2,
          "raw": "2",
          "start": 300,
          "end": 301
        },
        "start": 296,
        "end": 301
      },
      "directive": null,
      "start": 296,
      "end": 302
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 322
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 326
        },
        "start": 321,
        "end": 326
      },
      "directive": null,
      "start": 321,
      "end": 327
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Computed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 342,
                  "end": 350
                },
                "typeArguments": null,
                "start": 342,
                "end": 350
              },
              "start": 340,
              "end": 350
            },
            "start": 339,
            "end": 350
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 353,
            "end": 354
          },
          "definite": false,
          "start": 339,
          "end": 354
        }
      ],
      "declare": false,
      "start": 335,
      "end": 355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 362,
          "end": 363
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 367
        },
        "start": 362,
        "end": 367
      },
      "directive": null,
      "start": 362,
      "end": 368
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 375,
          "end": 376
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 379,
          "end": 380
        },
        "start": 375,
        "end": 380
      },
      "directive": null,
      "start": 375,
      "end": 381
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
            "name": "ca",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Computed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 396,
                    "end": 404
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 405,
                    "end": 406
                  },
                  "start": 396,
                  "end": 406
                },
                "typeArguments": null,
                "start": 396,
                "end": 406
              },
              "start": 394,
              "end": 406
            },
            "start": 392,
            "end": 406
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 409,
            "end": 410
          },
          "definite": false,
          "start": 392,
          "end": 410
        }
      ],
      "declare": false,
      "start": 388,
      "end": 411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 494
}
```
