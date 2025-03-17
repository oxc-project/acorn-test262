__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 272,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 13,
            "end": 37,
            "arguments": [
              {
                "type": "Literal",
                "start": 29,
                "end": 36,
                "raw": "\"en-US\"",
                "value": "en-US"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 17,
              "end": 28,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 17,
                "end": 21,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 39,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "deDE",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 52,
            "end": 76,
            "arguments": [
              {
                "type": "Literal",
                "start": 68,
                "end": 75,
                "raw": "\"de-DE\"",
                "value": "de-DE"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 56,
              "end": 67,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 56,
                "end": 60,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 88,
            "decorators": [],
            "name": "jaJP",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 91,
            "end": 115,
            "arguments": [
              {
                "type": "Literal",
                "start": 107,
                "end": 114,
                "raw": "\"ja-JP\"",
                "value": "ja-JP"
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 95,
              "end": 106,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 95,
                "end": 99,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 100,
                "end": 106,
                "decorators": [],
                "name": "Locale",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 144,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 118,
        "end": 143,
        "arguments": [
          {
            "type": "Identifier",
            "start": 138,
            "end": 142,
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 122,
          "end": 137,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 127,
            "end": 137,
            "decorators": [],
            "name": "ListFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 179,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 145,
        "end": 178,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 165,
            "end": 177,
            "elements": [
              {
                "type": "Identifier",
                "start": 166,
                "end": 170,
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 172,
                "end": 176,
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 149,
          "end": 164,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 149,
            "end": 153,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 154,
            "end": 164,
            "decorators": [],
            "name": "ListFormat",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 180,
      "end": 221,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 180,
        "end": 220,
        "arguments": [
          {
            "type": "Identifier",
            "start": 215,
            "end": 219,
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 180,
          "end": 214,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 180,
            "end": 195,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 180,
              "end": 184,
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 185,
              "end": 195,
              "decorators": [],
              "name": "ListFormat",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 214,
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 271,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 222,
        "end": 270,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 257,
            "end": 269,
            "elements": [
              {
                "type": "Identifier",
                "start": 258,
                "end": 262,
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 264,
                "end": 268,
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 222,
          "end": 256,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 222,
            "end": 237,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 222,
              "end": 226,
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 227,
              "end": 237,
              "decorators": [],
              "name": "ListFormat",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 238,
            "end": 256,
            "decorators": [],
            "name": "supportedLocalesOf",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
