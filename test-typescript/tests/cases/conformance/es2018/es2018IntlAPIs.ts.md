__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 135,
  "end": 415,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 148,
            "name": "locales",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 151,
            "end": 185,
            "elements": [
              {
                "type": "Literal",
                "start": 152,
                "end": 157,
                "value": "ban",
                "raw": "'ban'"
              },
              {
                "type": "Literal",
                "start": 159,
                "end": 175,
                "value": "id-u-co-pinyin",
                "raw": "'id-u-co-pinyin'"
              },
              {
                "type": "Literal",
                "start": 177,
                "end": 184,
                "value": "de-ID",
                "raw": "'de-ID'"
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
      "type": "VariableDeclaration",
      "start": 187,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 200,
            "name": "options",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 203,
            "end": 239,
            "expression": {
              "type": "ObjectExpression",
              "start": 203,
              "end": 230,
              "properties": [
                {
                  "type": "Property",
                  "start": 205,
                  "end": 228,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 218,
                    "name": "localeMatcher",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 220,
                    "end": 228,
                    "value": "lookup",
                    "raw": "'lookup'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 234,
              "end": 239,
              "typeName": {
                "type": "Identifier",
                "start": 234,
                "end": 239,
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
      "type": "ExpressionStatement",
      "start": 241,
      "end": 319,
      "expression": {
        "type": "CallExpression",
        "start": 241,
        "end": 318,
        "callee": {
          "type": "MemberExpression",
          "start": 241,
          "end": 252,
          "object": {
            "type": "Identifier",
            "start": 241,
            "end": 248,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 249,
            "end": 252,
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
            "start": 253,
            "end": 317,
            "callee": {
              "type": "MemberExpression",
              "start": 253,
              "end": 311,
              "object": {
                "type": "CallExpression",
                "start": 253,
                "end": 306,
                "callee": {
                  "type": "MemberExpression",
                  "start": 253,
                  "end": 288,
                  "object": {
                    "type": "MemberExpression",
                    "start": 253,
                    "end": 269,
                    "object": {
                      "type": "Identifier",
                      "start": 253,
                      "end": 257,
                      "name": "Intl",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 269,
                      "name": "PluralRules",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 288,
                    "name": "supportedLocalesOf",
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
                    "start": 289,
                    "end": 296,
                    "name": "locales",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 298,
                    "end": 305,
                    "name": "options",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 307,
                "end": 311,
                "name": "join",
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
                "start": 312,
                "end": 316,
                "value": ", ",
                "raw": "', '"
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
      "type": "VariableDeclaration",
      "start": 321,
      "end": 378,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 377,
          "id": {
            "type": "ArrayPattern",
            "start": 327,
            "end": 335,
            "elements": [
              {
                "type": "Identifier",
                "start": 329,
                "end": 333,
                "name": "part",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 338,
            "end": 377,
            "callee": {
              "type": "MemberExpression",
              "start": 338,
              "end": 375,
              "object": {
                "type": "NewExpression",
                "start": 338,
                "end": 361,
                "callee": {
                  "type": "MemberExpression",
                  "start": 342,
                  "end": 359,
                  "object": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 346,
                    "name": "Intl",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 359,
                    "name": "NumberFormat",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 375,
                "name": "formatToParts",
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
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 414,
      "expression": {
        "type": "CallExpression",
        "start": 379,
        "end": 413,
        "callee": {
          "type": "MemberExpression",
          "start": 379,
          "end": 390,
          "object": {
            "type": "Identifier",
            "start": 379,
            "end": 386,
            "name": "console",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 387,
            "end": 390,
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
            "start": 391,
            "end": 400,
            "object": {
              "type": "Identifier",
              "start": 391,
              "end": 395,
              "name": "part",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 396,
              "end": 400,
              "name": "type",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 402,
            "end": 412,
            "object": {
              "type": "Identifier",
              "start": 402,
              "end": 406,
              "name": "part",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 407,
              "end": 412,
              "name": "value",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
