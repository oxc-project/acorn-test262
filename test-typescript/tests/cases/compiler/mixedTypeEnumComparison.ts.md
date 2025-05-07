__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 509,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 77,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 77,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 29,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "S1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 24,
              "end": 29,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 45,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 40,
              "end": 45,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 52,
            "end": 61,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 54,
              "decorators": [],
              "name": "N1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 57,
              "end": 61,
              "raw": "1000",
              "value": 1000,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 67,
            "end": 74,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 69,
              "decorators": [],
              "name": "N2",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 72,
              "end": 74,
              "raw": "25",
              "value": 25,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 91,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 109,
            "decorators": [],
            "name": "someNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 111,
      "end": 160,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 134,
        "end": 160,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 140,
            "end": 158,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 140,
              "end": 157,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 140,
                "end": 150,
                "decorators": [],
                "name": "someNumber",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 153,
                "end": 157,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 157,
                  "decorators": [],
                  "name": "N2",
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
        "start": 115,
        "end": 132,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 125,
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 128,
          "end": 132,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "decorators": [],
            "name": "N2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 201,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 200,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 200,
            "decorators": [],
            "name": "unionOfEnum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 187,
              "end": 200,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 189,
                "end": 200,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 189,
                    "end": 193,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 189,
                      "end": 193,
                      "left": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 193,
                        "decorators": [],
                        "name": "N1",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 196,
                    "end": 200,
                    "typeArguments": null,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 196,
                      "end": 200,
                      "left": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 197,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 200,
                        "decorators": [],
                        "name": "N2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 203,
      "end": 259,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 233,
        "end": 259,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 257,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 239,
              "end": 256,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 239,
                "end": 249,
                "decorators": [],
                "name": "someNumber",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 252,
                "end": 256,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 256,
                  "decorators": [],
                  "name": "N2",
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
        "start": 207,
        "end": 231,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 207,
          "end": 217,
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 220,
          "end": 231,
          "decorators": [],
          "name": "unionOfEnum",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 261,
      "end": 291,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 291,
            "decorators": [],
            "name": "someString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 291,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 285,
                "end": 291
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 293,
      "end": 342,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 316,
        "end": 342,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 322,
            "end": 340,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 322,
              "end": 339,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 322,
                "end": 332,
                "decorators": [],
                "name": "someString",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "MemberExpression",
                "start": 335,
                "end": 339,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 339,
                  "decorators": [],
                  "name": "S2",
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
        "start": 297,
        "end": 314,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 297,
          "end": 307,
          "decorators": [],
          "name": "someString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 310,
          "end": 314,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 312,
            "end": 314,
            "decorators": [],
            "name": "S1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 345,
      "end": 382,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 371,
        "decorators": [],
        "name": "someValue",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 373,
        "end": 381,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 375,
          "end": 381
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 384,
      "end": 448,
      "body": {
        "type": "TSEnumBody",
        "start": 392,
        "end": 448,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 398,
            "end": 408,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 398,
              "end": 400,
              "decorators": [],
              "name": "S1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 403,
              "end": 408,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 414,
            "end": 423,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 416,
              "decorators": [],
              "name": "N1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 419,
              "end": 423,
              "raw": "1000",
              "value": 1000,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 429,
            "end": 445,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 429,
              "end": 431,
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "CallExpression",
              "start": 434,
              "end": 445,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 434,
                "end": 443,
                "decorators": [],
                "name": "someValue",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 391,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 469,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 450,
        "end": 468,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 450,
          "end": 460,
          "decorators": [],
          "name": "someString",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 463,
          "end": 468,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 463,
            "end": 465,
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 468,
            "decorators": [],
            "name": "S1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 470,
      "end": 489,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 470,
        "end": 488,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 470,
          "end": 480,
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 483,
          "end": 488,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 483,
            "end": 485,
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 486,
            "end": 488,
            "decorators": [],
            "name": "N1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 490,
      "end": 509,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 490,
        "end": 508,
        "operator": ">",
        "left": {
          "type": "Identifier",
          "start": 490,
          "end": 500,
          "decorators": [],
          "name": "someNumber",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "MemberExpression",
          "start": 503,
          "end": 508,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 503,
            "end": 505,
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 506,
            "end": 508,
            "decorators": [],
            "name": "C1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
