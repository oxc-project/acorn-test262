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
      "declaration": null,
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
  "end": 392,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 34,
        "value": "./module.mts",
        "raw": "\"./module.mts\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 108,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 56,
        "end": 70,
        "value": "./module.mts",
        "raw": "\"./module.mts\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 78,
          "end": 105,
          "key": {
            "type": "Literal",
            "start": 78,
            "end": 95,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 97,
            "end": 105,
            "value": "import",
            "raw": "\"import\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "ImportDeclaration",
      "start": 109,
      "end": 182,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 129,
        "end": 143,
        "value": "./module.mts",
        "raw": "\"./module.mts\""
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 151,
          "end": 179,
          "key": {
            "type": "Literal",
            "start": 151,
            "end": 168,
            "value": "resolution-mode",
            "raw": "\"resolution-mode\""
          },
          "value": {
            "type": "Literal",
            "start": 170,
            "end": 179,
            "value": "require",
            "raw": "\"require\""
          }
        }
      ],
      "importKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 190,
        "decorators": [],
        "name": "_1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "./module.mts",
              "raw": "\"./module.mts\""
            }
          },
          "options": null,
          "qualifier": null,
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 224,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 229,
        "end": 231,
        "decorators": [],
        "name": "_2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "./module.mts",
              "raw": "\"./module.mts\""
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 270,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 272,
                  "end": 303,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 274,
                      "end": 301,
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "start": 274,
                        "end": 291,
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\""
                      },
                      "value": {
                        "type": "Literal",
                        "start": 293,
                        "end": 301,
                        "value": "import",
                        "raw": "\"import\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "qualifier": null,
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 308,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 315,
        "decorators": [],
        "name": "_3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
              "value": "./module.mts",
              "raw": "\"./module.mts\""
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 350,
                  "end": 354,
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 356,
                  "end": 388,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 358,
                      "end": 386,
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "start": 358,
                        "end": 375,
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\""
                      },
                      "value": {
                        "type": "Literal",
                        "start": 377,
                        "end": 386,
                        "value": "require",
                        "raw": "\"require\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "qualifier": null,
          "typeArguments": null
        },
        "typeArguments": null
      },
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
