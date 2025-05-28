__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 371,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 54,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 18,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "thing1",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 35,
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 43,
          "end": 51,
          "key": {
            "type": "Identifier",
            "start": 43,
            "end": 48,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 50,
            "end": 51,
            "value": 0,
            "raw": "0"
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 55,
      "end": 111,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 62,
          "end": 73,
          "local": {
            "type": "Identifier",
            "start": 67,
            "end": 73,
            "decorators": [],
            "name": "thing2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 79,
        "end": 90,
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 98,
          "end": 108,
          "key": {
            "type": "Identifier",
            "start": 98,
            "end": 103,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "TemplateLiteral",
            "start": 105,
            "end": 108,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 105,
                "end": 108,
                "value": {
                  "cooked": "a",
                  "raw": "a"
                },
                "tail": true
              }
            ],
            "expressions": []
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 112,
      "end": 169,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 119,
          "end": 130,
          "local": {
            "type": "Identifier",
            "start": 124,
            "end": 130,
            "decorators": [],
            "name": "thing3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 136,
        "end": 147,
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 155,
          "end": 166,
          "key": {
            "type": "Identifier",
            "start": 155,
            "end": 160,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 162,
            "end": 166,
            "value": null,
            "raw": "/a/g",
            "regex": {
              "flags": "g",
              "pattern": "a"
            }
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 170,
      "end": 228,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 177,
          "end": 188,
          "local": {
            "type": "Identifier",
            "start": 182,
            "end": 188,
            "decorators": [],
            "name": "thing4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 194,
        "end": 205,
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 213,
          "end": 225,
          "key": {
            "type": "Identifier",
            "start": 213,
            "end": 218,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "ArrayExpression",
            "start": 220,
            "end": 225,
            "elements": [
              {
                "type": "Literal",
                "start": 221,
                "end": 224,
                "value": "a",
                "raw": "\"a\""
              }
            ]
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 229,
      "end": 290,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 236,
          "end": 247,
          "local": {
            "type": "Identifier",
            "start": 241,
            "end": 247,
            "decorators": [],
            "name": "thing5",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 253,
        "end": 264,
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 272,
          "end": 287,
          "key": {
            "type": "Identifier",
            "start": 272,
            "end": 277,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "ObjectExpression",
            "start": 279,
            "end": 287,
            "properties": [
              {
                "type": "Property",
                "start": 281,
                "end": 285,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 281,
                  "end": 282,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 284,
                  "end": 285,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 291,
      "end": 371,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 298,
          "end": 309,
          "local": {
            "type": "Identifier",
            "start": 303,
            "end": 309,
            "decorators": [],
            "name": "thing6",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 315,
        "end": 326,
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 334,
          "end": 346,
          "key": {
            "type": "Identifier",
            "start": 334,
            "end": 338,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 340,
            "end": 346,
            "value": "json",
            "raw": "\"json\""
          }
        },
        {
          "type": "ImportAttribute",
          "start": 348,
          "end": 368,
          "key": {
            "type": "Identifier",
            "start": 348,
            "end": 353,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "CallExpression",
            "start": 355,
            "end": 368,
            "callee": {
              "type": "MemberExpression",
              "start": 355,
              "end": 366,
              "object": {
                "type": "Literal",
                "start": 355,
                "end": 357,
                "value": 0,
                "raw": "0."
              },
              "property": {
                "type": "Identifier",
                "start": 358,
                "end": 366,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          }
        }
      ],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
