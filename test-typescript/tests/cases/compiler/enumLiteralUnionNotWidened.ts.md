__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 554,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 21,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 30,
          "end": 41,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 36,
            "end": 41,
            "value": "one",
            "raw": "\"one\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 43,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "name": "two",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 49,
            "end": 54,
            "value": "two",
            "raw": "\"two\""
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 28,
        "end": 56,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 41,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "name": "one",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 36,
              "end": 41,
              "value": "one",
              "raw": "\"one\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 54,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "name": "two",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 49,
              "end": 54,
              "value": "two",
              "raw": "\"two\""
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 56,
      "end": 57
    },
    {
      "type": "TSEnumDeclaration",
      "start": 58,
      "end": 93,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 67,
          "end": 78,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 70,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 73,
            "end": 78,
            "value": "foo",
            "raw": "\"foo\""
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 80,
          "end": 91,
          "id": {
            "type": "Identifier",
            "start": 80,
            "end": 83,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 86,
            "end": 91,
            "value": "bar",
            "raw": "\"bar\""
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 65,
        "end": 93,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 67,
            "end": 78,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 73,
              "end": 78,
              "value": "foo",
              "raw": "\"foo\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 80,
            "end": 91,
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 86,
              "end": 91,
              "value": "bar",
              "raw": "\"bar\""
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 93,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 115,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 105,
        "end": 114,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 105,
            "end": 106,
            "typeName": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 109,
            "end": 114,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 109,
              "end": 114,
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 111,
                "end": 114,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 116,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 125,
        "end": 134,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 125,
            "end": 126,
            "typeName": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSLiteralType",
            "start": 129,
            "end": 134,
            "literal": {
              "type": "Literal",
              "start": 129,
              "end": 134,
              "value": "foo",
              "raw": "\"foo\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 137,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
        "name": "List",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 187,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 176,
              "name": "items",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrayExpression",
              "start": 184,
              "end": 186,
              "elements": []
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 181,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 178,
                "end": 181,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 178,
                  "end": 179,
                  "typeName": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
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
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 249,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 206,
        "name": "asList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 210,
          "end": 216,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 213,
            "end": 216,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 215,
              "end": 216,
              "typeName": {
                "type": "Identifier",
                "start": 215,
                "end": 216,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 249,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 229,
            "end": 247,
            "argument": {
              "type": "NewExpression",
              "start": 236,
              "end": 246,
              "callee": {
                "type": "Identifier",
                "start": 240,
                "end": 244,
                "name": "List",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 206,
        "end": 209,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 207,
            "end": 208,
            "name": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 217,
        "end": 226,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 219,
          "end": 226,
          "typeName": {
            "type": "Identifier",
            "start": 219,
            "end": 223,
            "name": "List",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 223,
            "end": 226,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 224,
                "end": 225,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 376,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 388,
        "name": "fn1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 389,
          "end": 393,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 390,
            "end": 393,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 392,
              "end": 393,
              "typeName": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 404,
        "end": 425,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 406,
            "end": 423,
            "argument": {
              "type": "CallExpression",
              "start": 413,
              "end": 422,
              "callee": {
                "type": "Identifier",
                "start": 413,
                "end": 419,
                "name": "asList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 420,
                  "end": 421,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 394,
        "end": 403,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 396,
          "end": 403,
          "typeName": {
            "type": "Identifier",
            "start": 396,
            "end": 400,
            "name": "List",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 400,
            "end": 403,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 401,
                "end": 402,
                "typeName": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 505,
      "end": 554,
      "id": {
        "type": "Identifier",
        "start": 514,
        "end": 517,
        "name": "fn2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 518,
          "end": 522,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 519,
            "end": 522,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 521,
              "end": 522,
              "typeName": {
                "type": "Identifier",
                "start": 521,
                "end": 522,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 533,
        "end": 554,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 535,
            "end": 552,
            "argument": {
              "type": "CallExpression",
              "start": 542,
              "end": 551,
              "callee": {
                "type": "Identifier",
                "start": 542,
                "end": 548,
                "name": "asList",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 523,
        "end": 532,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 525,
          "end": 532,
          "typeName": {
            "type": "Identifier",
            "start": 525,
            "end": 529,
            "name": "List",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 529,
            "end": 532,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 530,
                "end": 531,
                "typeName": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 531,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
