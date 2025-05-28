__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 40,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 40,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 20,
          "decorators": [],
          "name": "oops",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 21,
            "end": 33,
            "decorators": [],
            "name": "json",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 34,
          "end": 39,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 36,
            "end": 39
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 27,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 26,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 26,
            "decorators": [],
            "name": "_default",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 26,
                "members": []
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 28,
      "end": 52,
      "declaration": {
        "type": "Identifier",
        "start": 43,
        "end": 51,
        "decorators": [],
        "name": "_default",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 769,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "oops",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "oops",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 31,
        "value": "not.json",
        "raw": "\"not.json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 39,
      "end": 76,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 46,
          "end": 54,
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 54,
            "decorators": [],
            "name": "moreOops",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 60,
        "end": 75,
        "value": "actually-json",
        "raw": "\"actually-json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 98,
      "end": 138,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 105,
          "end": 110,
          "local": {
            "type": "Identifier",
            "start": 105,
            "end": 110,
            "decorators": [],
            "name": "typed",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 116,
        "end": 137,
        "value": "actually-json/typed",
        "raw": "\"actually-json/typed\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 161,
      "end": 218,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 168,
          "end": 174,
          "local": {
            "type": "Identifier",
            "start": 168,
            "end": 174,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 180,
        "end": 195,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 203,
          "end": 215,
          "key": {
            "type": "Identifier",
            "start": 203,
            "end": 207,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 209,
            "end": 215,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 225,
      "end": 298,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 234,
          "end": 252,
          "imported": {
            "type": "Identifier",
            "start": 234,
            "end": 241,
            "decorators": [],
            "name": "default",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 245,
            "end": 252,
            "decorators": [],
            "name": "config1",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 260,
        "end": 275,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 283,
          "end": 295,
          "key": {
            "type": "Identifier",
            "start": 283,
            "end": 287,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 289,
            "end": 295,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 305,
      "end": 341,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 312,
          "end": 319,
          "local": {
            "type": "Identifier",
            "start": 312,
            "end": 319,
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 325,
        "end": 340,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 377,
      "end": 422,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 389,
          "end": 400,
          "local": {
            "type": "Identifier",
            "start": 389,
            "end": 400,
            "decorators": [],
            "name": "config2Type",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 406,
        "end": 421,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 440,
      "end": 508,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 452,
          "end": 464,
          "local": {
            "type": "Identifier",
            "start": 452,
            "end": 464,
            "decorators": [],
            "name": "config2Type2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 470,
        "end": 485,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 493,
          "end": 505,
          "key": {
            "type": "Identifier",
            "start": 493,
            "end": 497,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 499,
            "end": 505,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 570,
      "end": 632,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 579,
          "end": 586,
          "imported": {
            "type": "Identifier",
            "start": 579,
            "end": 586,
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 579,
            "end": 586,
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 594,
        "end": 609,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 617,
          "end": 629,
          "key": {
            "type": "Identifier",
            "start": 617,
            "end": 621,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 623,
            "end": 629,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 656,
      "end": 719,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 663,
          "end": 675,
          "local": {
            "type": "Identifier",
            "start": 668,
            "end": 675,
            "decorators": [],
            "name": "config3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 681,
        "end": 696,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 704,
          "end": 716,
          "key": {
            "type": "Identifier",
            "start": 704,
            "end": 708,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 710,
            "end": 716,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 720,
      "end": 736,
      "expression": {
        "type": "MemberExpression",
        "start": 720,
        "end": 735,
        "object": {
          "type": "Identifier",
          "start": 720,
          "end": 727,
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 728,
          "end": 735,
          "decorators": [],
          "name": "version",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 746,
      "end": 762,
      "expression": {
        "type": "MemberExpression",
        "start": 746,
        "end": 761,
        "object": {
          "type": "Identifier",
          "start": 746,
          "end": 753,
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 754,
          "end": 761,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 247,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 57,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 13,
            "decorators": [],
            "name": "config",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 34,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 42,
          "end": 54,
          "key": {
            "type": "Identifier",
            "start": 42,
            "end": 46,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 48,
            "end": 54,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 67,
      "end": 103,
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 74,
          "end": 81,
          "local": {
            "type": "Identifier",
            "start": 74,
            "end": 81,
            "decorators": [],
            "name": "config2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 87,
        "end": 102,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 110,
      "end": 150,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 119,
          "end": 126,
          "imported": {
            "type": "Identifier",
            "start": 119,
            "end": 126,
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 119,
            "end": 126,
            "decorators": [],
            "name": "version",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 134,
        "end": 149,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 157,
      "end": 198,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 164,
          "end": 176,
          "local": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "decorators": [],
            "name": "config3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 182,
        "end": 197,
        "value": "./config.json",
        "raw": "\"./config.json\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 199,
      "end": 215,
      "expression": {
        "type": "MemberExpression",
        "start": 199,
        "end": 214,
        "object": {
          "type": "Identifier",
          "start": 199,
          "end": 206,
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 207,
          "end": 214,
          "decorators": [],
          "name": "version",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 222,
      "end": 238,
      "expression": {
        "type": "MemberExpression",
        "start": 222,
        "end": 237,
        "object": {
          "type": "Identifier",
          "start": 222,
          "end": 229,
          "decorators": [],
          "name": "config3",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 230,
          "end": 237,
          "decorators": [],
          "name": "default",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
