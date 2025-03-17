__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 471,
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
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 290,
            "end": 293,
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
            "start": 294,
            "end": 297,
            "object": {
              "type": "Identifier",
              "start": 294,
              "end": 295,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 296,
              "end": 297,
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
      "start": 300,
      "end": 323,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 322,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 316,
            "name": "m",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 307,
              "end": 316,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 309,
                "end": 316
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 319,
            "end": 322,
            "object": {
              "type": "Identifier",
              "start": 319,
              "end": 320,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
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
      "start": 342,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 347,
        "end": 348,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "start": 411,
      "end": 470,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 417,
          "end": 469,
          "id": {
            "type": "Identifier",
            "start": 417,
            "end": 419,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 429,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 431,
                    "end": 435,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 441,
                  "end": 451,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 444,
                    "end": 451,
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
              "start": 464,
              "end": 469,
              "typeName": {
                "type": "Identifier",
                "start": 464,
                "end": 469,
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
