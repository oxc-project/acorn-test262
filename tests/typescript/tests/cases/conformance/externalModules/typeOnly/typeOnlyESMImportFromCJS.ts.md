__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 11
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./module.mts",
        "raw": "\"./module.mts\"",
        "start": 20,
        "end": 34
      },
      "phase": null,
      "attributes": [],
      "importKind": "type",
      "start": 0,
      "end": 35
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./module.mts",
        "raw": "\"./module.mts\"",
        "start": 56,
        "end": 70
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 78,
            "end": 95
          },
          "value": {
            "type": "Literal",
            "value": "import",
            "raw": "\"import\"",
            "start": 97,
            "end": 105
          },
          "start": 78,
          "end": 105
        }
      ],
      "importKind": "type",
      "start": 36,
      "end": 108
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./module.mts",
        "raw": "\"./module.mts\"",
        "start": 129,
        "end": 143
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Literal",
            "value": "resolution-mode",
            "raw": "\"resolution-mode\"",
            "start": 151,
            "end": 168
          },
          "value": {
            "type": "Literal",
            "value": "require",
            "raw": "\"require\"",
            "start": 170,
            "end": 179
          },
          "start": 151,
          "end": 179
        }
      ],
      "importKind": "type",
      "start": 109,
      "end": 182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 190
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./module.mts",
            "raw": "\"./module.mts\"",
            "start": 207,
            "end": 221
          },
          "options": null,
          "qualifier": null,
          "typeArguments": null,
          "start": 200,
          "end": 222
        },
        "typeArguments": null,
        "start": 193,
        "end": 222
      },
      "declare": false,
      "start": 183,
      "end": 223
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 229,
        "end": 231
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./module.mts",
            "raw": "\"./module.mts\"",
            "start": 248,
            "end": 262
          },
          "options": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 270
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 274,
                        "end": 291
                      },
                      "value": {
                        "type": "Literal",
                        "value": "import",
                        "raw": "\"import\"",
                        "start": 293,
                        "end": 301
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 274,
                      "end": 301
                    }
                  ],
                  "start": 272,
                  "end": 303
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 266,
                "end": 303
              }
            ],
            "start": 264,
            "end": 305
          },
          "qualifier": null,
          "typeArguments": null,
          "start": 241,
          "end": 306
        },
        "typeArguments": null,
        "start": 234,
        "end": 306
      },
      "declare": false,
      "start": 224,
      "end": 307
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_3",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 315
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./module.mts",
            "raw": "\"./module.mts\"",
            "start": 332,
            "end": 346
          },
          "options": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "with",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 350,
                  "end": 354
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "resolution-mode",
                        "raw": "\"resolution-mode\"",
                        "start": 358,
                        "end": 375
                      },
                      "value": {
                        "type": "Literal",
                        "value": "require",
                        "raw": "\"require\"",
                        "start": 377,
                        "end": 386
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 358,
                      "end": 386
                    }
                  ],
                  "start": 356,
                  "end": 388
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 350,
                "end": 388
              }
            ],
            "start": 348,
            "end": 390
          },
          "qualifier": null,
          "typeArguments": null,
          "start": 325,
          "end": 391
        },
        "typeArguments": null,
        "start": 318,
        "end": 391
      },
      "declare": false,
      "start": 308,
      "end": 392
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 392
}
```
