__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 521,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 9,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 10,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 21,
            "raw": "2",
            "value": 2
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 31,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 27,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 30,
            "end": 31,
            "raw": "3",
            "value": 3
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 44,
      "expression": {
        "type": "MemberExpression",
        "start": 32,
        "end": 44,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 32,
          "end": 42,
          "decorators": [],
          "name": "globalThis",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 43,
          "end": 44,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 51,
      "end": 63,
      "expression": {
        "type": "MemberExpression",
        "start": 51,
        "end": 63,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 51,
          "end": 61,
          "decorators": [],
          "name": "globalThis",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 62,
          "end": 63,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 97,
      "end": 109,
      "expression": {
        "type": "MemberExpression",
        "start": 97,
        "end": 109,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 97,
          "end": 107,
          "decorators": [],
          "name": "globalThis",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "z",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 143,
      "end": 158,
      "expression": {
        "type": "MemberExpression",
        "start": 143,
        "end": 158,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 143,
          "end": 153,
          "decorators": [],
          "name": "globalThis",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 154,
          "end": 157,
          "raw": "'x'",
          "value": "x"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 180,
      "expression": {
        "type": "MemberExpression",
        "start": 165,
        "end": 180,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 165,
          "end": 175,
          "decorators": [],
          "name": "globalThis",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 176,
          "end": 179,
          "raw": "'y'",
          "value": "y"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 229,
      "expression": {
        "type": "MemberExpression",
        "start": 214,
        "end": 229,
        "computed": true,
        "object": {
          "type": "Identifier",
          "start": 214,
          "end": 224,
          "decorators": [],
          "name": "globalThis",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "start": 225,
          "end": 228,
          "raw": "'z'",
          "value": "z"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 263,
      "end": 286,
      "expression": {
        "type": "MemberExpression",
        "start": 263,
        "end": 286,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 263,
          "end": 273,
          "decorators": [],
          "name": "globalThis",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 274,
          "end": 286,
          "decorators": [],
          "name": "Float64Array",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 293,
      "end": 312,
      "expression": {
        "type": "MemberExpression",
        "start": 293,
        "end": 312,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 293,
          "end": 303,
          "decorators": [],
          "name": "globalThis",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 304,
          "end": 312,
          "decorators": [],
          "name": "Infinity",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 363,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 332,
          "end": 363,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 332,
            "end": 363,
            "decorators": [],
            "name": "test1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 337,
              "end": 363,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 339,
                "end": 363,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 359,
                  "end": 362,
                  "literal": {
                    "type": "Literal",
                    "start": 359,
                    "end": 362,
                    "raw": "'x'",
                    "value": "x"
                  }
                },
                "objectType": {
                  "type": "TSTypeQuery",
                  "start": 340,
                  "end": 357,
                  "exprName": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 357,
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 413,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 413,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 387,
              "end": 413,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 389,
                "end": 413,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 409,
                  "end": 412,
                  "literal": {
                    "type": "Literal",
                    "start": 409,
                    "end": 412,
                    "raw": "'y'",
                    "value": "y"
                  }
                },
                "objectType": {
                  "type": "TSTypeQuery",
                  "start": 390,
                  "end": 407,
                  "exprName": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 407,
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 466,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 466,
            "decorators": [],
            "name": "test3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 466,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 442,
                "end": 466,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 462,
                  "end": 465,
                  "literal": {
                    "type": "Literal",
                    "start": 462,
                    "end": 465,
                    "raw": "'z'",
                    "value": "z"
                  }
                },
                "objectType": {
                  "type": "TSTypeQuery",
                  "start": 443,
                  "end": 460,
                  "exprName": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 460,
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 476,
      "end": 520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 520,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 520,
            "decorators": [],
            "name": "themAll",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 520,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 497,
                "end": 520,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 503,
                  "end": 520,
                  "exprName": {
                    "type": "Identifier",
                    "start": 510,
                    "end": 520,
                    "decorators": [],
                    "name": "globalThis",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
