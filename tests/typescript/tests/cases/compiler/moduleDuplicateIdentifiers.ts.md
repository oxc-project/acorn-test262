__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 14
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 17,
              "end": 18
            },
            "definite": false,
            "start": 11,
            "end": 18
          }
        ],
        "declare": false,
        "start": 7,
        "end": 19
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 19
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
            },
            "init": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 37,
              "end": 39
            },
            "definite": false,
            "start": 31,
            "end": 39
          }
        ],
        "declare": false,
        "start": 27,
        "end": 40
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 20,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 75,
          "end": 78
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_brand1",
                "optional": false,
                "typeAnnotation": null,
                "start": 82,
                "end": 89
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 91,
                  "end": 94
                },
                "start": 89,
                "end": 94
              },
              "accessibility": null,
              "static": false,
              "start": 82,
              "end": 95
            }
          ],
          "start": 79,
          "end": 97
        },
        "declare": false,
        "start": 65,
        "end": 97
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 58,
      "end": 97
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 116,
          "end": 119
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "_brand2",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 149
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 151,
                  "end": 154
                },
                "start": 149,
                "end": 154
              },
              "accessibility": null,
              "static": false,
              "start": 142,
              "end": 155
            }
          ],
          "start": 120,
          "end": 157
        },
        "declare": false,
        "start": 106,
        "end": 157
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 99,
      "end": 157
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 176,
          "end": 182
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "member1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 204
                    },
                    "init": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 207,
                      "end": 208
                    },
                    "definite": false,
                    "start": 197,
                    "end": 208
                  }
                ],
                "declare": false,
                "start": 193,
                "end": 209
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 186,
              "end": 209
            }
          ],
          "start": 183,
          "end": 211
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 166,
        "end": 211
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 159,
      "end": 211
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "FooBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 230,
          "end": 236
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "member2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 270,
                      "end": 277
                    },
                    "init": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 280,
                      "end": 282
                    },
                    "definite": false,
                    "start": 270,
                    "end": 282
                  }
                ],
                "declare": false,
                "start": 266,
                "end": 283
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 259,
              "end": 283
            }
          ],
          "start": 237,
          "end": 285
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 220,
        "end": 285
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 213,
      "end": 285
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Kettle",
          "optional": false,
          "typeAnnotation": null,
          "start": 300,
          "end": 306
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
                "name": "member1",
                "optional": false,
                "typeAnnotation": null,
                "start": 310,
                "end": 317
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 320,
                "end": 321
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 310,
              "end": 322
            }
          ],
          "start": 307,
          "end": 324
        },
        "abstract": false,
        "declare": false,
        "start": 294,
        "end": 324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 287,
      "end": 324
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Kettle",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 345
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
                "name": "member2",
                "optional": false,
                "typeAnnotation": null,
                "start": 365,
                "end": 372
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 375,
                "end": 377
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 365,
              "end": 378
            }
          ],
          "start": 346,
          "end": 380
        },
        "abstract": false,
        "declare": false,
        "start": 333,
        "end": 380
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 326,
      "end": 380
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Pot",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 396
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 399,
              "end": 400
            },
            "definite": false,
            "start": 393,
            "end": 400
          }
        ],
        "declare": false,
        "start": 389,
        "end": 401
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 382,
      "end": 401
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pot",
          "optional": false,
          "typeAnnotation": null,
          "start": 402,
          "end": 405
        },
        "right": {
          "type": "Literal",
          "value": 42,
          "raw": "42",
          "start": 408,
          "end": 410
        },
        "start": 402,
        "end": 410
      },
      "directive": null,
      "start": 402,
      "end": 411
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Utensils",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 452
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spoon",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 461
              },
              "initializer": null,
              "computed": false,
              "start": 456,
              "end": 461
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Fork",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 468
              },
              "initializer": null,
              "computed": false,
              "start": 464,
              "end": 468
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Knife",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 476
              },
              "initializer": null,
              "computed": false,
              "start": 471,
              "end": 476
            }
          ],
          "start": 453,
          "end": 478
        },
        "const": false,
        "declare": false,
        "start": 439,
        "end": 478
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 432,
      "end": 478
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Utensils",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 500
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Spork",
                "optional": false,
                "typeAnnotation": null,
                "start": 523,
                "end": 528
              },
              "initializer": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 531,
                "end": 532
              },
              "computed": false,
              "start": 523,
              "end": 532
            }
          ],
          "start": 501,
          "end": 534
        },
        "const": false,
        "declare": false,
        "start": 487,
        "end": 534
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 480,
      "end": 534
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 534
}
```
