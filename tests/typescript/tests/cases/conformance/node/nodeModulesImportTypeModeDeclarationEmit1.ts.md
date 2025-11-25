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
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 51,
                      "end": 57
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
                            "start": 60,
                            "end": 77
                          },
                          "value": {
                            "type": "Literal",
                            "value": "require",
                            "raw": "\"require\"",
                            "start": 79,
                            "end": 88
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 60,
                          "end": 88
                        }
                      ],
                      "start": 59,
                      "end": 89
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 51,
                    "end": 89
                  }
                ],
                "start": 49,
                "end": 91
              },
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "RequireInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 93,
                "end": 109
              },
              "typeArguments": null,
              "start": 35,
              "end": 109
            },
            {
              "type": "TSImportType",
              "source": {
                "type": "Literal",
                "value": "pkg",
                "raw": "\"pkg\"",
                "start": 123,
                "end": 128
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
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 132,
                      "end": 138
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
                            "start": 141,
                            "end": 158
                          },
                          "value": {
                            "type": "Literal",
                            "value": "import",
                            "raw": "\"import\"",
                            "start": 160,
                            "end": 168
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 141,
                          "end": 168
                        }
                      ],
                      "start": 140,
                      "end": 169
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 132,
                    "end": 169
                  }
                ],
                "start": 130,
                "end": 171
              },
              "qualifier": {
                "type": "Identifier",
                "decorators": [],
                "name": "ImportInterface",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 188
              },
              "typeArguments": null,
              "start": 116,
              "end": 188
            }
          ],
          "start": 33,
          "end": 188
        },
        "declare": false,
        "start": 7,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 189
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
              "start": 204,
              "end": 205
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 209,
                  "end": 213
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 217,
                  "end": 220
                },
                "start": 209,
                "end": 220
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "pkg",
                  "raw": "\"pkg\"",
                  "start": 231,
                  "end": 236
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
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 240,
                        "end": 246
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
                              "start": 249,
                              "end": 266
                            },
                            "value": {
                              "type": "Literal",
                              "value": "require",
                              "raw": "\"require\"",
                              "start": 268,
                              "end": 277
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 249,
                            "end": 277
                          }
                        ],
                        "start": 248,
                        "end": 278
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 240,
                      "end": 278
                    }
                  ],
                  "start": 238,
                  "end": 280
                },
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequireInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 282,
                  "end": 298
                },
                "typeArguments": null,
                "start": 224,
                "end": 298
              },
              "start": 209,
              "end": 298
            },
            "definite": false,
            "start": 204,
            "end": 299
          }
        ],
        "declare": false,
        "start": 198,
        "end": 300
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 191,
      "end": 300
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
              "start": 314,
              "end": 315
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 319,
                  "end": 323
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 327,
                  "end": 330
                },
                "start": 319,
                "end": 330
              },
              "typeAnnotation": {
                "type": "TSImportType",
                "source": {
                  "type": "Literal",
                  "value": "pkg",
                  "raw": "\"pkg\"",
                  "start": 341,
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
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 350,
                        "end": 356
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
                              "start": 359,
                              "end": 376
                            },
                            "value": {
                              "type": "Literal",
                              "value": "import",
                              "raw": "\"import\"",
                              "start": 378,
                              "end": 386
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 359,
                            "end": 386
                          }
                        ],
                        "start": 358,
                        "end": 387
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 350,
                      "end": 387
                    }
                  ],
                  "start": 348,
                  "end": 389
                },
                "qualifier": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImportInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 391,
                  "end": 406
                },
                "typeArguments": null,
                "start": 334,
                "end": 406
              },
              "start": 319,
              "end": 406
            },
            "definite": false,
            "start": 314,
            "end": 407
          }
        ],
        "declare": false,
        "start": 308,
        "end": 408
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 301,
      "end": 408
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 408
}
```
