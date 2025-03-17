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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "name": "Facts",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 13,
        "end": 39,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 15,
            "end": 37,
            "parameters": [
              {
                "type": "Identifier",
                "start": 16,
                "end": 27,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 19,
                  "end": 27,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 21,
                    "end": 27
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 37,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 30,
                "end": 37
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 41,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 69,
        "name": "checkTruths",
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
          "start": 70,
          "end": 78,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 78,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 73,
              "end": 78,
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 78,
                "name": "Facts",
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 85,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 81,
          "end": 85
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 110,
        "name": "checkM",
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
          "start": 111,
          "end": 128,
          "name": "x",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 117,
                    "end": 126,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 119,
                      "end": 126
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 129,
        "end": 135,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 131,
          "end": 135
        }
      }
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
          "id": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "name": "m",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 156,
                  "end": 160,
                  "value": true,
                  "raw": "true"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 196,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 195,
        "callee": {
          "type": "Identifier",
          "start": 181,
          "end": 192,
          "name": "checkTruths",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 193,
            "end": 194,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 213,
      "end": 223,
      "expression": {
        "type": "CallExpression",
        "start": 213,
        "end": 222,
        "callee": {
          "type": "Identifier",
          "start": 213,
          "end": 219,
          "name": "checkM",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 241,
      "expression": {
        "type": "CallExpression",
        "start": 224,
        "end": 240,
        "callee": {
          "type": "MemberExpression",
          "start": 224,
          "end": 235,
          "object": {
            "type": "Identifier",
            "start": 224,
            "end": 231,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 232,
            "end": 235,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 236,
            "end": 239,
            "object": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 307,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 298,
              "end": 307,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 300,
                "end": 307
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 310,
            "end": 313,
            "object": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 333,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 339,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 410,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 419,
                    "end": 420,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 422,
                    "end": 426,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 432,
                  "end": 442,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 432,
                    "end": 433,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 435,
                    "end": 442,
                    "value": "false",
                    "raw": "\"false\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 455,
              "end": 460,
              "typeName": {
                "type": "Identifier",
                "start": 455,
                "end": 460,
                "name": "Facts",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
