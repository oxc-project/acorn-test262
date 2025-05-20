__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 22,
              "end": 38,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 37,
                  "raw": "\"onInit\"",
                  "value": "onInit"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 429,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 47,
        "raw": "\"./framework-hooks\"",
        "value": "./framework-hooks"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "onInit",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "decorators": [],
            "name": "onInit",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 94,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 94,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 74,
            "end": 92,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 91,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 87,
                "end": 91
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 69,
        "decorators": [],
        "name": "Component",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 125,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 105,
        "end": 125,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 123,
            "accessibility": null,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 137,
            "end": 163,
            "properties": [
              {
                "type": "Property",
                "start": 141,
                "end": 152,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 148,
                  "decorators": [],
                  "name": "onInit",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 151,
                  "end": 152,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 166,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 226,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 192,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 186,
              "end": 191,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 188,
                "end": 191
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 228,
      "end": 264,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 236,
        "end": 264,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 240,
            "end": 253,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 247,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 251,
              "end": 252,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 266,
      "end": 302,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 274,
        "end": 302,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 278,
            "end": 291,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 285,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 291,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 291,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 273,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 304,
      "end": 353,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 353,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 325,
            "end": 351,
            "accessibility": null,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 335,
              "end": 341,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 342,
              "end": 351,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 344,
                "end": 350,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 346,
                  "end": 350
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 320,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 355,
      "end": 391,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 363,
        "end": 391,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 367,
            "end": 389,
            "accessibility": null,
            "computed": true,
            "declare": true,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 382,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 383,
              "end": 388,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 385,
                "end": 388
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 362,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 393,
      "end": 429,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 429,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 413,
            "end": 427,
            "accessibility": null,
            "computed": true,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 420,
              "decorators": [],
              "name": "onInit",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 421,
              "end": 426,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 423,
                "end": 426
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 408,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
