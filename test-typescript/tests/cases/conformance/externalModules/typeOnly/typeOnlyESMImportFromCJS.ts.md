__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 11,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "attributes": [],
      "declaration": null,
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
  "end": 392,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 34,
        "raw": "\"./module.mts\"",
        "value": "./module.mts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 108,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 78,
          "end": 105,
          "key": {
            "type": "Literal",
            "start": 78,
            "end": 95,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 97,
            "end": 105,
            "raw": "\"import\"",
            "value": "import"
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 70,
        "raw": "\"./module.mts\"",
        "value": "./module.mts"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 109,
      "end": 182,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 151,
          "end": 179,
          "key": {
            "type": "Literal",
            "start": 151,
            "end": 168,
            "raw": "\"resolution-mode\"",
            "value": "resolution-mode"
          },
          "value": {
            "type": "Literal",
            "start": 170,
            "end": 179,
            "raw": "\"require\"",
            "value": "require"
          }
        }
      ],
      "importKind": "type",
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 143,
        "raw": "\"./module.mts\"",
        "value": "./module.mts"
      },
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 223,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 190,
        "decorators": [],
        "name": "_1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 193,
        "end": 222,
        "exprName": {
          "type": "TSImportType",
          "start": 200,
          "end": 222,
          "argument": {
            "type": "TSLiteralType",
            "start": 207,
            "end": 221,
            "literal": {
              "type": "Literal",
              "start": 207,
              "end": 221,
              "raw": "\"./module.mts\"",
              "value": "./module.mts"
            }
          },
          "options": null,
          "qualifier": null,
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 224,
      "end": 307,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 231,
        "decorators": [],
        "name": "_2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 234,
        "end": 306,
        "exprName": {
          "type": "TSImportType",
          "start": 241,
          "end": 306,
          "argument": {
            "type": "TSLiteralType",
            "start": 248,
            "end": 262,
            "literal": {
              "type": "Literal",
              "start": 248,
              "end": 262,
              "raw": "\"./module.mts\"",
              "value": "./module.mts"
            }
          },
          "options": {
            "type": "ObjectExpression",
            "start": 264,
            "end": 305,
            "properties": [
              {
                "type": "Property",
                "start": 266,
                "end": 303,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 272,
                  "end": 303,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 274,
                      "end": 301,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 274,
                        "end": 291,
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 293,
                        "end": 301,
                        "raw": "\"import\"",
                        "value": "import"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "qualifier": null,
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 308,
      "end": 392,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 315,
        "decorators": [],
        "name": "_3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 318,
        "end": 391,
        "exprName": {
          "type": "TSImportType",
          "start": 325,
          "end": 391,
          "argument": {
            "type": "TSLiteralType",
            "start": 332,
            "end": 346,
            "literal": {
              "type": "Literal",
              "start": 332,
              "end": 346,
              "raw": "\"./module.mts\"",
              "value": "./module.mts"
            }
          },
          "options": {
            "type": "ObjectExpression",
            "start": 348,
            "end": 390,
            "properties": [
              {
                "type": "Property",
                "start": 350,
                "end": 388,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 356,
                  "end": 388,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 358,
                      "end": 386,
                      "computed": false,
                      "key": {
                        "type": "Literal",
                        "start": 358,
                        "end": 375,
                        "raw": "\"resolution-mode\"",
                        "value": "resolution-mode"
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 377,
                        "end": 386,
                        "raw": "\"require\"",
                        "value": "require"
                      }
                    }
                  ]
                }
              }
            ]
          },
          "qualifier": null,
          "typeArguments": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
