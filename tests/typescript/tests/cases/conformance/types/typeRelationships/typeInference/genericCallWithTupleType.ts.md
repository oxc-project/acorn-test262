__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 495,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 39,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
              "decorators": [],
              "name": "tuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 32,
                "end": 38,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 33,
                    "end": 34,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 37,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 44,
      "end": 70,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 48,
            "end": 69,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 50,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 52,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 53,
                  "end": 69,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 54,
                      "end": 60
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 62,
                      "end": 68
                    }
                  ]
                }
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
      "start": 71,
      "end": 89,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 88,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 88,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 88,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 79,
                "end": 88,
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 80,
                  "end": 88,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 81,
                      "end": 83,
                      "members": []
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 85,
                      "end": 87,
                      "members": []
                    }
                  ]
                }
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
      "type": "ExpressionStatement",
      "start": 103,
      "end": 126,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 125,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 103,
          "end": 112,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 112,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 115,
          "end": 125,
          "elements": [
            {
              "type": "Literal",
              "start": 116,
              "end": 121,
              "value": "foo",
              "raw": "\"foo\""
            },
            {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "value": 5,
              "raw": "5"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 149,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 148,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 133,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 136,
            "end": 148,
            "object": {
              "type": "MemberExpression",
              "start": 136,
              "end": 145,
              "object": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 145,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 146,
              "end": 147,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 161,
      "end": 183,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 182,
          "id": {
            "type": "Identifier",
            "start": 165,
            "end": 167,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 170,
            "end": 182,
            "object": {
              "type": "MemberExpression",
              "start": 170,
              "end": 179,
              "object": {
                "type": "Identifier",
                "start": 170,
                "end": 172,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 173,
                "end": 179,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 180,
              "end": 181,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 231,
      "expression": {
        "type": "AssignmentExpression",
        "start": 195,
        "end": 230,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 195,
          "end": 204,
          "object": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 198,
            "end": 204,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 207,
          "end": 230,
          "elements": [
            {
              "type": "Literal",
              "start": 208,
              "end": 213,
              "value": "foo",
              "raw": "\"foo\""
            },
            {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "value": 5,
              "raw": "5"
            },
            {
              "type": "Literal",
              "start": 218,
              "end": 223,
              "value": false,
              "raw": "false"
            },
            {
              "type": "Literal",
              "start": 225,
              "end": 229,
              "value": true,
              "raw": "true"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 254,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 236,
            "end": 238,
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 241,
            "end": 253,
            "object": {
              "type": "MemberExpression",
              "start": 241,
              "end": 250,
              "object": {
                "type": "Identifier",
                "start": 241,
                "end": 243,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 244,
                "end": 250,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 251,
              "end": 252,
              "value": 2,
              "raw": "2"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 262,
      "end": 293,
      "expression": {
        "type": "AssignmentExpression",
        "start": 262,
        "end": 292,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 262,
          "end": 274,
          "object": {
            "type": "MemberExpression",
            "start": 262,
            "end": 271,
            "object": {
              "type": "Identifier",
              "start": 262,
              "end": 264,
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 265,
              "end": 271,
              "decorators": [],
              "name": "tuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "value": 3,
            "raw": "3"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "ObjectExpression",
          "start": 277,
          "end": 292,
          "properties": [
            {
              "type": "Property",
              "start": 279,
              "end": 290,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 279,
                "end": 280,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Literal",
                "start": 282,
                "end": 290,
                "value": "string",
                "raw": "\"string\""
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 316,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 315,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 300,
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 303,
            "end": 315,
            "object": {
              "type": "MemberExpression",
              "start": 303,
              "end": 312,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 305,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 306,
                "end": 312,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "property": {
              "type": "Literal",
              "start": 313,
              "end": 314,
              "value": 3,
              "raw": "3"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 347,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 346,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 324,
          "end": 333,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 326,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 327,
            "end": 333,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 336,
          "end": 346,
          "elements": [
            {
              "type": "Literal",
              "start": 337,
              "end": 342,
              "value": "foo",
              "raw": "\"foo\""
            },
            {
              "type": "Literal",
              "start": 344,
              "end": 345,
              "value": 5,
              "raw": "5"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 348,
      "end": 375,
      "expression": {
        "type": "AssignmentExpression",
        "start": 348,
        "end": 374,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 348,
          "end": 357,
          "object": {
            "type": "Identifier",
            "start": 348,
            "end": 350,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 357,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 360,
          "end": 374,
          "elements": [
            {
              "type": "Literal",
              "start": 361,
              "end": 366,
              "value": "foo",
              "raw": "\"foo\""
            },
            {
              "type": "Literal",
              "start": 368,
              "end": 373,
              "value": "bar",
              "raw": "\"bar\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 399,
      "expression": {
        "type": "AssignmentExpression",
        "start": 376,
        "end": 398,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 376,
          "end": 385,
          "object": {
            "type": "Identifier",
            "start": 376,
            "end": 378,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 379,
            "end": 385,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 388,
          "end": 398,
          "elements": [
            {
              "type": "Literal",
              "start": 389,
              "end": 390,
              "value": 5,
              "raw": "5"
            },
            {
              "type": "Literal",
              "start": 392,
              "end": 397,
              "value": "bar",
              "raw": "\"bar\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 400,
      "end": 421,
      "expression": {
        "type": "AssignmentExpression",
        "start": 400,
        "end": 420,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 400,
          "end": 409,
          "object": {
            "type": "Identifier",
            "start": 400,
            "end": 402,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 403,
            "end": 409,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 412,
          "end": 420,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 413,
              "end": 415,
              "properties": []
            },
            {
              "type": "ObjectExpression",
              "start": 417,
              "end": 419,
              "properties": []
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 432,
      "end": 455,
      "expression": {
        "type": "AssignmentExpression",
        "start": 432,
        "end": 454,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 432,
          "end": 441,
          "object": {
            "type": "Identifier",
            "start": 432,
            "end": 434,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 441,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 444,
          "end": 454,
          "elements": [
            {
              "type": "Literal",
              "start": 445,
              "end": 446,
              "value": 5,
              "raw": "5"
            },
            {
              "type": "Literal",
              "start": 448,
              "end": 453,
              "value": "foo",
              "raw": "\"foo\""
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 477,
      "expression": {
        "type": "AssignmentExpression",
        "start": 456,
        "end": 476,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 456,
          "end": 465,
          "object": {
            "type": "Identifier",
            "start": 456,
            "end": 458,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 459,
            "end": 465,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 468,
          "end": 476,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 469,
              "end": 471,
              "properties": []
            },
            {
              "type": "ObjectExpression",
              "start": 473,
              "end": 475,
              "properties": []
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 495,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 494,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 478,
          "end": 487,
          "object": {
            "type": "Identifier",
            "start": 478,
            "end": 480,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 481,
            "end": 487,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 490,
          "end": 494,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 491,
              "end": 493,
              "properties": []
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
