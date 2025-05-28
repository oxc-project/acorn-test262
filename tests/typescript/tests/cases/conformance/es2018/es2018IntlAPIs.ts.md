__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 135,
  "end": 414,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 135,
      "end": 186,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 141,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 141,
            "end": 148,
            "decorators": [],
            "name": "locales",
            "optional": false,
            "typeAnnotation": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 240,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 200,
            "decorators": [],
            "name": "options",
            "optional": false,
            "typeAnnotation": null
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 218,
                    "decorators": [],
                    "name": "localeMatcher",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 220,
                    "end": 228,
                    "value": "lookup",
                    "raw": "'lookup'"
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
              "start": 234,
              "end": 239,
              "typeName": {
                "type": "Identifier",
                "start": 234,
                "end": 239,
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 249,
            "end": 252,
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
                      "decorators": [],
                      "name": "Intl",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 269,
                      "decorators": [],
                      "name": "PluralRules",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 288,
                    "decorators": [],
                    "name": "supportedLocalesOf",
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
                    "start": 289,
                    "end": 296,
                    "decorators": [],
                    "name": "locales",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 298,
                    "end": 305,
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 307,
                "end": 311,
                "decorators": [],
                "name": "join",
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
                "start": 312,
                "end": 316,
                "value": ", ",
                "raw": "', '"
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
      "type": "VariableDeclaration",
      "start": 321,
      "end": 378,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 377,
          "id": {
            "type": "ArrayPattern",
            "start": 327,
            "end": 335,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 329,
                "end": 333,
                "decorators": [],
                "name": "part",
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
                    "decorators": [],
                    "name": "Intl",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 359,
                    "decorators": [],
                    "name": "NumberFormat",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 362,
                "end": 375,
                "decorators": [],
                "name": "formatToParts",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
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
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 387,
            "end": 390,
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
            "start": 391,
            "end": 400,
            "object": {
              "type": "Identifier",
              "start": 391,
              "end": 395,
              "decorators": [],
              "name": "part",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 396,
              "end": 400,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          {
            "type": "MemberExpression",
            "start": 402,
            "end": 412,
            "object": {
              "type": "Identifier",
              "start": 402,
              "end": 406,
              "decorators": [],
              "name": "part",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 407,
              "end": 412,
              "decorators": [],
              "name": "value",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
