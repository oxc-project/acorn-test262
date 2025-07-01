__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 124,
            "end": 131
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 135
          },
          "optional": false,
          "computed": false,
          "start": 124,
          "end": 135
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 140
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getCanonicalLocales",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 160
              },
              "optional": false,
              "computed": false,
              "start": 136,
              "end": 160
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "EN-US",
                "raw": "'EN-US'",
                "start": 161,
                "end": 168
              }
            ],
            "optional": false,
            "start": 136,
            "end": 169
          }
        ],
        "optional": false,
        "start": 124,
        "end": 170
      },
      "directive": null,
      "start": 124,
      "end": 171
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 216
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          },
          "optional": false,
          "computed": false,
          "start": 209,
          "end": 220
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 225
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getCanonicalLocales",
                "optional": false,
                "typeAnnotation": null,
                "start": 226,
                "end": 245
              },
              "optional": false,
              "computed": false,
              "start": 221,
              "end": 245
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "EN-US",
                    "raw": "'EN-US'",
                    "start": 247,
                    "end": 254
                  },
                  {
                    "type": "Literal",
                    "value": "Fr",
                    "raw": "'Fr'",
                    "start": 256,
                    "end": 260
                  }
                ],
                "start": 246,
                "end": 261
              }
            ],
            "optional": false,
            "start": 221,
            "end": 262
          }
        ],
        "optional": false,
        "start": 209,
        "end": 263
      },
      "directive": null,
      "start": 209,
      "end": 264
    },
    {
      "type": "TryStatement",
      "block": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Intl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getCanonicalLocales",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 340
                },
                "optional": false,
                "computed": false,
                "start": 316,
                "end": 340
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "EN_US",
                  "raw": "'EN_US'",
                  "start": 341,
                  "end": 348
                }
              ],
              "optional": false,
              "start": 316,
              "end": 349
            },
            "directive": null,
            "start": 316,
            "end": 350
          }
        ],
        "start": 312,
        "end": 352
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "err",
          "optional": false,
          "typeAnnotation": null,
          "start": 360,
          "end": 363
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "console",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 376
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "log",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 377,
                    "end": 380
                  },
                  "optional": false,
                  "computed": false,
                  "start": 369,
                  "end": 380
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "err",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 384
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 385,
                        "end": 393
                      },
                      "optional": false,
                      "computed": false,
                      "start": 381,
                      "end": 393
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 381,
                    "end": 395
                  }
                ],
                "optional": false,
                "start": 369,
                "end": 396
              },
              "directive": null,
              "start": 369,
              "end": 397
            }
          ],
          "start": 365,
          "end": 461
        },
        "start": 353,
        "end": 461
      },
      "finalizer": null,
      "start": 308,
      "end": 461
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 124,
  "end": 461
}
```
