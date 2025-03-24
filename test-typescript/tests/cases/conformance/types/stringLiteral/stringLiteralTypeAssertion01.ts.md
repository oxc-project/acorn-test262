__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 2,
  "end": 305,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2,
      "end": 21,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 11,
        "end": 20,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 11,
            "end": 14,
            "literal": {
              "type": "Literal",
              "start": 11,
              "end": 14,
              "raw": "\"a\"",
              "value": "a"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 17,
            "end": 20,
            "literal": {
              "type": "Literal",
              "start": 17,
              "end": 20,
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 39,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 31,
        "end": 38,
        "types": [
          {
            "type": "TSArrayType",
            "start": 31,
            "end": 34,
            "elementType": {
              "type": "TSTypeReference",
              "start": 31,
              "end": 32,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 31,
                "end": 32,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              }
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "S",
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
      "start": 51,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 59,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 59,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 59,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "T",
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
      "start": 61,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 76,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 70,
                "end": 76
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
      "start": 97,
      "end": 106,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 97,
        "end": 105,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 97,
          "end": 98,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 101,
          "end": 105,
          "expression": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 102,
            "end": 103,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 118,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 107,
        "end": 117,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 108,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 111,
          "end": 117,
          "expression": {
            "type": "Identifier",
            "start": 111,
            "end": 112,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 116,
            "end": 117,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 120,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 124,
          "end": 130,
          "expression": {
            "type": "Identifier",
            "start": 127,
            "end": 130,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 125,
            "end": 126,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 145,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 132,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 132,
          "end": 133,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 136,
          "end": 144,
          "expression": {
            "type": "Identifier",
            "start": 136,
            "end": 139,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 143,
            "end": 144,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 165,
      "end": 174,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 165,
        "end": 173,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 169,
          "end": 173,
          "expression": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 170,
            "end": 171,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 175,
      "end": 186,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 175,
        "end": 185,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 175,
          "end": 176,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 179,
          "end": 185,
          "expression": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 184,
            "end": 185,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 184,
              "end": 185,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 188,
      "end": 199,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 188,
        "end": 198,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 188,
          "end": 189,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 192,
          "end": 198,
          "expression": {
            "type": "Identifier",
            "start": 195,
            "end": 198,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 193,
            "end": 194,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 200,
      "end": 213,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 200,
        "end": 212,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 200,
          "end": 201,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 204,
          "end": 212,
          "expression": {
            "type": "Identifier",
            "start": 204,
            "end": 207,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 211,
            "end": 212,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 233,
      "end": 249,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 233,
        "end": 248,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 233,
          "end": 236,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 239,
          "end": 248,
          "expression": {
            "type": "Identifier",
            "start": 247,
            "end": 248,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 240,
            "end": 246
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 268,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 250,
        "end": 267,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 250,
          "end": 253,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 256,
          "end": 267,
          "expression": {
            "type": "Identifier",
            "start": 256,
            "end": 257,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 261,
            "end": 267
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 270,
      "end": 286,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 270,
        "end": 285,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 270,
          "end": 273,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 276,
          "end": 285,
          "expression": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 277,
            "end": 283
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 287,
      "end": 305,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 287,
        "end": 304,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 287,
          "end": 290,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 293,
          "end": 304,
          "expression": {
            "type": "Identifier",
            "start": 293,
            "end": 294,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 298,
            "end": 304
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
