__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 716,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 29,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 27,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "name": "p",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 61,
            "name": "strOrNum",
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
      "type": "VariableDeclaration",
      "start": 63,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 94,
            "name": "strOrBool",
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
      "type": "VariableDeclaration",
      "start": 96,
      "end": 127,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 127,
            "name": "numOrBool",
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
      "type": "VariableDeclaration",
      "start": 128,
      "end": 151,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 150,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 150,
            "name": "strOrC",
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
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
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
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 209,
            "end": 217,
            "name": "strOrNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "==",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 241,
                "end": 254,
                "id": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 243,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 254,
                  "name": "strOrNum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 292,
                "end": 305,
                "id": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 294,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 297,
                  "end": 305,
                  "name": "strOrNum",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
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
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 340,
            "end": 349,
            "name": "strOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "==",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 374,
                "end": 388,
                "id": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 376,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 388,
                  "name": "strOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 427,
                "end": 441,
                "id": {
                  "type": "Identifier",
                  "start": 427,
                  "end": 429,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 441,
                  "name": "strOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 466,
      "end": 601,
      "test": {
        "type": "BinaryExpression",
        "start": 470,
        "end": 498,
        "left": {
          "type": "UnaryExpression",
          "start": 470,
          "end": 486,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 477,
            "end": 486,
            "name": "numOrBool",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "==",
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 510,
                "end": 524,
                "id": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 512,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 524,
                  "name": "numOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 553,
        "end": 601,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 559,
            "end": 579,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 563,
                "end": 578,
                "id": {
                  "type": "Identifier",
                  "start": 563,
                  "end": 565,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 578,
                  "name": "numOrBool",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 603,
      "end": 716,
      "test": {
        "type": "BinaryExpression",
        "start": 607,
        "end": 632,
        "left": {
          "type": "UnaryExpression",
          "start": 607,
          "end": 620,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 614,
            "end": 620,
            "name": "strOrC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "start": 624,
          "end": 632,
          "value": "Object",
          "raw": "\"Object\""
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 634,
        "end": 672,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 640,
            "end": 656,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 644,
                "end": 655,
                "id": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 646,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 655,
                  "name": "strOrC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 678,
        "end": 716,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 684,
            "end": 700,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 688,
                "end": 699,
                "id": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 690,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 699,
                  "name": "strOrC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
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
