__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 21,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
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
        "end": 12,
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 76,
      "body": {
        "type": "TSInterfaceBody",
        "start": 57,
        "end": 76,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 63,
            "end": 74,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 73,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 67,
                "end": 73
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 54,
          "end": 56,
          "expression": {
            "type": "Identifier",
            "start": 54,
            "end": 56,
            "decorators": [],
            "name": "I1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 45,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 110,
      "body": {
        "type": "TSInterfaceBody",
        "start": 91,
        "end": 110,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 97,
            "end": 108,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 97,
              "end": 99,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 107,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 101,
                "end": 107
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 90,
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 116,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 116,
            "end": 117,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 120,
            "end": 146,
            "properties": [
              {
                "type": "Property",
                "start": 122,
                "end": 128,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 124,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 126,
                  "end": 128,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 130,
                "end": 136,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 130,
                  "end": 132,
                  "decorators": [],
                  "name": "p2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 134,
                  "end": 136,
                  "raw": "20",
                  "value": 20,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 138,
                "end": 144,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 140,
                  "decorators": [],
                  "name": "p3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 142,
                  "end": 144,
                  "raw": "30",
                  "value": 30,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 148,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 166,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 162,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 162,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 155,
                "end": 162,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 155,
                    "end": 157,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 157,
                      "decorators": [],
                      "name": "I1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 160,
                    "end": 162,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 160,
                      "end": 162,
                      "decorators": [],
                      "name": "I3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 165,
            "end": 166,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 168,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 172,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 172,
            "end": 177,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 173,
              "end": 177,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 175,
                "end": 177,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 177,
                  "decorators": [],
                  "name": "I2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 180,
            "end": 181,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 184,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 202,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 189,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 192,
            "end": 202,
            "expression": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 193,
              "end": 200,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 193,
                  "end": 195,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 195,
                    "decorators": [],
                    "name": "I1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 198,
                  "end": 200,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 200,
                    "decorators": [],
                    "name": "I3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 218,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 208,
          "end": 217,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 212,
            "end": 217,
            "expression": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 213,
              "end": 215,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 213,
                "end": 215,
                "decorators": [],
                "name": "I3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 219,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 223,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 223,
            "end": 224,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 227,
            "end": 232,
            "expression": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 228,
              "end": 230,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 228,
                "end": 230,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 247,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 242,
            "end": 247,
            "expression": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 243,
              "end": 245,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 243,
                "end": 245,
                "decorators": [],
                "name": "I1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
