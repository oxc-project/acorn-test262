__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 715,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 27,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 29,
      "end": 30
    },
    {
      "type": "VariableDeclaration",
      "start": 32,
      "end": 62,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 61,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 61,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 46,
                "end": 61,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 46,
                    "end": 52
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 55,
                    "end": 61
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 95,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 94,
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 94,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 78,
                "end": 94,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 78,
                    "end": 84
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 87,
                    "end": 94
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 127,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 127,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 127,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 111,
                "end": 127,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 111,
                    "end": 117
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 120,
                    "end": 127
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 151,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 150,
            "decorators": [],
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 138,
              "end": 150,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 140,
                "end": 150,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 140,
                    "end": 146
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 149,
                    "end": 150,
                    "typeName": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 150,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 198,
      "end": 327,
      "test": {
        "type": "BinaryExpression",
        "start": 202,
        "end": 229,
        "left": {
          "type": "UnaryExpression",
          "start": 202,
          "end": 217,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 209,
            "end": 217,
            "decorators": [],
            "name": "strOrNum",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "start": 221,
          "end": 229,
          "value": "string",
          "raw": "\"string\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 231,
        "end": 276,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 237,
            "end": 255,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 241,
                "end": 254,
                "id": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 243,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 254,
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 282,
        "end": 327,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 288,
            "end": 306,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 292,
                "end": 305,
                "id": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 294,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 305,
                  "decorators": [],
                  "name": "strOrNum",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 329,
      "end": 464,
      "test": {
        "type": "BinaryExpression",
        "start": 333,
        "end": 362,
        "left": {
          "type": "UnaryExpression",
          "start": 333,
          "end": 349,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 340,
            "end": 349,
            "decorators": [],
            "name": "strOrBool",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "start": 353,
          "end": 362,
          "value": "boolean",
          "raw": "\"boolean\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 364,
        "end": 411,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 370,
            "end": 389,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 374,
                "end": 388,
                "id": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 376,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 388,
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 417,
        "end": 464,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 423,
            "end": 442,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 427,
                "end": 441,
                "id": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 429,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 441,
                  "decorators": [],
                  "name": "strOrBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 466,
      "end": 600,
      "test": {
        "type": "BinaryExpression",
        "start": 470,
        "end": 498,
        "left": {
          "type": "UnaryExpression",
          "start": 470,
          "end": 486,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 477,
            "end": 486,
            "decorators": [],
            "name": "numOrBool",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "start": 490,
          "end": 498,
          "value": "number",
          "raw": "\"number\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 500,
        "end": 547,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 506,
            "end": 525,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 510,
                "end": 524,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 512,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 524,
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 553,
        "end": 600,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 559,
            "end": 578,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 563,
                "end": 577,
                "id": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 565,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 577,
                  "decorators": [],
                  "name": "numOrBool",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 602,
      "end": 715,
      "test": {
        "type": "BinaryExpression",
        "start": 606,
        "end": 631,
        "left": {
          "type": "UnaryExpression",
          "start": 606,
          "end": 619,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 613,
            "end": 619,
            "decorators": [],
            "name": "strOrC",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "!=",
        "right": {
          "type": "Literal",
          "start": 623,
          "end": 631,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 633,
        "end": 671,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 639,
            "end": 655,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 643,
                "end": 654,
                "id": {
                  "type": "Identifier",
                  "start": 643,
                  "end": 645,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 648,
                  "end": 654,
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 677,
        "end": 715,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 683,
            "end": 699,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 687,
                "end": 698,
                "id": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 689,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 692,
                  "end": 698,
                  "decorators": [],
                  "name": "strOrC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
