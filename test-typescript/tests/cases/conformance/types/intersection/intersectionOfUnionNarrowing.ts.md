__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 18,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 20,
                "end": 37,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 22,
                    "end": 35,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 27,
                      "decorators": [],
                      "name": "aProp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 29,
                        "end": 35
                      }
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 45,
                "end": 62,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 47,
                    "end": 60,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 52,
                      "decorators": [],
                      "name": "bProp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      }
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
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 66,
      "end": 136,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "AorB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 78,
        "end": 135,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 78,
            "end": 105,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 80,
                "end": 90,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 83,
                    "end": 89
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 91,
                "end": 103,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 94,
                    "end": 103
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 108,
            "end": 135,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 110,
                "end": 123,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 122,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 113,
                    "end": 122
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 124,
                "end": 133,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 125,
                  "end": 133,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 127,
                    "end": 133
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 163,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 163,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 155,
                "end": 163,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 155,
                    "end": 156,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 163,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 163,
                      "decorators": [],
                      "name": "AorB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 166,
      "end": 296,
      "alternate": {
        "type": "BlockStatement",
        "start": 211,
        "end": 296,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 284,
            "end": 294,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 284,
              "end": 293,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 284,
                "end": 287,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 287,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 288,
                "end": 293,
                "decorators": [],
                "name": "bProp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 189,
        "end": 205,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 193,
            "end": 203,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 193,
              "end": 202,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 193,
                "end": 196,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "q",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 197,
                "end": 202,
                "decorators": [],
                "name": "aProp",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 170,
        "end": 187,
        "operator": "!==",
        "left": {
          "type": "MemberExpression",
          "start": 170,
          "end": 173,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
