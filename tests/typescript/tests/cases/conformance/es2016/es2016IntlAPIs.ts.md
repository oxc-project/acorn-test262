__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 124,
  "end": 461,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 124,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 124,
        "end": 170,
        "callee": {
          "type": "MemberExpression",
          "start": 124,
          "end": 135,
          "object": {
            "type": "Identifier",
            "start": 124,
            "end": 131,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 135,
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
            "type": "CallExpression",
            "start": 136,
            "end": 169,
            "callee": {
              "type": "MemberExpression",
              "start": 136,
              "end": 160,
              "object": {
                "type": "Identifier",
                "start": 136,
                "end": 140,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 141,
                "end": 160,
                "decorators": [],
                "name": "getCanonicalLocales",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 168,
                "value": "EN-US",
                "raw": "'EN-US'"
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 209,
      "end": 264,
      "expression": {
        "type": "CallExpression",
        "start": 209,
        "end": 263,
        "callee": {
          "type": "MemberExpression",
          "start": 209,
          "end": 220,
          "object": {
            "type": "Identifier",
            "start": 209,
            "end": 216,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
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
            "type": "CallExpression",
            "start": 221,
            "end": 262,
            "callee": {
              "type": "MemberExpression",
              "start": 221,
              "end": 245,
              "object": {
                "type": "Identifier",
                "start": 221,
                "end": 225,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 245,
                "decorators": [],
                "name": "getCanonicalLocales",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 246,
                "end": 261,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 247,
                    "end": 254,
                    "value": "EN-US",
                    "raw": "'EN-US'"
                  },
                  {
                    "type": "Literal",
                    "start": 256,
                    "end": 260,
                    "value": "Fr",
                    "raw": "'Fr'"
                  }
                ]
              }
            ],
            "optional": false
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TryStatement",
      "start": 308,
      "end": 461,
      "block": {
        "type": "BlockStatement",
        "start": 312,
        "end": 352,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 316,
            "end": 350,
            "expression": {
              "type": "CallExpression",
              "start": 316,
              "end": 349,
              "callee": {
                "type": "MemberExpression",
                "start": 316,
                "end": 340,
                "object": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 320,
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 340,
                  "decorators": [],
                  "name": "getCanonicalLocales",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 341,
                  "end": 348,
                  "value": "EN_US",
                  "raw": "'EN_US'"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "handler": {
        "type": "CatchClause",
        "start": 353,
        "end": 461,
        "param": {
          "type": "Identifier",
          "start": 360,
          "end": 363,
          "decorators": [],
          "name": "err",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "BlockStatement",
          "start": 365,
          "end": 461,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 369,
              "end": 397,
              "expression": {
                "type": "CallExpression",
                "start": 369,
                "end": 396,
                "callee": {
                  "type": "MemberExpression",
                  "start": 369,
                  "end": 380,
                  "object": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 376,
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 380,
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
                    "type": "CallExpression",
                    "start": 381,
                    "end": 395,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 381,
                      "end": 393,
                      "object": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 384,
                        "decorators": [],
                        "name": "err",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 385,
                        "end": 393,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                ],
                "optional": false
              },
              "directive": null
            }
          ]
        }
      },
      "finalizer": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
