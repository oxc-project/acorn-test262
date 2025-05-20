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
      "body": {
        "type": "TSEnumBody",
        "start": 28,
        "end": 56,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 41,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 36,
              "end": 41,
              "raw": "\"one\"",
              "value": "one"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 54,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 49,
              "end": 54,
              "raw": "\"two\"",
              "value": "two"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 27,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
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
      "body": {
        "type": "TSEnumBody",
        "start": 65,
        "end": 93,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 67,
            "end": 78,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 67,
              "end": 70,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 73,
              "end": 78,
              "raw": "\"foo\"",
              "value": "foo"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 80,
            "end": 91,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 80,
              "end": 83,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 86,
              "end": 91,
              "raw": "\"bar\"",
              "value": "bar"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 64,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 105,
        "end": 114,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 105,
            "end": 106,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 109,
            "end": 114,
            "typeArguments": null,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 109,
              "end": 114,
              "left": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 111,
                "end": 114,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 116,
      "end": 135,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 122,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 125,
        "end": 134,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 125,
            "end": 126,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSLiteralType",
            "start": 129,
            "end": 134,
            "literal": {
              "type": "Literal",
              "start": 129,
              "end": 134,
              "raw": "\"foo\"",
              "value": "foo"
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 137,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 151,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 154,
            "end": 187,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 171,
              "end": 176,
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            "value": {
              "type": "ArrayExpression",
              "start": 184,
              "end": 186,
              "elements": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 147,
        "decorators": [],
        "name": "List",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 191,
      "end": 249,
      "async": false,
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
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 240,
                "end": 244,
                "decorators": [],
                "name": "List",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 200,
        "end": 206,
        "decorators": [],
        "name": "asList",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 210,
          "end": 216,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 213,
            "end": 216,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 215,
              "end": 216,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 215,
                "end": 216,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 217,
        "end": 226,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 219,
          "end": 226,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 223,
            "end": 226,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 224,
                "end": 225,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 219,
            "end": 223,
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 206,
        "end": 209,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 207,
            "end": 208,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 376,
      "end": 425,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 420,
                  "end": 421,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 413,
                "end": 419,
                "decorators": [],
                "name": "asList",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 388,
        "decorators": [],
        "name": "fn1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 389,
          "end": 393,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 390,
            "end": 393,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 392,
              "end": 393,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 392,
                "end": 393,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 394,
        "end": 403,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 396,
          "end": 403,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 400,
            "end": 403,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 401,
                "end": 402,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 396,
            "end": 400,
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 505,
      "end": 554,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 542,
                "end": 548,
                "decorators": [],
                "name": "asList",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 514,
        "end": 517,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 518,
          "end": 522,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 519,
            "end": 522,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 521,
              "end": 522,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 521,
                "end": 522,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 523,
        "end": 532,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 525,
          "end": 532,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 529,
            "end": 532,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 530,
                "end": 531,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 530,
                  "end": 531,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 525,
            "end": 529,
            "decorators": [],
            "name": "List",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
