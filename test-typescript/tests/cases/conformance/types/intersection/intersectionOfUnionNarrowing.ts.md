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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 38,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 22,
                      "end": 27,
                      "name": "aProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 29,
                        "end": 35
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 63,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 47,
                      "end": 52,
                      "name": "bProp",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 54,
                        "end": 60
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "TSTypeAliasDeclaration",
      "start": 66,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "name": "AorB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 81,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 81,
                  "end": 89,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 83,
                    "end": 89
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 91,
                "end": 103,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 92,
                  "end": 103,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 94,
                    "end": 103
                  }
                },
                "accessibility": null,
                "static": false
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 111,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 122,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 113,
                    "end": 122
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 124,
                "end": 133,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 124,
                  "end": 125,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 125,
                  "end": 133,
                  "typeAnnotation": {
                    "type": "TSObjectKeyword",
                    "start": 127,
                    "end": 133
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 163,
            "name": "q",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 155,
                      "end": 156,
                      "name": "X",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 159,
                    "end": 163,
                    "typeName": {
                      "type": "Identifier",
                      "start": 159,
                      "end": 163,
                      "name": "AorB",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 166,
      "end": 296,
      "test": {
        "type": "BinaryExpression",
        "start": 170,
        "end": 187,
        "left": {
          "type": "MemberExpression",
          "start": 170,
          "end": 173,
          "object": {
            "type": "Identifier",
            "start": 170,
            "end": 171,
            "name": "q",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "start": 178,
          "end": 187,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
            "expression": {
              "type": "MemberExpression",
              "start": 193,
              "end": 202,
              "object": {
                "type": "MemberExpression",
                "start": 193,
                "end": 196,
                "object": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 195,
                  "end": 196,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 197,
                "end": 202,
                "name": "aProp",
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
      "alternate": {
        "type": "BlockStatement",
        "start": 211,
        "end": 296,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 284,
            "end": 294,
            "expression": {
              "type": "MemberExpression",
              "start": 284,
              "end": 293,
              "object": {
                "type": "MemberExpression",
                "start": 284,
                "end": 287,
                "object": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "name": "q",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 287,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 288,
                "end": 293,
                "name": "bProp",
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
