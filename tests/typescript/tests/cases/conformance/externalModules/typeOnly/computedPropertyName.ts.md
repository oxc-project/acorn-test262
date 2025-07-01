__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "onInit",
                  "raw": "\"onInit\"",
                  "start": 29,
                  "end": 37
                }
              ],
              "optional": false,
              "start": 22,
              "end": 38
            },
            "definite": false,
            "start": 13,
            "end": 38
          }
        ],
        "declare": false,
        "start": 7,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 40
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
            "name": "onInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 20
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "onInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 20
          },
          "importKind": "value",
          "start": 14,
          "end": 20
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./framework-hooks",
        "raw": "\"./framework-hooks\"",
        "start": 28,
        "end": 47
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 48
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 69
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 81
            },
            "computed": true,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 87,
                "end": 91
              },
              "start": 85,
              "end": 91
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 74,
            "end": 92
          }
        ],
        "start": 70,
        "end": 94
      },
      "declare": false,
      "start": 50,
      "end": 94
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 101,
        "end": 102
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 116
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              },
              "start": 117,
              "end": 122
            },
            "accessibility": null,
            "static": false,
            "start": 109,
            "end": 123
          }
        ],
        "start": 105,
        "end": 125
      },
      "declare": false,
      "start": 96,
      "end": 125
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 133,
            "end": 134
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "onInit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 142,
                  "end": 148
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 151,
                  "end": 152
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 141,
                "end": 152
              }
            ],
            "start": 137,
            "end": 163
          },
          "definite": false,
          "start": 133,
          "end": 163
        }
      ],
      "declare": false,
      "start": 127,
      "end": 164
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 172,
        "end": 173
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 188,
                "end": 191
              },
              "start": 186,
              "end": 191
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 178,
            "end": 192
          }
        ],
        "start": 174,
        "end": 226
      },
      "abstract": false,
      "declare": false,
      "start": 166,
      "end": 226
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 235
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 247
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 251,
              "end": 252
            },
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 240,
            "end": 253
          }
        ],
        "start": 236,
        "end": 264
      },
      "abstract": false,
      "declare": false,
      "start": 228,
      "end": 264
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 272,
        "end": 273
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 285
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 289,
                "end": 291
              },
              "expression": false,
              "start": 286,
              "end": 291
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 278,
            "end": 291
          }
        ],
        "start": 274,
        "end": 302
      },
      "abstract": false,
      "declare": false,
      "start": 266,
      "end": 302
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 320
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 335,
              "end": 341
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 346,
                  "end": 350
                },
                "start": 344,
                "end": 350
              },
              "body": null,
              "expression": false,
              "start": 342,
              "end": 351
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 325,
            "end": 351
          }
        ],
        "start": 321,
        "end": 353
      },
      "abstract": true,
      "declare": false,
      "start": 304,
      "end": 353
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 362
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 382
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 385,
                "end": 388
              },
              "start": 383,
              "end": 388
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 367,
            "end": 389
          }
        ],
        "start": 363,
        "end": 391
      },
      "abstract": false,
      "declare": false,
      "start": 355,
      "end": 391
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 408
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 420
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 423,
                "end": 426
              },
              "start": 421,
              "end": 426
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 413,
            "end": 427
          }
        ],
        "start": 409,
        "end": 429
      },
      "abstract": false,
      "declare": true,
      "start": 393,
      "end": 429
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 429
}
```
