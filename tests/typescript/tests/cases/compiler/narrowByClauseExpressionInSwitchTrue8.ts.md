__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 20,
              "end": 27
            },
            "start": 18,
            "end": 27
          },
          "start": 13,
          "end": 27
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cond2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 36,
              "end": 43
            },
            "start": 34,
            "end": 43
          },
          "start": 29,
          "end": 43
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 59,
              "end": 63
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cond1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 85
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 104
                    },
                    "directive": null,
                    "start": 99,
                    "end": 105
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 155,
                      "end": 160
                    },
                    "directive": null,
                    "start": 155,
                    "end": 161
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 214,
                    "end": 220
                  }
                ],
                "start": 75,
                "end": 220
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cond2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 235,
                  "end": 240
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 259
                    },
                    "directive": null,
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 312,
                      "end": 317
                    },
                    "directive": null,
                    "start": 312,
                    "end": 318
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 368,
                    "end": 374
                  }
                ],
                "start": 230,
                "end": 374
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 405,
                      "end": 410
                    },
                    "directive": null,
                    "start": 405,
                    "end": 411
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cond2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 463,
                      "end": 468
                    },
                    "directive": null,
                    "start": 463,
                    "end": 469
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 521,
                    "end": 527
                  }
                ],
                "start": 384,
                "end": 527
              }
            ],
            "start": 51,
            "end": 533
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond1",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 544
            },
            "directive": null,
            "start": 539,
            "end": 545
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond2",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 587
            },
            "directive": null,
            "start": 582,
            "end": 588
          }
        ],
        "start": 45,
        "end": 622
      },
      "expression": false,
      "start": 0,
      "end": 622
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 622
}
```
