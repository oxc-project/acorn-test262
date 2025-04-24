__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 375,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 54,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 44,
          "end": 52,
          "key": {
            "type": "Identifier",
            "start": 44,
            "end": 49,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 51,
            "end": 52,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 35,
        "raw": "\"./mod.mjs\"",
        "value": "./mod.mjs"
      },
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
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 56,
      "end": 112,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 100,
          "end": 110,
          "key": {
            "type": "Identifier",
            "start": 100,
            "end": 105,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "TemplateLiteral",
            "start": 107,
            "end": 110,
            "expressions": [],
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 107,
                "end": 110,
                "tail": true,
                "value": {
                  "cooked": "a",
                  "raw": "a"
                }
              }
            ]
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 80,
        "end": 91,
        "raw": "\"./mod.mjs\"",
        "value": "./mod.mjs"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 63,
          "end": 74,
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 74,
            "decorators": [],
            "name": "thing2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 114,
      "end": 171,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 158,
          "end": 169,
          "key": {
            "type": "Identifier",
            "start": 158,
            "end": 163,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 165,
            "end": 169,
            "raw": "/a/g",
            "regex": {
              "flags": "g",
              "pattern": "a"
            },
            "value": null
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 138,
        "end": 149,
        "raw": "\"./mod.mjs\"",
        "value": "./mod.mjs"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 121,
          "end": 132,
          "local": {
            "type": "Identifier",
            "start": 126,
            "end": 132,
            "decorators": [],
            "name": "thing3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 173,
      "end": 231,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 217,
          "end": 229,
          "key": {
            "type": "Identifier",
            "start": 217,
            "end": 222,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "ArrayExpression",
            "start": 224,
            "end": 229,
            "elements": [
              {
                "type": "Literal",
                "start": 225,
                "end": 228,
                "raw": "\"a\"",
                "value": "a"
              }
            ]
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 197,
        "end": 208,
        "raw": "\"./mod.mjs\"",
        "value": "./mod.mjs"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 180,
          "end": 191,
          "local": {
            "type": "Identifier",
            "start": 185,
            "end": 191,
            "decorators": [],
            "name": "thing4",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 233,
      "end": 294,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 277,
          "end": 292,
          "key": {
            "type": "Identifier",
            "start": 277,
            "end": 282,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "ObjectExpression",
            "start": 284,
            "end": 292,
            "properties": [
              {
                "type": "Property",
                "start": 286,
                "end": 290,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 287,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 289,
                  "end": 290,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 257,
        "end": 268,
        "raw": "\"./mod.mjs\"",
        "value": "./mod.mjs"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 240,
          "end": 251,
          "local": {
            "type": "Identifier",
            "start": 245,
            "end": 251,
            "decorators": [],
            "name": "thing5",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 296,
      "end": 375,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 340,
          "end": 352,
          "key": {
            "type": "Identifier",
            "start": 340,
            "end": 344,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 346,
            "end": 352,
            "raw": "\"json\"",
            "value": "json"
          }
        },
        {
          "type": "ImportAttribute",
          "start": 354,
          "end": 374,
          "key": {
            "type": "Identifier",
            "start": 354,
            "end": 359,
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "CallExpression",
            "start": 361,
            "end": 374,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 361,
              "end": 372,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 361,
                "end": 363,
                "raw": "0.",
                "value": 0
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 364,
                "end": 372,
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 320,
        "end": 331,
        "raw": "\"./mod.mjs\"",
        "value": "./mod.mjs"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 303,
          "end": 314,
          "local": {
            "type": "Identifier",
            "start": 308,
            "end": 314,
            "decorators": [],
            "name": "thing6",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
