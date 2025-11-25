__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ImportInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 33,
          "end": 35
        },
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RequireInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 33
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 34,
          "end": 36
        },
        "declare": false,
        "start": 7,
        "end": 36
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 36
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 36
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LocalInterface",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 26
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "pkg",
                "raw": "\"pkg\"",
                "start": 42,
                "end": 47
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
                      "start": 51,
                      "end": 55
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
                            "start": 58,
                            "end": 75
                          },
                          "value": {
                            "type": "Literal",
                            "value": "require",
                            "raw": "\"require\"",
                            "start": 77,
                            "end": 86
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 58,
                          "end": 86
                        }
                      ],
                      "start": 57,
                      "end": 87
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 51,
                    "end": 87
                  }
                ],
                "start": 49,
                "end": 89
              },
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "RequireInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 91,
                "end": 107
              },
              "typeArguments": null,
              "start": 35,
              "end": 107
            },
            {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "pkg",
                "raw": "\"pkg\"",
                "start": 121,
                "end": 126
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
                      "start": 130,
                      "end": 134
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
                            "start": 137,
                            "end": 154
                          },
                          "value": {
                            "type": "Literal",
                            "value": "import",
                            "raw": "\"import\"",
                            "start": 156,
                            "end": 164
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 137,
                          "end": 164
                        }
                      ],
                      "start": 136,
                      "end": 165
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 130,
                    "end": 165
                  }
                ],
                "start": 128,
                "end": 167
              },
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImportInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 184
              },
              "typeArguments": null,
              "start": 114,
              "end": 184
            }
          ],
          "start": 33,
          "end": 184
        },
        "declare": false,
        "start": 7,
        "end": 185
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 185
    },
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 205,
                  "end": 209
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 213,
                  "end": 216
                },
                "start": 205,
                "end": 216
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "pkg",
                  "raw": "\"pkg\"",
                  "start": 227,
                  "end": 232
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
                        "start": 236,
                        "end": 240
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
                              "start": 243,
                              "end": 260
                            },
                            "value": {
                              "type": "Literal",
                              "value": "require",
                              "raw": "\"require\"",
                              "start": 262,
                              "end": 271
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 243,
                            "end": 271
                          }
                        ],
                        "start": 242,
                        "end": 272
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 236,
                      "end": 272
                    }
                  ],
                  "start": 234,
                  "end": 274
                },
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 292
                },
                "typeArguments": null,
                "start": 220,
                "end": 292
              },
              "start": 205,
              "end": 292
            },
            "definite": false,
            "start": 200,
            "end": 293
          }
        ],
        "declare": false,
        "start": 194,
        "end": 294
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 187,
      "end": 294
    },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 309
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 313,
                  "end": 317
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 321,
                  "end": 324
                },
                "start": 313,
                "end": 324
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "pkg",
                  "raw": "\"pkg\"",
                  "start": 335,
                  "end": 340
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
                        "start": 344,
                        "end": 348
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
                              "start": 351,
                              "end": 368
                            },
                            "value": {
                              "type": "Literal",
                              "value": "import",
                              "raw": "\"import\"",
                              "start": 370,
                              "end": 378
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 351,
                            "end": 378
                          }
                        ],
                        "start": 350,
                        "end": 379
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 344,
                      "end": 379
                    }
                  ],
                  "start": 342,
                  "end": 381
                },
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 398
                },
                "typeArguments": null,
                "start": 328,
                "end": 398
              },
              "start": 313,
              "end": 398
            },
            "definite": false,
            "start": 308,
            "end": 399
          }
        ],
        "declare": false,
        "start": 302,
        "end": 400
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 295,
      "end": 400
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 400
}
```
