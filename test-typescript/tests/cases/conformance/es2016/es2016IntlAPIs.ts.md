__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 124,
  "end": 462,
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
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 135,
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
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 141,
                "end": 160,
                "name": "getCanonicalLocales",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 161,
                "end": 168,
                "value": "EN-US",
                "raw": "'EN-US'"
              }
            ],
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 217,
            "end": 220,
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
                "name": "Intl",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 226,
                "end": 245,
                "name": "getCanonicalLocales",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
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
                  "name": "Intl",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 340,
                  "name": "getCanonicalLocales",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 341,
                  "end": 348,
                  "value": "EN_US",
                  "raw": "'EN_US'"
                }
              ],
              "optional": false,
              "typeArguments": null
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
          "name": "err",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                    "name": "console",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 380,
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
                        "name": "err",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 385,
                        "end": 393,
                        "name": "toString",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  }
                ],
                "optional": false,
                "typeArguments": null
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
