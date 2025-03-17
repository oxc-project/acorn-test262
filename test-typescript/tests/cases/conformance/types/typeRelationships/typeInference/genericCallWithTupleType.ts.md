__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 497,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 1,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 42,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 40,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "name": "tuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 33,
                "end": 39,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 34,
                    "end": 35,
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 37,
                    "end": 38,
                    "typeName": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "start": 45,
      "end": 71,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 49,
          "end": 70,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 70,
            "name": "i1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 70,
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 54,
                  "end": 70,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 55,
                      "end": 61
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 63,
                      "end": 69
                    }
                  ]
                }
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
      "start": 72,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 89,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 89,
            "name": "i2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 89,
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 81,
                  "end": 89,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 82,
                      "end": 84,
                      "members": []
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 86,
                      "end": 88,
                      "members": []
                    }
                  ]
                }
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
      "start": 104,
      "end": 127,
      "expression": {
        "type": "AssignmentExpression",
        "start": 104,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 104,
          "end": 113,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 116,
          "end": 126,
          "elements": [
            {
              "type": "Literal",
              "start": 117,
              "end": 122,
              "value": "foo",
              "raw": "\"foo\""
            },
            {
              "type": "Literal",
              "start": 124,
              "end": 125,
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
      "start": 128,
      "end": 150,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 149,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "name": "e1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 137,
            "end": 149,
            "object": {
              "type": "MemberExpression",
              "start": 137,
              "end": 146,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 139,
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 140,
                "end": 146,
                "name": "tuple1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 147,
              "end": 148,
              "value": 0,
              "raw": "0"
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
      "start": 162,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 183,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "name": "e2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 183,
            "object": {
              "type": "MemberExpression",
              "start": 171,
              "end": 180,
              "object": {
                "type": "Identifier",
                "start": 171,
                "end": 173,
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 174,
                "end": 180,
                "name": "tuple1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 181,
              "end": 182,
              "value": 1,
              "raw": "1"
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
      "type": "ExpressionStatement",
      "start": 196,
      "end": 232,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 196,
          "end": 205,
          "object": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 199,
            "end": 205,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 208,
          "end": 231,
          "elements": [
            {
              "type": "Literal",
              "start": 209,
              "end": 214,
              "value": "foo",
              "raw": "\"foo\""
            },
            {
              "type": "Literal",
              "start": 216,
              "end": 217,
              "value": 5,
              "raw": "5"
            },
            {
              "type": "Literal",
              "start": 219,
              "end": 224,
              "value": false,
              "raw": "false"
            },
            {
              "type": "Literal",
              "start": 226,
              "end": 230,
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
      "start": 233,
      "end": 255,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 254,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 239,
            "name": "e3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 242,
            "end": 254,
            "object": {
              "type": "MemberExpression",
              "start": 242,
              "end": 251,
              "object": {
                "type": "Identifier",
                "start": 242,
                "end": 244,
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 245,
                "end": 251,
                "name": "tuple1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 252,
              "end": 253,
              "value": 2,
              "raw": "2"
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
      "type": "ExpressionStatement",
      "start": 263,
      "end": 294,
      "expression": {
        "type": "AssignmentExpression",
        "start": 263,
        "end": 293,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 263,
          "end": 275,
          "object": {
            "type": "MemberExpression",
            "start": 263,
            "end": 272,
            "object": {
              "type": "Identifier",
              "start": 263,
              "end": 265,
              "name": "i1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 266,
              "end": 272,
              "name": "tuple1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 273,
            "end": 274,
            "value": 3,
            "raw": "3"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "ObjectExpression",
          "start": 278,
          "end": 293,
          "properties": [
            {
              "type": "Property",
              "start": 280,
              "end": 291,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 283,
                "end": 291,
                "value": "string",
                "raw": "\"string\""
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 295,
      "end": 317,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 316,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 301,
            "name": "e4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 304,
            "end": 316,
            "object": {
              "type": "MemberExpression",
              "start": 304,
              "end": 313,
              "object": {
                "type": "Identifier",
                "start": 304,
                "end": 306,
                "name": "i1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 307,
                "end": 313,
                "name": "tuple1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 314,
              "end": 315,
              "value": 3,
              "raw": "3"
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
      "type": "ExpressionStatement",
      "start": 325,
      "end": 348,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 347,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 325,
          "end": 334,
          "object": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 328,
            "end": 334,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 337,
          "end": 347,
          "elements": [
            {
              "type": "Literal",
              "start": 338,
              "end": 343,
              "value": "foo",
              "raw": "\"foo\""
            },
            {
              "type": "Literal",
              "start": 345,
              "end": 346,
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
      "start": 349,
      "end": 376,
      "expression": {
        "type": "AssignmentExpression",
        "start": 349,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 349,
          "end": 358,
          "object": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 352,
            "end": 358,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 361,
          "end": 375,
          "elements": [
            {
              "type": "Literal",
              "start": 362,
              "end": 367,
              "value": "foo",
              "raw": "\"foo\""
            },
            {
              "type": "Literal",
              "start": 369,
              "end": 374,
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
      "start": 377,
      "end": 400,
      "expression": {
        "type": "AssignmentExpression",
        "start": 377,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 377,
          "end": 386,
          "object": {
            "type": "Identifier",
            "start": 377,
            "end": 379,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 380,
            "end": 386,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 389,
          "end": 399,
          "elements": [
            {
              "type": "Literal",
              "start": 390,
              "end": 391,
              "value": 5,
              "raw": "5"
            },
            {
              "type": "Literal",
              "start": 393,
              "end": 398,
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
      "start": 401,
      "end": 422,
      "expression": {
        "type": "AssignmentExpression",
        "start": 401,
        "end": 421,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 401,
          "end": 410,
          "object": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 404,
            "end": 410,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 413,
          "end": 421,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 414,
              "end": 416,
              "properties": []
            },
            {
              "type": "ObjectExpression",
              "start": 418,
              "end": 420,
              "properties": []
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 456,
      "expression": {
        "type": "AssignmentExpression",
        "start": 433,
        "end": 455,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 433,
          "end": 442,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 436,
            "end": 442,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 445,
          "end": 455,
          "elements": [
            {
              "type": "Literal",
              "start": 446,
              "end": 447,
              "value": 5,
              "raw": "5"
            },
            {
              "type": "Literal",
              "start": 449,
              "end": 454,
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
      "start": 457,
      "end": 478,
      "expression": {
        "type": "AssignmentExpression",
        "start": 457,
        "end": 477,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 457,
          "end": 466,
          "object": {
            "type": "Identifier",
            "start": 457,
            "end": 459,
            "name": "i1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 460,
            "end": 466,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 469,
          "end": 477,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 470,
              "end": 472,
              "properties": []
            },
            {
              "type": "ObjectExpression",
              "start": 474,
              "end": 476,
              "properties": []
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 479,
      "end": 496,
      "expression": {
        "type": "AssignmentExpression",
        "start": 479,
        "end": 495,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 479,
          "end": 488,
          "object": {
            "type": "Identifier",
            "start": 479,
            "end": 481,
            "name": "i2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 482,
            "end": 488,
            "name": "tuple1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 491,
          "end": 495,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 492,
              "end": 494,
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
