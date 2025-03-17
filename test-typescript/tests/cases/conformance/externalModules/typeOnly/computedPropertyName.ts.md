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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 19,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 22,
              "end": 38,
              "callee": {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 29,
                  "end": 37,
                  "value": "onInit",
                  "raw": "\"onInit\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
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
  "end": 430,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 48,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 14,
          "end": 20,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "name": "onInit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 20,
            "name": "onInit",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 28,
        "end": 47,
        "value": "./framework-hooks",
        "raw": "\"./framework-hooks\""
      },
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 50,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 69,
        "name": "Component",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 94,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 74,
            "end": 92,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 81,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": true,
            "kind": "method",
            "typeParameters": null,
            "params": [],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 96,
      "end": 125,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 102,
        "name": "T",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 105,
        "end": 125,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 109,
            "end": 123,
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 110,
              "end": 116,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 117,
              "end": 122,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 119,
                "end": 122
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 133,
            "end": 134,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 142,
                  "end": 148,
                  "name": "onInit",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 151,
                  "end": 152,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 166,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 172,
        "end": 173,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 174,
        "end": 226,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 178,
            "end": 192,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 185,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 228,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 236,
        "end": 264,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 240,
            "end": 253,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 247,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 251,
              "end": 252,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 266,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 273,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 274,
        "end": 302,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 278,
            "end": 291,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 279,
              "end": 285,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 286,
              "end": 291,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 289,
                "end": 291,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 304,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 320,
        "name": "F",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 353,
        "body": [
          {
            "type": "TSAbstractMethodDefinition",
            "start": 325,
            "end": 351,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 335,
              "end": 341,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 342,
              "end": 351,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 344,
                "end": 350,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 346,
                  "end": 350
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": true,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 355,
      "end": 391,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 362,
        "name": "G",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 363,
        "end": 391,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 367,
            "end": 389,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 376,
              "end": 382,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 393,
      "end": 429,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 408,
        "name": "H",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 409,
        "end": 429,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 413,
            "end": 427,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 420,
              "name": "onInit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
