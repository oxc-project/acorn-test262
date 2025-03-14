es2022IntlAPIs.ts
```json
{
  "type": "Program",
  "start": 138,
  "end": 612,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 157,
            "decorators": [],
            "name": "timezoneNames",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 160,
            "end": 246,
            "expression": {
              "type": "ArrayExpression",
              "start": 160,
              "end": 237,
              "elements": [
                {
                  "type": "Literal",
                  "start": 161,
                  "end": 168,
                  "raw": "'short'",
                  "value": "short"
                },
                {
                  "type": "Literal",
                  "start": 170,
                  "end": 176,
                  "raw": "'long'",
                  "value": "long"
                },
                {
                  "type": "Literal",
                  "start": 178,
                  "end": 191,
                  "raw": "'shortOffset'",
                  "value": "shortOffset"
                },
                {
                  "type": "Literal",
                  "start": 193,
                  "end": 205,
                  "raw": "'longOffset'",
                  "value": "longOffset"
                },
                {
                  "type": "Literal",
                  "start": 207,
                  "end": 221,
                  "raw": "'shortGeneric'",
                  "value": "shortGeneric"
                },
                {
                  "type": "Literal",
                  "start": 223,
                  "end": 236,
                  "raw": "'longGeneric'",
                  "value": "longGeneric"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 241,
              "end": 246,
              "typeName": {
                "type": "Identifier",
                "start": 241,
                "end": 246,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 248,
      "end": 413,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 286,
        "end": 413,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 290,
            "end": 411,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 294,
                "end": 410,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 303,
                  "decorators": [],
                  "name": "formatter",
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 306,
                  "end": 410,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 330,
                      "end": 337,
                      "raw": "'en-US'",
                      "value": "en-US"
                    },
                    {
                      "type": "ObjectExpression",
                      "start": 339,
                      "end": 409,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 345,
                          "end": 376,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 345,
                            "end": 353,
                            "decorators": [],
                            "name": "timeZone",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 355,
                            "end": 376,
                            "raw": "'America/Los_Angeles'",
                            "value": "America/Los_Angeles"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 382,
                          "end": 404,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 382,
                            "end": 394,
                            "decorators": [],
                            "name": "timeZoneName",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 396,
                            "end": 404,
                            "decorators": [],
                            "name": "zoneName",
                            "optional": false
                          }
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 310,
                    "end": 329,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 314,
                      "decorators": [],
                      "name": "Intl",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 329,
                      "decorators": [],
                      "name": "DateTimeFormat",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 253,
        "end": 267,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 259,
            "end": 267,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 259,
              "end": 267,
              "decorators": [],
              "name": "zoneName",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 271,
        "end": 284,
        "decorators": [],
        "name": "timezoneNames",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 525,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 524,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 436,
            "decorators": [],
            "name": "enumerationKeys",
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 439,
            "end": 524,
            "expression": {
              "type": "ArrayExpression",
              "start": 439,
              "end": 515,
              "elements": [
                {
                  "type": "Literal",
                  "start": 440,
                  "end": 450,
                  "raw": "'calendar'",
                  "value": "calendar"
                },
                {
                  "type": "Literal",
                  "start": 452,
                  "end": 463,
                  "raw": "'collation'",
                  "value": "collation"
                },
                {
                  "type": "Literal",
                  "start": 465,
                  "end": 475,
                  "raw": "'currency'",
                  "value": "currency"
                },
                {
                  "type": "Literal",
                  "start": 477,
                  "end": 494,
                  "raw": "'numberingSystem'",
                  "value": "numberingSystem"
                },
                {
                  "type": "Literal",
                  "start": 496,
                  "end": 506,
                  "raw": "'timeZone'",
                  "value": "timeZone"
                },
                {
                  "type": "Literal",
                  "start": 508,
                  "end": 514,
                  "raw": "'unit'",
                  "value": "unit"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 519,
              "end": 524,
              "typeName": {
                "type": "Identifier",
                "start": 519,
                "end": 524,
                "decorators": [],
                "name": "const",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ForOfStatement",
      "start": 526,
      "end": 611,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 561,
        "end": 611,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 565,
            "end": 609,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 569,
                "end": 608,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 578,
                  "decorators": [],
                  "name": "supported",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 581,
                  "end": 608,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 604,
                      "end": 607,
                      "decorators": [],
                      "name": "key",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 581,
                    "end": 603,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 585,
                      "decorators": [],
                      "name": "Intl",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 603,
                      "decorators": [],
                      "name": "supportedValuesOf",
                      "optional": false
                    }
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 531,
        "end": 540,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 537,
            "end": 540,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 537,
              "end": 540,
              "decorators": [],
              "name": "key",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "Identifier",
        "start": 544,
        "end": 559,
        "decorators": [],
        "name": "enumerationKeys",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
