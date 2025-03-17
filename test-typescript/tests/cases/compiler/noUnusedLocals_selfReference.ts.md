__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 554,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 71,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 84,
        "end": 130,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 90,
            "end": 92,
            "expression": {
              "type": "Identifier",
              "start": 90,
              "end": 91,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 97,
            "end": 128,
            "id": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "g",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 110,
              "end": 128,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 120,
                  "end": 122,
                  "expression": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "name": "g",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 131,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 137,
        "end": 138,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 139,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 145,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 146,
              "end": 155,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 155,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 151,
                    "end": 153,
                    "expression": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 158,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 164,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 167,
          "end": 172,
          "id": {
            "type": "Identifier",
            "start": 167,
            "end": 168,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 171,
            "end": 172,
            "value": 0,
            "raw": "0"
          },
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 174,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "MemberExpression",
            "start": 178,
            "end": 181,
            "object": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 180,
              "end": 181,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 165,
        "end": 183,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 167,
            "end": 172,
            "id": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 171,
              "end": 172,
              "value": 0,
              "raw": "0"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 174,
            "end": 181,
            "id": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 178,
              "end": 181,
              "object": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "name": "E",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 184,
      "end": 204,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 196,
        "end": 204,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 198,
            "end": 202,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "EmptyStatement",
      "start": 204,
      "end": 205
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 206,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 211,
        "end": 212,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 215,
        "end": 223,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 217,
            "end": 221,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 221,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 220,
                "end": 221,
                "typeName": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSModuleDeclaration",
      "start": 225,
      "end": 243,
      "id": {
        "type": "Identifier",
        "start": 235,
        "end": 236,
        "name": "N",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 237,
        "end": 243,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 239,
            "end": 241,
            "expression": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 402,
      "end": 432,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 409,
        "end": 432,
        "id": {
          "type": "Identifier",
          "start": 419,
          "end": 420,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 420,
          "end": 423,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 421,
              "end": 422,
              "name": {
                "type": "Identifier",
                "start": 421,
                "end": 422,
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 424,
          "end": 432,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 426,
              "end": 430,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 427,
                "end": 430,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 429,
                  "end": 430,
                  "typeName": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ClassDeclaration",
      "start": 434,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 441,
        "name": "P",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 442,
        "end": 469,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 444,
            "end": 467,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 452,
              "end": 453,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 453,
              "end": 467,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 456,
                "end": 467,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 458,
                    "end": 465,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 458,
                      "end": 464,
                      "object": {
                        "type": "ThisExpression",
                        "start": 458,
                        "end": 462
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 463,
                        "end": 464,
                        "name": "m",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 470,
      "end": 472,
      "expression": {
        "type": "Identifier",
        "start": 470,
        "end": 471,
        "name": "P",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 511,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 521,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 524,
        "end": 530,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 526,
            "end": 528,
            "expression": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 531,
      "end": 553,
      "id": {
        "type": "Identifier",
        "start": 537,
        "end": 538,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 539,
        "end": 553,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 541,
            "end": 551,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 541,
              "end": 542,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 542,
              "end": 551,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 545,
                "end": 551,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 547,
                    "end": 549,
                    "expression": {
                      "type": "Identifier",
                      "start": 547,
                      "end": 548,
                      "name": "g",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
