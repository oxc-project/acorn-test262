__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 209,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 96,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 96,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 54,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 37,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 59,
            "end": 94,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 75,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  }
                }
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 97,
      "end": 209,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 114,
        "decorators": [],
        "name": "Deriver",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 128,
        "end": 209,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 134,
            "end": 167,
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 150,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 172,
            "end": 207,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 188,
              "decorators": [],
              "name": "addEventListener",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "value": "bar",
                      "raw": "'bar'"
                    }
                  }
                }
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
