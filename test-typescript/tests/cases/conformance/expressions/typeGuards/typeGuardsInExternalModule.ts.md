__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 175,
  "end": 603,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 190,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 184,
                "end": 190
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
      "type": "VariableDeclaration",
      "start": 192,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 196,
            "end": 217,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 217,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 202,
                "end": 217,
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
                ]
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
      "type": "IfStatement",
      "start": 219,
      "end": 320,
      "alternate": {
        "type": "BlockStatement",
        "start": 291,
        "end": 320,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 297,
            "end": 308,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 297,
              "end": 307,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 297,
                "end": 300,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 303,
                "end": 307,
                "decorators": [],
                "name": "var1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 249,
        "end": 285,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 255,
            "end": 273,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 255,
              "end": 272,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 255,
                "end": 258,
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 261,
                "end": 272,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 265,
                  "decorators": [],
                  "name": "var1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 272,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 223,
        "end": 247,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 223,
          "end": 234,
          "argument": {
            "type": "Identifier",
            "start": 230,
            "end": 234,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 239,
          "end": 247,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 362,
      "end": 392,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 366,
          "end": 391,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 366,
            "end": 391,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 374,
              "end": 391,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 376,
                "end": 391,
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
                ]
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
      "type": "ExportNamedDeclaration",
      "start": 393,
      "end": 426,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 400,
        "end": 426,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 404,
            "end": 425,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 404,
              "end": 425,
              "decorators": [],
              "name": "var2",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 408,
                "end": 425,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 410,
                  "end": 425,
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
                  ]
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "IfStatement",
      "start": 427,
      "end": 603,
      "alternate": {
        "type": "BlockStatement",
        "start": 560,
        "end": 603,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 566,
            "end": 582,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 566,
              "end": 581,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 566,
                "end": 574,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 577,
                "end": 581,
                "decorators": [],
                "name": "var2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 457,
        "end": 554,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 517,
            "end": 533,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 517,
              "end": 532,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 517,
                "end": 525,
                "decorators": [],
                "name": "strOrNum",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 528,
                "end": 532,
                "decorators": [],
                "name": "var2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 431,
        "end": 455,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 431,
          "end": 442,
          "argument": {
            "type": "Identifier",
            "start": 438,
            "end": 442,
            "decorators": [],
            "name": "var2",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 447,
          "end": 455,
          "raw": "\"string\"",
          "value": "string"
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
