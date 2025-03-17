__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 157,
            "name": "timezoneNames",
            "typeAnnotation": null,
            "decorators": [],
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
                  "value": "short",
                  "raw": "'short'"
                },
                {
                  "type": "Literal",
                  "start": 170,
                  "end": 176,
                  "value": "long",
                  "raw": "'long'"
                },
                {
                  "type": "Literal",
                  "start": 178,
                  "end": 191,
                  "value": "shortOffset",
                  "raw": "'shortOffset'"
                },
                {
                  "type": "Literal",
                  "start": 193,
                  "end": 205,
                  "value": "longOffset",
                  "raw": "'longOffset'"
                },
                {
                  "type": "Literal",
                  "start": 207,
                  "end": 221,
                  "value": "shortGeneric",
                  "raw": "'shortGeneric'"
                },
                {
                  "type": "Literal",
                  "start": 223,
                  "end": 236,
                  "value": "longGeneric",
                  "raw": "'longGeneric'"
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
                "name": "const",
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
    },
    {
      "type": "ForOfStatement",
      "start": 248,
      "end": 413,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 253,
        "end": 267,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 259,
            "end": 267,
            "id": {
              "type": "Identifier",
              "start": 259,
              "end": 267,
              "name": "zoneName",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 271,
        "end": 284,
        "name": "timezoneNames",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 303,
                  "name": "formatter",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 306,
                  "end": 410,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 310,
                    "end": 329,
                    "object": {
                      "type": "Identifier",
                      "start": 310,
                      "end": 314,
                      "name": "Intl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 329,
                      "name": "DateTimeFormat",
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
                      "start": 330,
                      "end": 337,
                      "value": "en-US",
                      "raw": "'en-US'"
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 345,
                            "end": 353,
                            "name": "timeZone",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 355,
                            "end": 376,
                            "value": "America/Los_Angeles",
                            "raw": "'America/Los_Angeles'"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 382,
                          "end": 404,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 382,
                            "end": 394,
                            "name": "timeZoneName",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 396,
                            "end": 404,
                            "name": "zoneName",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 436,
            "name": "enumerationKeys",
            "typeAnnotation": null,
            "decorators": [],
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
                  "value": "calendar",
                  "raw": "'calendar'"
                },
                {
                  "type": "Literal",
                  "start": 452,
                  "end": 463,
                  "value": "collation",
                  "raw": "'collation'"
                },
                {
                  "type": "Literal",
                  "start": 465,
                  "end": 475,
                  "value": "currency",
                  "raw": "'currency'"
                },
                {
                  "type": "Literal",
                  "start": 477,
                  "end": 494,
                  "value": "numberingSystem",
                  "raw": "'numberingSystem'"
                },
                {
                  "type": "Literal",
                  "start": 496,
                  "end": 506,
                  "value": "timeZone",
                  "raw": "'timeZone'"
                },
                {
                  "type": "Literal",
                  "start": 508,
                  "end": 514,
                  "value": "unit",
                  "raw": "'unit'"
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
                "name": "const",
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
    },
    {
      "type": "ForOfStatement",
      "start": 526,
      "end": 611,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 531,
        "end": 540,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 537,
            "end": 540,
            "id": {
              "type": "Identifier",
              "start": 537,
              "end": 540,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 544,
        "end": 559,
        "name": "enumerationKeys",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
                "id": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 578,
                  "name": "supported",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 581,
                  "end": 608,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 581,
                    "end": 603,
                    "object": {
                      "type": "Identifier",
                      "start": 581,
                      "end": 585,
                      "name": "Intl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 603,
                      "name": "supportedValuesOf",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 604,
                      "end": 607,
                      "name": "key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
