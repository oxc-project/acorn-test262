__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 303,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 19,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "S",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 9,
        "end": 18,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 9,
            "end": 12,
            "literal": {
              "type": "Literal",
              "start": 9,
              "end": 12,
              "value": "a",
              "raw": "\"a\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 15,
            "end": 18,
            "literal": {
              "type": "Literal",
              "start": 15,
              "end": 18,
              "value": "b",
              "raw": "\"b\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 20,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 26,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 29,
        "end": 36,
        "types": [
          {
            "type": "TSArrayType",
            "start": 29,
            "end": 32,
            "elementType": {
              "type": "TSTypeReference",
              "start": 29,
              "end": 30,
              "typeName": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 35,
            "end": 36,
            "typeName": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 48,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 43,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 47,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 49,
      "end": 58,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 57,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 54,
              "end": 57,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 56,
                "end": 57,
                "typeName": {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 59,
      "end": 75,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 74,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 74,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 68,
                "end": 74
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
      "start": 95,
      "end": 104,
      "expression": {
        "type": "AssignmentExpression",
        "start": 95,
        "end": 103,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 99,
          "end": 103,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 100,
            "end": 101,
            "typeName": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 116,
      "expression": {
        "type": "AssignmentExpression",
        "start": 105,
        "end": 115,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 105,
          "end": 106,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 109,
          "end": 115,
          "expression": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 114,
            "end": 115,
            "typeName": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 129,
      "expression": {
        "type": "AssignmentExpression",
        "start": 118,
        "end": 128,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 118,
          "end": 119,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 122,
          "end": 128,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 123,
            "end": 124,
            "typeName": {
              "type": "Identifier",
              "start": 123,
              "end": 124,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Identifier",
            "start": 125,
            "end": 128,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 143,
      "expression": {
        "type": "AssignmentExpression",
        "start": 130,
        "end": 142,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 130,
          "end": 131,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 134,
          "end": 142,
          "expression": {
            "type": "Identifier",
            "start": 134,
            "end": 137,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 141,
            "end": 142,
            "typeName": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 172,
      "expression": {
        "type": "AssignmentExpression",
        "start": 163,
        "end": 171,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 163,
          "end": 164,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 167,
          "end": 171,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 168,
            "end": 169,
            "typeName": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 173,
      "end": 184,
      "expression": {
        "type": "AssignmentExpression",
        "start": 173,
        "end": 183,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 173,
          "end": 174,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 177,
          "end": 183,
          "expression": {
            "type": "Identifier",
            "start": 177,
            "end": 178,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 182,
            "end": 183,
            "typeName": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 186,
      "end": 197,
      "expression": {
        "type": "AssignmentExpression",
        "start": 186,
        "end": 196,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 186,
          "end": 187,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 190,
          "end": 196,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 191,
            "end": 192,
            "typeName": {
              "type": "Identifier",
              "start": 191,
              "end": 192,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "expression": {
            "type": "Identifier",
            "start": 193,
            "end": 196,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 211,
      "expression": {
        "type": "AssignmentExpression",
        "start": 198,
        "end": 210,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 198,
          "end": 199,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 202,
          "end": 210,
          "expression": {
            "type": "Identifier",
            "start": 202,
            "end": 205,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 209,
            "end": 210,
            "typeName": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 247,
      "expression": {
        "type": "AssignmentExpression",
        "start": 231,
        "end": 246,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 231,
          "end": 234,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 237,
          "end": 246,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 238,
            "end": 244
          },
          "expression": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 248,
      "end": 266,
      "expression": {
        "type": "AssignmentExpression",
        "start": 248,
        "end": 265,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 248,
          "end": 251,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 254,
          "end": 265,
          "expression": {
            "type": "Identifier",
            "start": 254,
            "end": 255,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 259,
            "end": 265
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 284,
      "expression": {
        "type": "AssignmentExpression",
        "start": 268,
        "end": 283,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 268,
          "end": 271,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSTypeAssertion",
          "start": 274,
          "end": 283,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 275,
            "end": 281
          },
          "expression": {
            "type": "Identifier",
            "start": 282,
            "end": 283,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 303,
      "expression": {
        "type": "AssignmentExpression",
        "start": 285,
        "end": 302,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 285,
          "end": 288,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "TSAsExpression",
          "start": 291,
          "end": 302,
          "expression": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 296,
            "end": 302
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
