__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 37
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  },
                  "start": 39,
                  "end": 47
                },
                "start": 38,
                "end": 47
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              },
              "start": 48,
              "end": 53
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 21,
            "end": 54
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 75
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 79,
                      "end": 84
                    },
                    "start": 79,
                    "end": 84
                  },
                  "start": 77,
                  "end": 84
                },
                "start": 76,
                "end": 84
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 87,
                "end": 93
              },
              "start": 85,
              "end": 93
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 59,
            "end": 94
          }
        ],
        "start": 15,
        "end": 96
      },
      "declare": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Deriver",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 114
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null,
            "start": 123,
            "end": 127
          },
          "typeArguments": null,
          "start": 123,
          "end": 127
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 134,
              "end": 150
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 154,
                    "end": 160
                  },
                  "start": 152,
                  "end": 160
                },
                "start": 151,
                "end": 160
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 163,
                "end": 166
              },
              "start": 161,
              "end": 166
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 134,
            "end": 167
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 188
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 192,
                      "end": 197
                    },
                    "start": 192,
                    "end": 197
                  },
                  "start": 190,
                  "end": 197
                },
                "start": 189,
                "end": 197
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              },
              "start": 198,
              "end": 206
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 172,
            "end": 207
          }
        ],
        "start": 128,
        "end": 209
      },
      "declare": false,
      "start": 97,
      "end": 209
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 209
}
```
