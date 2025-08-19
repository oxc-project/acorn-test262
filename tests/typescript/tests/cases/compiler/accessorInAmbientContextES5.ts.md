__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 96
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 103,
            "end": 126
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 152
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 154,
                "end": 160
              },
              "start": 152,
              "end": 160
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 131,
            "end": 161
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop3",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 188
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 190,
                "end": 197
              },
              "start": 188,
              "end": 197
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": "private",
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 166,
            "end": 198
          },
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop4",
              "optional": false,
              "typeAnnotation": null,
              "start": 227,
              "end": 232
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 234,
                "end": 240
              },
              "start": 232,
              "end": 240
            },
            "value": null,
            "computed": false,
            "static": true,
            "override": false,
            "definite": false,
            "accessibility": "private",
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 203,
            "end": 241
          }
        ],
        "start": 97,
        "end": 243
      },
      "abstract": false,
      "declare": true,
      "start": 70,
      "end": 243
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientNamespace",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 279
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "AccessorProperty",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 313,
                    "end": 317
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 319,
                      "end": 325
                    },
                    "start": 317,
                    "end": 325
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "override": false,
                  "definite": false,
                  "accessibility": null,
                  "declare": false,
                  "optional": false,
                  "readonly": false,
                  "start": 304,
                  "end": 326
                }
              ],
              "start": 294,
              "end": 332
            },
            "abstract": false,
            "declare": false,
            "start": 286,
            "end": 332
          }
        ],
        "start": 280,
        "end": 334
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 245,
      "end": 334
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "some-module",
        "raw": "\"some-module\"",
        "start": 411,
        "end": 424
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExportedClass",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 457
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "AccessorProperty",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 477,
                      "end": 482
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 484,
                        "end": 487
                      },
                      "start": 482,
                      "end": 487
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "override": false,
                    "definite": false,
                    "accessibility": null,
                    "declare": false,
                    "optional": false,
                    "readonly": false,
                    "start": 468,
                    "end": 488
                  }
                ],
                "start": 458,
                "end": 494
              },
              "abstract": false,
              "declare": false,
              "start": 438,
              "end": 494
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 431,
            "end": 494
          }
        ],
        "start": 425,
        "end": 496
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 396,
      "end": 496
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RegularClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 559,
        "end": 571
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "AccessorProperty",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shouldError",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 598
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 600,
                "end": 606
              },
              "start": 598,
              "end": 606
            },
            "value": null,
            "computed": false,
            "static": false,
            "override": false,
            "definite": false,
            "accessibility": null,
            "declare": false,
            "optional": false,
            "readonly": false,
            "start": 578,
            "end": 607
          }
        ],
        "start": 572,
        "end": 631
      },
      "abstract": false,
      "declare": false,
      "start": 553,
      "end": 631
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 70,
  "end": 631
}
```
