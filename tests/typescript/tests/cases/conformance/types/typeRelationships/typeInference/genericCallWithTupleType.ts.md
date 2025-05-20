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
      "body": {
        "type": "TSInterfaceBody",
        "start": 18,
        "end": 41,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 24,
            "end": 39,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 30,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 33,
                      "end": 34,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 36,
                    "end": 37,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 36,
                      "end": 37,
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
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
      "start": 44,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 48,
          "end": 69,
          "definite": false,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 53,
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
      "start": 71,
      "end": 89,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 88,
          "definite": false,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
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
      "start": 103,
      "end": 126,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 103,
        "end": 125,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 103,
          "end": 112,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 103,
            "end": 105,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 106,
            "end": 112,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            {
              "type": "Literal",
              "start": 123,
              "end": 124,
              "raw": "5",
              "value": 5
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 148,
          "definite": false,
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
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 136,
              "end": 145,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 136,
                "end": 138,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 139,
                "end": 145,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 146,
              "end": 147,
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
      "start": 161,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 165,
          "end": 182,
          "definite": false,
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
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 170,
              "end": 179,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 170,
                "end": 172,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 173,
                "end": 179,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 180,
              "end": 181,
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
      "start": 195,
      "end": 231,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 195,
        "end": 230,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 195,
          "end": 204,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 198,
            "end": 204,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            {
              "type": "Literal",
              "start": 215,
              "end": 216,
              "raw": "5",
              "value": 5
            },
            {
              "type": "Literal",
              "start": 218,
              "end": 223,
              "raw": "false",
              "value": false
            },
            {
              "type": "Literal",
              "start": 225,
              "end": 229,
              "raw": "true",
              "value": true
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 232,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 236,
          "end": 253,
          "definite": false,
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
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 241,
              "end": 250,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 241,
                "end": 243,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 244,
                "end": 250,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 251,
              "end": 252,
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
      "start": 262,
      "end": 293,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 262,
        "end": 292,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 262,
          "end": 274,
          "computed": true,
          "object": {
            "type": "MemberExpression",
            "start": 262,
            "end": 271,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 262,
              "end": 264,
              "decorators": [],
              "name": "i1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 265,
              "end": 271,
              "decorators": [],
              "name": "tuple1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 272,
            "end": 273,
            "raw": "3",
            "value": 3
          }
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
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 279,
                "end": 280,
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
                "start": 282,
                "end": 290,
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
      "start": 294,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 315,
          "definite": false,
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
            "computed": true,
            "object": {
              "type": "MemberExpression",
              "start": 303,
              "end": 312,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 303,
                "end": 305,
                "decorators": [],
                "name": "i1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 306,
                "end": 312,
                "decorators": [],
                "name": "tuple1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 313,
              "end": 314,
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
      "start": 324,
      "end": 347,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 324,
        "end": 346,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 324,
          "end": 333,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 324,
            "end": 326,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 327,
            "end": 333,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            {
              "type": "Literal",
              "start": 344,
              "end": 345,
              "raw": "5",
              "value": 5
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 348,
      "end": 375,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 348,
        "end": 374,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 348,
          "end": 357,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 348,
            "end": 350,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 351,
            "end": 357,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            {
              "type": "Literal",
              "start": 368,
              "end": 373,
              "raw": "\"bar\"",
              "value": "bar"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 399,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 376,
        "end": 398,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 376,
          "end": 385,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 376,
            "end": 378,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 379,
            "end": 385,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "5",
              "value": 5
            },
            {
              "type": "Literal",
              "start": 392,
              "end": 397,
              "raw": "\"bar\"",
              "value": "bar"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 400,
      "end": 421,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 400,
        "end": 420,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 400,
          "end": 409,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 400,
            "end": 402,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 403,
            "end": 409,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 432,
      "end": 455,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 432,
        "end": 454,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 432,
          "end": 441,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 432,
            "end": 434,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 435,
            "end": 441,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
              "raw": "5",
              "value": 5
            },
            {
              "type": "Literal",
              "start": 448,
              "end": 453,
              "raw": "\"foo\"",
              "value": "foo"
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 456,
      "end": 477,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 456,
        "end": 476,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 456,
          "end": 465,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 456,
            "end": 458,
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 459,
            "end": 465,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 495,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 494,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 478,
          "end": 487,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 478,
            "end": 480,
            "decorators": [],
            "name": "i2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 481,
            "end": 487,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": null
          }
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
