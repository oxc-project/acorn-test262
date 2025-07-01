__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 184,
                "end": 190
              },
              "start": 182,
              "end": 190
            },
            "start": 179,
            "end": 190
          },
          "init": null,
          "definite": false,
          "start": 179,
          "end": 190
        }
      ],
      "declare": false,
      "start": 175,
      "end": 191
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
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 202,
                    "end": 208
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 211,
                    "end": 217
                  }
                ],
                "start": 202,
                "end": 217
              },
              "start": 200,
              "end": 217
            },
            "start": 196,
            "end": 217
          },
          "init": null,
          "definite": false,
          "start": 196,
          "end": 217
        }
      ],
      "declare": false,
      "start": 192,
      "end": 218
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 234
          },
          "prefix": true,
          "start": 223,
          "end": 234
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 239,
          "end": 247
        },
        "start": 223,
        "end": 247
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 255,
                "end": 258
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "var1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 261,
                  "end": 265
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 272
                },
                "optional": false,
                "computed": false,
                "start": 261,
                "end": 272
              },
              "start": 255,
              "end": 272
            },
            "directive": null,
            "start": 255,
            "end": 273
          }
        ],
        "start": 249,
        "end": 285
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 300
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null,
                "start": 303,
                "end": 307
              },
              "start": 297,
              "end": 307
            },
            "directive": null,
            "start": 297,
            "end": 308
          }
        ],
        "start": 291,
        "end": 320
      },
      "start": 219,
      "end": 320
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
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 376,
                    "end": 382
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 385,
                    "end": 391
                  }
                ],
                "start": 376,
                "end": 391
              },
              "start": 374,
              "end": 391
            },
            "start": 366,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 366,
          "end": 391
        }
      ],
      "declare": false,
      "start": 362,
      "end": 392
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 410,
                      "end": 416
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 419,
                      "end": 425
                    }
                  ],
                  "start": 410,
                  "end": 425
                },
                "start": 408,
                "end": 425
              },
              "start": 404,
              "end": 425
            },
            "init": null,
            "definite": false,
            "start": 404,
            "end": 425
          }
        ],
        "declare": false,
        "start": 400,
        "end": 426
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 393,
      "end": 426
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 442
          },
          "prefix": true,
          "start": 431,
          "end": 442
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 447,
          "end": 455
        },
        "start": 431,
        "end": 455
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 517,
                "end": 525
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var2",
                "optional": false,
                "typeAnnotation": null,
                "start": 528,
                "end": 532
              },
              "start": 517,
              "end": 532
            },
            "directive": null,
            "start": 517,
            "end": 533
          }
        ],
        "start": 457,
        "end": 554
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 574
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "var2",
                "optional": false,
                "typeAnnotation": null,
                "start": 577,
                "end": 581
              },
              "start": 566,
              "end": 581
            },
            "directive": null,
            "start": 566,
            "end": 582
          }
        ],
        "start": 560,
        "end": 603
      },
      "start": 427,
      "end": 603
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 175,
  "end": 603
}
```
