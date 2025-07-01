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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 10,
        "end": 13
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 23,
        "end": 24
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 40
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 42,
              "end": 48
            }
          ],
          "start": 32,
          "end": 48
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "sss",
            "raw": "\"sss\"",
            "start": 70,
            "end": 75
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 77,
              "end": 83
            }
          ],
          "start": 65,
          "end": 83
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 103,
            "end": 106
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 108,
              "end": 114
            }
          ],
          "start": 98,
          "end": 114
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 136,
            "end": 140
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 142,
              "end": 148
            }
          ],
          "start": 131,
          "end": 148
        }
      ],
      "start": 15,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              },
              "start": 176,
              "end": 184
            },
            "start": 175,
            "end": 184
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 184
        }
      ],
      "declare": true,
      "start": 163,
      "end": 184
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 200,
                    "end": 206
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 209,
                      "end": 216
                    },
                    "start": 209,
                    "end": 216
                  }
                ],
                "start": 200,
                "end": 216
              },
              "start": 198,
              "end": 216
            },
            "start": 197,
            "end": 216
          },
          "init": null,
          "definite": false,
          "start": 197,
          "end": 216
        }
      ],
      "declare": true,
      "start": 185,
      "end": 216
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 227
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 240,
            "end": 241
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 243,
              "end": 248
            }
          ],
          "start": 235,
          "end": 248
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 258,
            "end": 260
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 262,
              "end": 267
            }
          ],
          "start": 253,
          "end": 267
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 277,
            "end": 281
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 283,
              "end": 288
            }
          ],
          "start": 272,
          "end": 288
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 307,
            "end": 314
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 316,
              "end": 321
            }
          ],
          "start": 302,
          "end": 321
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "world",
            "raw": "\"world\"",
            "start": 331,
            "end": 338
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 340,
              "end": 345
            }
          ],
          "start": 326,
          "end": 345
        }
      ],
      "start": 218,
      "end": 356
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 365,
                "end": 368
              },
              "start": 363,
              "end": 368
            },
            "start": 362,
            "end": 368
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 371,
            "end": 372
          },
          "definite": false,
          "start": 362,
          "end": 372
        }
      ],
      "declare": false,
      "start": 358,
      "end": 373
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 404
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 417,
            "end": 420
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 422,
              "end": 428
            }
          ],
          "start": 412,
          "end": 428
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "sss",
            "raw": "\"sss\"",
            "start": 438,
            "end": 443
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 445,
              "end": 451
            }
          ],
          "start": 433,
          "end": 451
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 123,
            "raw": "123",
            "start": 461,
            "end": 464
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 466,
              "end": 472
            }
          ],
          "start": 456,
          "end": 472
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 482,
            "end": 486
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 488,
              "end": 494
            }
          ],
          "start": 477,
          "end": 494
        }
      ],
      "start": 395,
      "end": 496
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 496
}
```
