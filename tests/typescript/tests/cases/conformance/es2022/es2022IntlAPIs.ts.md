__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 138,
  "end": 611,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 247,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 246,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 157,
            "decorators": [],
            "name": "timezoneNames",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "const",
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 259,
            "end": 267,
            "id": {
              "type": "Identifier",
              "start": 259,
              "end": 267,
              "decorators": [],
              "name": "zoneName",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 271,
        "end": 284,
        "decorators": [],
        "name": "timezoneNames",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 294,
                "end": 410,
                "id": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 303,
                  "decorators": [],
                  "name": "formatter",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 329,
                      "decorators": [],
                      "name": "DateTimeFormat",
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
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 345,
                            "end": 353,
                            "decorators": [],
                            "name": "timeZone",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Literal",
                            "start": 355,
                            "end": 376,
                            "value": "America/Los_Angeles",
                            "raw": "'America/Los_Angeles'"
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 382,
                          "end": 404,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 382,
                            "end": 394,
                            "decorators": [],
                            "name": "timeZoneName",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 396,
                            "end": 404,
                            "decorators": [],
                            "name": "zoneName",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ]
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 415,
      "end": 525,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 524,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 436,
            "decorators": [],
            "name": "enumerationKeys",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "const",
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 537,
            "end": 540,
            "id": {
              "type": "Identifier",
              "start": 537,
              "end": 540,
              "decorators": [],
              "name": "key",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 544,
        "end": 559,
        "decorators": [],
        "name": "enumerationKeys",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 569,
                "end": 608,
                "id": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 578,
                  "decorators": [],
                  "name": "supported",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 603,
                      "decorators": [],
                      "name": "supportedValuesOf",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 604,
                      "end": 607,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
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
