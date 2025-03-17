__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 462,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Facts",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 13,
        "end": 39,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 15,
            "end": 37,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 16,
                "end": 27,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 37,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 30,
                "end": 37
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 41,
      "end": 86,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 69,
        "decorators": [],
        "name": "checkTruths",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 70,
          "end": 78,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 78,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 78,
                "decorators": [],
                "name": "Facts",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 85,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 81,
          "end": 85
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 136,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 110,
        "decorators": [],
        "name": "checkM",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 111,
          "end": 128,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 112,
            "end": 128,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 114,
              "end": 128,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 116,
                  "end": 126,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 119,
                      "end": 126
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 135,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 131,
          "end": 135
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 163,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 162,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 147,
            "end": 162,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 160,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 156,
                  "end": 160,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 196,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 195,
        "arguments": [
          {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 181,
          "end": 192,
          "decorators": [],
          "name": "checkTruths",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 222,
        "arguments": [
          {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 219,
          "decorators": [],
          "name": "checkM",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 241,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 240,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 236,
            "end": 239,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 224,
          "end": 235,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 224,
            "end": 231,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 232,
            "end": 235,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 313,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 307,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 307,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 300,
                "end": 307
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 310,
            "end": 313,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 333,
      "end": 357,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 339,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 342,
        "end": 356,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 348,
          "end": 356,
          "exprName": {
            "type": "Identifier",
            "start": 355,
            "end": 356,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 460,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 410,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 413,
            "end": 460,
            "expression": {
              "type": "ObjectExpression",
              "start": 413,
              "end": 444,
              "properties": [
                {
                  "type": "Property",
                  "start": 419,
                  "end": 426,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 422,
                    "end": 426,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "Property",
                  "start": 432,
                  "end": 442,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 435,
                    "end": 442,
                    "raw": "\"false\"",
                    "value": "false"
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 455,
              "end": 460,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 455,
                "end": 460,
                "decorators": [],
                "name": "Facts",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
