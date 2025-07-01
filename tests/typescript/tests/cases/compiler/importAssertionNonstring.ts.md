__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing1",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 18
          },
          "start": 7,
          "end": 18
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 24,
        "end": 35
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 49
          },
          "value": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 51,
            "end": 52
          },
          "start": 44,
          "end": 52
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 54
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing2",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 74
          },
          "start": 63,
          "end": 74
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 80,
        "end": 91
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 100,
            "end": 105
          },
          "value": {
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": true,
                "start": 107,
                "end": 110
              }
            ],
            "expressions": [],
            "start": 107,
            "end": 110
          },
          "start": 100,
          "end": 110
        }
      ],
      "importKind": "value",
      "start": 56,
      "end": 112
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing3",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 132
          },
          "start": 121,
          "end": 132
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 138,
        "end": 149
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 158,
            "end": 163
          },
          "value": {
            "type": "Literal",
            "value": null,
            "raw": "/a/g",
            "regex": {
              "pattern": "a",
              "flags": "g"
            },
            "start": 165,
            "end": 169
          },
          "start": 158,
          "end": 169
        }
      ],
      "importKind": "value",
      "start": 114,
      "end": 171
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing4",
            "optional": false,
            "typeAnnotation": null,
            "start": 185,
            "end": 191
          },
          "start": 180,
          "end": 191
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 197,
        "end": 208
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 222
          },
          "value": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 225,
                "end": 228
              }
            ],
            "start": 224,
            "end": 229
          },
          "start": 217,
          "end": 229
        }
      ],
      "importKind": "value",
      "start": 173,
      "end": 231
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing5",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 251
          },
          "start": 240,
          "end": 251
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 257,
        "end": 268
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 277,
            "end": 282
          },
          "value": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 286,
                  "end": 287
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 289,
                  "end": 290
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 286,
                "end": 290
              }
            ],
            "start": 284,
            "end": 292
          },
          "start": 277,
          "end": 292
        }
      ],
      "importKind": "value",
      "start": 233,
      "end": 294
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing6",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 314
          },
          "start": 303,
          "end": 314
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./mod.mjs",
        "raw": "\"./mod.mjs\"",
        "start": 320,
        "end": 331
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 344
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 346,
            "end": 352
          },
          "start": 340,
          "end": 352
        },
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "field",
            "optional": false,
            "typeAnnotation": null,
            "start": 354,
            "end": 359
          },
          "value": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": 0,
                "raw": "0.",
                "start": 361,
                "end": 363
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toString",
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 372
              },
              "optional": false,
              "computed": false,
              "start": 361,
              "end": 372
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 361,
            "end": 374
          },
          "start": 354,
          "end": 374
        }
      ],
      "importKind": "value",
      "start": 296,
      "end": 375
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 375
}
```
