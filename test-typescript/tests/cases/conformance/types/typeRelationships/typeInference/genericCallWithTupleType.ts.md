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
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 42,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 25,
            "end": 40,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "tuple1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 37,
                    "end": 38,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 49,
            "end": 70,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 70,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 53,
                "end": 70,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 54,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "start": 72,
      "end": 90,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 89,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 89,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 89,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 80,
                "end": 89,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "ExpressionStatement",
      "start": 104,
      "end": 127,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 104,
        "end": 126,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 104,
          "end": 113,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            {
              "type": "Literal",
              "start": 124,
              "end": 125,
              "raw": "5",
              "value": 5
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 134,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 137,
            "end": 149,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 137,
              "end": 146,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 137,
                "end": 139,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 140,
                "end": 146,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 147,
              "end": 148,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 171,
            "end": 183,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 171,
              "end": 180,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 171,
                "end": 173,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 174,
                "end": 180,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 181,
              "end": 182,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 196,
      "end": 232,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 196,
        "end": 231,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 196,
          "end": 205,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 196,
            "end": 198,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 199,
            "end": 205,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            {
              "type": "Literal",
              "start": 216,
              "end": 217,
              "raw": "5",
              "value": 5
            },
            {
              "type": "Literal",
              "start": 219,
              "end": 224,
              "raw": "false",
              "value": false
            },
            {
              "type": "Literal",
              "start": 226,
              "end": 230,
              "raw": "true",
              "value": true
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 239,
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 242,
            "end": 254,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 242,
              "end": 251,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 242,
                "end": 244,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 245,
                "end": 251,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 252,
              "end": 253,
              "raw": "2",
              "value": 2
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 294,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 263,
        "end": 293,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 263,
          "end": 275,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 263,
            "end": 272,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 263,
              "end": 265,
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 266,
              "end": 272,
              "decorators": [],
              "name": "tuple1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 273,
            "end": 274,
            "raw": "3",
            "value": 3
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 283,
                "end": 291,
                "raw": "\"string\"",
                "value": "string"
              }
            }
          ]
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 301,
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 304,
            "end": 316,
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 304,
              "end": 313,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 304,
                "end": 306,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 307,
                "end": 313,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 314,
              "end": 315,
              "raw": "3",
              "value": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 325,
      "end": 348,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 325,
        "end": 347,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 325,
          "end": 334,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 328,
            "end": 334,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            {
              "type": "Literal",
              "start": 345,
              "end": 346,
              "raw": "5",
              "value": 5
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 376,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 349,
        "end": 375,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 349,
          "end": 358,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 349,
            "end": 351,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 352,
            "end": 358,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            {
              "type": "Literal",
              "start": 369,
              "end": 374,
              "raw": "\"bar\"",
              "value": "bar"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 377,
      "end": 400,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 377,
        "end": 399,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 377,
          "end": 386,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 377,
            "end": 379,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 380,
            "end": 386,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "5",
              "value": 5
            },
            {
              "type": "Literal",
              "start": 393,
              "end": 398,
              "raw": "\"bar\"",
              "value": "bar"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 422,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 401,
        "end": 421,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 401,
          "end": 410,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 401,
            "end": 403,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 404,
            "end": 410,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 433,
      "end": 456,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 433,
        "end": 455,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 433,
          "end": 442,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 433,
            "end": 435,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 436,
            "end": 442,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "5",
              "value": 5
            },
            {
              "type": "Literal",
              "start": 449,
              "end": 454,
              "raw": "\"foo\"",
              "value": "foo"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 457,
      "end": 478,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 457,
        "end": 477,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 457,
          "end": 466,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 457,
            "end": 459,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 460,
            "end": 466,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 479,
      "end": 496,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 479,
        "end": 495,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 479,
          "end": 488,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 479,
            "end": 481,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 482,
            "end": 488,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
