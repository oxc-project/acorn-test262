__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 553,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 71,
      "end": 130,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 84,
        "end": 130,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 90,
            "end": 92,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 97,
            "end": 128,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 110,
              "end": 128,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 120,
                  "end": 122,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "g",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 131,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 155,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 155,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 151,
                    "end": 153,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 158,
      "end": 183,
      "body": {
        "type": "TSEnumBody",
        "start": 165,
        "end": 183,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 167,
            "end": 172,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 171,
              "end": 172,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "TSEnumMember",
            "start": 174,
            "end": 181,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 178,
              "end": 181,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 184,
      "end": 204,
      "body": {
        "type": "TSInterfaceBody",
        "start": 196,
        "end": 204,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 198,
            "end": 202,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 204,
      "end": 205
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 206,
      "end": 224,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 215,
        "end": 223,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 217,
            "end": 221,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 220,
                "end": 221,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 225,
      "end": 243,
      "body": {
        "type": "TSModuleBlock",
        "start": 237,
        "end": 243,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 241,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 236,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 402,
      "end": 432,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 409,
        "end": 432,
        "body": {
          "type": "TSInterfaceBody",
          "start": 424,
          "end": 432,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 426,
              "end": 430,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 427,
                "end": 430,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 429,
                  "end": 430,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 419,
          "end": 420,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 420,
          "end": 423,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 421,
              "end": 422,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 421,
                "end": 422,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ClassDeclaration",
      "start": 434,
      "end": 469,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 442,
        "end": 469,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 467,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 453,
              "end": 467,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 456,
                "end": 467,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 458,
                    "end": 465,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 458,
                      "end": 464,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 458,
                        "end": 462
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 464,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 441,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 470,
      "end": 472,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 470,
        "end": 471,
        "decorators": [],
        "name": "P",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 511,
      "end": 530,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 524,
        "end": 530,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 526,
            "end": 528,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 521,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 531,
      "end": 553,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 539,
        "end": 553,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 541,
            "end": 551,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 541,
              "end": 542,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 542,
              "end": 551,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 545,
                "end": 551,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 547,
                    "end": 549,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 548,
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 538,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
