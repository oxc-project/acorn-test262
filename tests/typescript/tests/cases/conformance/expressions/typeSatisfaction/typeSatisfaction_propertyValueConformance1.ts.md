__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 470,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 10,
        "decorators": [],
        "name": "Facts",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "checkTruths",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
              "typeName": {
                "type": "Identifier",
                "start": 73,
                "end": 78,
                "decorators": [],
                "name": "Facts",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 110,
        "decorators": [],
        "name": "checkM",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 116,
                    "end": 117,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 137,
      "end": 163,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 143,
          "end": 162,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 154,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 156,
                  "end": 160,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "checkTruths",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
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
          "decorators": [],
          "name": "checkM",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 299,
      "expression": {
        "type": "CallExpression",
        "start": 282,
        "end": 298,
        "callee": {
          "type": "MemberExpression",
          "start": 282,
          "end": 293,
          "object": {
            "type": "Identifier",
            "start": 282,
            "end": 289,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 290,
            "end": 293,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 294,
            "end": 297,
            "object": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 323,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 316,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 316,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 309,
                "end": 316
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 319,
            "end": 322,
            "object": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 342,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 348,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 351,
        "end": 365,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 357,
          "end": 365,
          "exprName": {
            "type": "Identifier",
            "start": 364,
            "end": 365,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 470,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 469,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 419,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 422,
            "end": 469,
            "expression": {
              "type": "ObjectExpression",
              "start": 422,
              "end": 453,
              "properties": [
                {
                  "type": "Property",
                  "start": 428,
                  "end": 435,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 429,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 431,
                    "end": 435,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 441,
                  "end": 451,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 444,
                    "end": 451,
                    "value": "false",
                    "raw": "\"false\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 464,
              "end": 469,
              "typeName": {
                "type": "Identifier",
                "start": 464,
                "end": 469,
                "decorators": [],
                "name": "Facts",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
