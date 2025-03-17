__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 210,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 96,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 96,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 37,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 38,
                "end": 47,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 39,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 41,
                    "end": 47
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 53,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 50,
                "end": 53
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 59,
            "end": 94,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 75,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 76,
                "end": 84,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 79,
                    "end": 84,
                    "literal": {
                      "type": "Literal",
                      "start": 79,
                      "end": 84,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 93,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 87,
                "end": 93
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 97,
      "end": 209,
      "body": {
        "type": "TSInterfaceBody",
        "start": 128,
        "end": 209,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 134,
            "end": 167,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 150,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 151,
                "end": 160,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 160,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 154,
                    "end": 160
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 166,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 163,
                "end": 166
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 172,
            "end": 207,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 188,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 189,
                "end": 197,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 190,
                  "end": 197,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 192,
                    "end": 197,
                    "literal": {
                      "type": "Literal",
                      "start": 192,
                      "end": 197,
                      "raw": "'bar'",
                      "value": "bar"
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 200,
                "end": 206
              }
            },
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 123,
          "end": 127,
          "expression": {
            "type": "Identifier",
            "start": 123,
            "end": 127,
            "decorators": [],
            "name": "Base",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 114,
        "decorators": [],
        "name": "Deriver",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
