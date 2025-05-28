__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 37,
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
            "callee": {
              "type": "MemberExpression",
              "start": 17,
              "end": 28,
              "object": {
                "type": "Identifier",
                "start": 17,
                "end": 21,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "Locale",
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
                "start": 29,
                "end": 36,
                "value": "en-US",
                "raw": "\"en-US\""
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
      "start": 39,
      "end": 77,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 76,
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
            "callee": {
              "type": "MemberExpression",
              "start": 56,
              "end": 67,
              "object": {
                "type": "Identifier",
                "start": 56,
                "end": 60,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 61,
                "end": 67,
                "decorators": [],
                "name": "Locale",
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
                "start": 68,
                "end": 75,
                "value": "de-DE",
                "raw": "\"de-DE\""
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
      "start": 78,
      "end": 116,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 115,
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
            "callee": {
              "type": "MemberExpression",
              "start": 95,
              "end": 106,
              "object": {
                "type": "Identifier",
                "start": 95,
                "end": 99,
                "decorators": [],
                "name": "Intl",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 100,
                "end": 106,
                "decorators": [],
                "name": "Locale",
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
                "start": 107,
                "end": 114,
                "value": "ja-JP",
                "raw": "\"ja-JP\""
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 118,
      "end": 143,
      "expression": {
        "type": "NewExpression",
        "start": 118,
        "end": 142,
        "callee": {
          "type": "MemberExpression",
          "start": 122,
          "end": 136,
          "object": {
            "type": "Identifier",
            "start": 122,
            "end": 126,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 127,
            "end": 136,
            "decorators": [],
            "name": "Segmenter",
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
            "start": 137,
            "end": 141,
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 177,
      "expression": {
        "type": "NewExpression",
        "start": 144,
        "end": 176,
        "callee": {
          "type": "MemberExpression",
          "start": 148,
          "end": 162,
          "object": {
            "type": "Identifier",
            "start": 148,
            "end": 152,
            "decorators": [],
            "name": "Intl",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 153,
            "end": 162,
            "decorators": [],
            "name": "Segmenter",
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
            "start": 163,
            "end": 175,
            "elements": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 168,
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 170,
                "end": 174,
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 218,
      "expression": {
        "type": "CallExpression",
        "start": 178,
        "end": 217,
        "callee": {
          "type": "MemberExpression",
          "start": 178,
          "end": 211,
          "object": {
            "type": "MemberExpression",
            "start": 178,
            "end": 192,
            "object": {
              "type": "Identifier",
              "start": 178,
              "end": 182,
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 183,
              "end": 192,
              "decorators": [],
              "name": "Segmenter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 193,
            "end": 211,
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
            "start": 212,
            "end": 216,
            "decorators": [],
            "name": "enUS",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 219,
      "end": 267,
      "expression": {
        "type": "CallExpression",
        "start": 219,
        "end": 266,
        "callee": {
          "type": "MemberExpression",
          "start": 219,
          "end": 252,
          "object": {
            "type": "MemberExpression",
            "start": 219,
            "end": 233,
            "object": {
              "type": "Identifier",
              "start": 219,
              "end": 223,
              "decorators": [],
              "name": "Intl",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 224,
              "end": 233,
              "decorators": [],
              "name": "Segmenter",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 234,
            "end": 252,
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
            "type": "ArrayExpression",
            "start": 253,
            "end": 265,
            "elements": [
              {
                "type": "Identifier",
                "start": 254,
                "end": 258,
                "decorators": [],
                "name": "deDE",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 260,
                "end": 264,
                "decorators": [],
                "name": "jaJP",
                "optional": false,
                "typeAnnotation": null
              }
            ]
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
