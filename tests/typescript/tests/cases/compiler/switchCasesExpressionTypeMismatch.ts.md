__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 496,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 13,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 13,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 15,
      "end": 161,
      "discriminant": {
        "type": "Literal",
        "start": 23,
        "end": 24,
        "value": 0,
        "raw": "0"
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 32,
          "end": 48,
          "test": {
            "type": "Identifier",
            "start": 37,
            "end": 40,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 42,
              "end": 48,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 65,
          "end": 83,
          "test": {
            "type": "Literal",
            "start": 70,
            "end": 75,
            "value": "sss",
            "raw": "\"sss\""
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 77,
              "end": 83,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 98,
          "end": 114,
          "test": {
            "type": "Literal",
            "start": 103,
            "end": 106,
            "value": 123,
            "raw": "123"
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 108,
              "end": 114,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 131,
          "end": 148,
          "test": {
            "type": "Literal",
            "start": 136,
            "end": 140,
            "value": true,
            "raw": "true"
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 142,
              "end": 148,
              "label": null
            }
          ]
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 184,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 184,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 176,
              "end": 184,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 178,
                "end": 184
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 216,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 216,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 216,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 216,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 200,
                "end": 216,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 200,
                    "end": 206
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 209,
                    "end": 216,
                    "literal": {
                      "type": "Literal",
                      "start": 209,
                      "end": 216,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "SwitchStatement",
      "start": 218,
      "end": 356,
      "discriminant": {
        "type": "Identifier",
        "start": 226,
        "end": 227,
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 235,
          "end": 248,
          "test": {
            "type": "Identifier",
            "start": 240,
            "end": 241,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 243,
              "end": 248,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 253,
          "end": 267,
          "test": {
            "type": "Literal",
            "start": 258,
            "end": 260,
            "value": 42,
            "raw": "42"
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 262,
              "end": 267,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 272,
          "end": 288,
          "test": {
            "type": "Literal",
            "start": 277,
            "end": 281,
            "value": true,
            "raw": "true"
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 283,
              "end": 288,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 302,
          "end": 321,
          "test": {
            "type": "Literal",
            "start": 307,
            "end": 314,
            "value": "hello",
            "raw": "\"hello\""
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 316,
              "end": 321,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 326,
          "end": 345,
          "test": {
            "type": "Literal",
            "start": 331,
            "end": 338,
            "value": "world",
            "raw": "\"world\""
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 340,
              "end": 345,
              "label": null
            }
          ]
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 358,
      "end": 373,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 362,
          "end": 372,
          "id": {
            "type": "Identifier",
            "start": 362,
            "end": 368,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 363,
              "end": 368,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 365,
                "end": 368
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 371,
            "end": 372,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "SwitchStatement",
      "start": 395,
      "end": 496,
      "discriminant": {
        "type": "Identifier",
        "start": 403,
        "end": 404,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 412,
          "end": 428,
          "test": {
            "type": "Identifier",
            "start": 417,
            "end": 420,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 422,
              "end": 428,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 433,
          "end": 451,
          "test": {
            "type": "Literal",
            "start": 438,
            "end": 443,
            "value": "sss",
            "raw": "\"sss\""
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 445,
              "end": 451,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 456,
          "end": 472,
          "test": {
            "type": "Literal",
            "start": 461,
            "end": 464,
            "value": 123,
            "raw": "123"
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 466,
              "end": 472,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 477,
          "end": 494,
          "test": {
            "type": "Literal",
            "start": 482,
            "end": 486,
            "value": true,
            "raw": "true"
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 488,
              "end": 494,
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
