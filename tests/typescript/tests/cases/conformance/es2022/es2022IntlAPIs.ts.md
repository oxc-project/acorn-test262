__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "timezoneNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 157
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "short",
                  "raw": "'short'",
                  "start": 161,
                  "end": 168
                },
                {
                  "type": "Literal",
                  "value": "long",
                  "raw": "'long'",
                  "start": 170,
                  "end": 176
                },
                {
                  "type": "Literal",
                  "value": "shortOffset",
                  "raw": "'shortOffset'",
                  "start": 178,
                  "end": 191
                },
                {
                  "type": "Literal",
                  "value": "longOffset",
                  "raw": "'longOffset'",
                  "start": 193,
                  "end": 205
                },
                {
                  "type": "Literal",
                  "value": "shortGeneric",
                  "raw": "'shortGeneric'",
                  "start": 207,
                  "end": 221
                },
                {
                  "type": "Literal",
                  "value": "longGeneric",
                  "raw": "'longGeneric'",
                  "start": 223,
                  "end": 236
                }
              ],
              "start": 160,
              "end": 237
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 246
              },
              "typeArguments": null,
              "start": 241,
              "end": 246
            },
            "start": 160,
            "end": 246
          },
          "definite": false,
          "start": 144,
          "end": 246
        }
      ],
      "declare": false,
      "start": 138,
      "end": 247
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "zoneName",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 267
            },
            "init": null,
            "definite": false,
            "start": 259,
            "end": 267
          }
        ],
        "declare": false,
        "start": 253,
        "end": 267
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "timezoneNames",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 284
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "formatter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 303
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 314
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "DateTimeFormat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 329
                    },
                    "optional": false,
                    "computed": false,
                    "start": 310,
                    "end": 329
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "en-US",
                      "raw": "'en-US'",
                      "start": 330,
                      "end": 337
                    },
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "timeZone",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 345,
                            "end": 353
                          },
                          "value": {
                            "type": "Literal",
                            "value": "America/Los_Angeles",
                            "raw": "'America/Los_Angeles'",
                            "start": 355,
                            "end": 376
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 345,
                          "end": 376
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "timeZoneName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 382,
                            "end": 394
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "zoneName",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 396,
                            "end": 404
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 382,
                          "end": 404
                        }
                      ],
                      "start": 339,
                      "end": 409
                    }
                  ],
                  "start": 306,
                  "end": 410
                },
                "definite": false,
                "start": 294,
                "end": 410
              }
            ],
            "declare": false,
            "start": 290,
            "end": 411
          }
        ],
        "start": 286,
        "end": 413
      },
      "start": 248,
      "end": 413
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "enumerationKeys",
            "optional": false,
            "typeAnnotation": null,
            "start": 421,
            "end": 436
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "calendar",
                  "raw": "'calendar'",
                  "start": 440,
                  "end": 450
                },
                {
                  "type": "Literal",
                  "value": "collation",
                  "raw": "'collation'",
                  "start": 452,
                  "end": 463
                },
                {
                  "type": "Literal",
                  "value": "currency",
                  "raw": "'currency'",
                  "start": 465,
                  "end": 475
                },
                {
                  "type": "Literal",
                  "value": "numberingSystem",
                  "raw": "'numberingSystem'",
                  "start": 477,
                  "end": 494
                },
                {
                  "type": "Literal",
                  "value": "timeZone",
                  "raw": "'timeZone'",
                  "start": 496,
                  "end": 506
                },
                {
                  "type": "Literal",
                  "value": "unit",
                  "raw": "'unit'",
                  "start": 508,
                  "end": 514
                }
              ],
              "start": 439,
              "end": 515
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 524
              },
              "typeArguments": null,
              "start": 519,
              "end": 524
            },
            "start": 439,
            "end": 524
          },
          "definite": false,
          "start": 421,
          "end": 524
        }
      ],
      "declare": false,
      "start": 415,
      "end": 525
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null,
              "start": 537,
              "end": 540
            },
            "init": null,
            "definite": false,
            "start": 537,
            "end": 540
          }
        ],
        "declare": false,
        "start": 531,
        "end": 540
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumerationKeys",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 559
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "supported",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 569,
                  "end": 578
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 581,
                      "end": 585
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "supportedValuesOf",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 586,
                      "end": 603
                    },
                    "optional": false,
                    "computed": false,
                    "start": 581,
                    "end": 603
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 607
                    }
                  ],
                  "optional": false,
                  "start": 581,
                  "end": 608
                },
                "definite": false,
                "start": 569,
                "end": 608
              }
            ],
            "declare": false,
            "start": 565,
            "end": 609
          }
        ],
        "start": 561,
        "end": 611
      },
      "start": 526,
      "end": 611
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 138,
  "end": 611
}
```
