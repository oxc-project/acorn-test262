__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "oops",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 20
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              },
              "start": 25,
              "end": 33
            },
            "start": 21,
            "end": 33
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 36,
            "end": 39
          },
          "start": 34,
          "end": 39
        },
        "body": null,
        "expression": false,
        "start": 7,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 40
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 41
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_default",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 24,
                "end": 26
              },
              "start": 22,
              "end": 26
            },
            "start": 14,
            "end": 26
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 26
        }
      ],
      "declare": true,
      "start": 0,
      "end": 27
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 51
      },
      "exportKind": "value",
      "start": 28,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "oops",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "not.json",
        "raw": "\"not.json\"",
        "start": 21,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 32
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "moreOops",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 54
          },
          "start": 46,
          "end": 54
        }
      ],
      "source": {
        "type": "Literal",
        "value": "actually-json",
        "raw": "\"actually-json\"",
        "start": 60,
        "end": 75
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 39,
      "end": 76
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "typed",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 110
          },
          "start": 105,
          "end": 110
        }
      ],
      "source": {
        "type": "Literal",
        "value": "actually-json/typed",
        "raw": "\"actually-json/typed\"",
        "start": 116,
        "end": 137
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 98,
      "end": 138
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 174
          },
          "start": 168,
          "end": 174
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 180,
        "end": 195
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
            "start": 203,
            "end": 207
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 209,
            "end": 215
          },
          "start": 203,
          "end": 215
        }
      ],
      "importKind": "value",
      "start": 161,
      "end": 218
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 241
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config1",
            "optional": false,
            "typeAnnotation": null,
            "start": 245,
            "end": 252
          },
          "importKind": "value",
          "start": 234,
          "end": 252
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 260,
        "end": 275
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
            "start": 283,
            "end": 287
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 289,
            "end": 295
          },
          "start": 283,
          "end": 295
        }
      ],
      "importKind": "value",
      "start": 225,
      "end": 298
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 319
          },
          "start": 312,
          "end": 319
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 325,
        "end": 340
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 305,
      "end": 341
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2Type",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 400
          },
          "start": 389,
          "end": 400
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 406,
        "end": 421
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 377,
      "end": 422
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2Type2",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 464
          },
          "start": 452,
          "end": 464
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 470,
        "end": 485
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
            "start": 493,
            "end": 497
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 499,
            "end": 505
          },
          "start": 493,
          "end": 505
        }
      ],
      "importKind": "type",
      "start": 440,
      "end": 508
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 586
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 579,
            "end": 586
          },
          "importKind": "value",
          "start": 579,
          "end": 586
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 594,
        "end": 609
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
            "start": 617,
            "end": 621
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 623,
            "end": 629
          },
          "start": 617,
          "end": 629
        }
      ],
      "importKind": "value",
      "start": 570,
      "end": 632
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config3",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 675
          },
          "start": 663,
          "end": 675
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 681,
        "end": 696
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
            "start": 704,
            "end": 708
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 710,
            "end": 716
          },
          "start": 704,
          "end": 716
        }
      ],
      "importKind": "value",
      "start": 656,
      "end": 719
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 720,
          "end": 727
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "version",
          "optional": false,
          "typeAnnotation": null,
          "start": 728,
          "end": 735
        },
        "optional": false,
        "computed": false,
        "start": 720,
        "end": 735
      },
      "directive": null,
      "start": 720,
      "end": 736
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 753
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 754,
          "end": 761
        },
        "optional": false,
        "computed": false,
        "start": 746,
        "end": 761
      },
      "directive": null,
      "start": 746,
      "end": 762
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 769
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 13
          },
          "start": 7,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 19,
        "end": 34
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
            "start": 42,
            "end": 46
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 48,
            "end": 54
          },
          "start": 42,
          "end": 54
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 57
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 81
          },
          "start": 74,
          "end": 81
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 87,
        "end": 102
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 67,
      "end": 103
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 126
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 126
          },
          "importKind": "value",
          "start": 119,
          "end": 126
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 134,
        "end": 149
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 110,
      "end": 150
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "config3",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 176
          },
          "start": 164,
          "end": 176
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./config.json",
        "raw": "\"./config.json\"",
        "start": 182,
        "end": 197
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 157,
      "end": 198
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 206
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "version",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 214
        },
        "optional": false,
        "computed": false,
        "start": 199,
        "end": 214
      },
      "directive": null,
      "start": 199,
      "end": 215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null,
          "start": 222,
          "end": 229
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 237
        },
        "optional": false,
        "computed": false,
        "start": 222,
        "end": 237
      },
      "directive": null,
      "start": 222,
      "end": 238
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 247
}
```
