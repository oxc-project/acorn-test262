__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 510,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 19,
          "end": 29,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 21,
            "name": "S1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 24,
            "end": 29,
            "value": "foo",
            "raw": "\"foo\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 35,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "name": "S2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 40,
            "end": 45,
            "value": "bar",
            "raw": "\"bar\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 52,
          "end": 61,
          "id": {
            "type": "Identifier",
            "start": 52,
            "end": 54,
            "name": "N1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 57,
            "end": 61,
            "value": 1000,
            "raw": "1000"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 67,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 69,
            "name": "N2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 72,
            "end": 74,
            "value": 25,
            "raw": "25"
          },
          "computed": false
        }
      ],
      "const": true,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 77,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 29,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "name": "S1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 24,
              "end": 29,
              "value": "foo",
              "raw": "\"foo\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 35,
            "end": 45,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 37,
              "name": "S2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 40,
              "end": 45,
              "value": "bar",
              "raw": "\"bar\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 52,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 54,
              "name": "N1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 57,
              "end": 61,
              "value": 1000,
              "raw": "1000"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 67,
            "end": 74,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 69,
              "name": "N2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 72,
              "end": 74,
              "value": 25,
              "raw": "25"
            },
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 91,
            "end": 109,
            "name": "someNumber",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
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
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 111,
      "end": 160,
      "test": {
        "type": "BinaryExpression",
        "start": 115,
        "end": 132,
        "left": {
          "type": "Identifier",
          "start": 115,
          "end": 125,
          "name": "someNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "start": 128,
          "end": 132,
          "object": {
            "type": "Identifier",
            "start": 128,
            "end": 129,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 130,
            "end": 132,
            "name": "N2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 134,
        "end": 160,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 140,
            "end": 158,
            "expression": {
              "type": "AssignmentExpression",
              "start": 140,
              "end": 157,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 140,
                "end": 150,
                "name": "someNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 153,
                "end": 157,
                "object": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 157,
                  "name": "N2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 200,
            "name": "unionOfEnum",
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
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 189,
                      "end": 193,
                      "left": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 191,
                        "end": 193,
                        "name": "N1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 196,
                    "end": 200,
                    "typeName": {
                      "type": "TSQualifiedName",
                      "start": 196,
                      "end": 200,
                      "left": {
                        "type": "Identifier",
                        "start": 196,
                        "end": 197,
                        "name": "E",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 200,
                        "name": "N2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 203,
      "end": 259,
      "test": {
        "type": "BinaryExpression",
        "start": 207,
        "end": 231,
        "left": {
          "type": "Identifier",
          "start": 207,
          "end": 217,
          "name": "someNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">",
        "right": {
          "type": "Identifier",
          "start": 220,
          "end": 231,
          "name": "unionOfEnum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 233,
        "end": 259,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 257,
            "expression": {
              "type": "AssignmentExpression",
              "start": 239,
              "end": 256,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 239,
                "end": 249,
                "name": "someNumber",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 252,
                "end": 256,
                "object": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 256,
                  "name": "N2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 291,
            "name": "someString",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 291,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 285,
                "end": 291
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
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 293,
      "end": 342,
      "test": {
        "type": "BinaryExpression",
        "start": 297,
        "end": 314,
        "left": {
          "type": "Identifier",
          "start": 297,
          "end": 307,
          "name": "someString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "start": 310,
          "end": 314,
          "object": {
            "type": "Identifier",
            "start": 310,
            "end": 311,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 312,
            "end": 314,
            "name": "S1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 316,
        "end": 342,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 322,
            "end": 340,
            "expression": {
              "type": "AssignmentExpression",
              "start": 322,
              "end": 339,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 322,
                "end": 332,
                "name": "someString",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 335,
                "end": 339,
                "object": {
                  "type": "Identifier",
                  "start": 335,
                  "end": 336,
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 339,
                  "name": "S2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 345,
      "end": 382,
      "id": {
        "type": "Identifier",
        "start": 362,
        "end": 371,
        "name": "someValue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 373,
        "end": 381,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 375,
          "end": 381
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 384,
      "end": 448,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 391,
        "name": "E2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 398,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 400,
            "name": "S1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 403,
            "end": 408,
            "value": "foo",
            "raw": "\"foo\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 414,
          "end": 423,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 416,
            "name": "N1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 419,
            "end": 423,
            "value": 1000,
            "raw": "1000"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 429,
          "end": 445,
          "id": {
            "type": "Identifier",
            "start": 429,
            "end": 431,
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "CallExpression",
            "start": 434,
            "end": 445,
            "callee": {
              "type": "Identifier",
              "start": 434,
              "end": 443,
              "name": "someValue",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 392,
        "end": 448,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 398,
            "end": 408,
            "id": {
              "type": "Identifier",
              "start": 398,
              "end": 400,
              "name": "S1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 403,
              "end": 408,
              "value": "foo",
              "raw": "\"foo\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 414,
            "end": 423,
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 416,
              "name": "N1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 419,
              "end": 423,
              "value": 1000,
              "raw": "1000"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 429,
            "end": 445,
            "id": {
              "type": "Identifier",
              "start": 429,
              "end": 431,
              "name": "C1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "CallExpression",
              "start": 434,
              "end": 445,
              "callee": {
                "type": "Identifier",
                "start": 434,
                "end": 443,
                "name": "someValue",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 469,
      "expression": {
        "type": "BinaryExpression",
        "start": 450,
        "end": 468,
        "left": {
          "type": "Identifier",
          "start": 450,
          "end": 460,
          "name": "someString",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "start": 463,
          "end": 468,
          "object": {
            "type": "Identifier",
            "start": 463,
            "end": 465,
            "name": "E2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 468,
            "name": "S1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 470,
      "end": 489,
      "expression": {
        "type": "BinaryExpression",
        "start": 470,
        "end": 488,
        "left": {
          "type": "Identifier",
          "start": 470,
          "end": 480,
          "name": "someNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "start": 483,
          "end": 488,
          "object": {
            "type": "Identifier",
            "start": 483,
            "end": 485,
            "name": "E2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 486,
            "end": 488,
            "name": "N1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 490,
      "end": 509,
      "expression": {
        "type": "BinaryExpression",
        "start": 490,
        "end": 508,
        "left": {
          "type": "Identifier",
          "start": 490,
          "end": 500,
          "name": "someNumber",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">",
        "right": {
          "type": "MemberExpression",
          "start": 503,
          "end": 508,
          "object": {
            "type": "Identifier",
            "start": 503,
            "end": 505,
            "name": "E2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 506,
            "end": 508,
            "name": "C1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
