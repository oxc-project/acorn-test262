__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 183,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 79,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Thing",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 79,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 39,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "name": "style",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "get",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 38,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 35,
                "end": 38,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 38,
                  "name": "Foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 44,
            "end": 77,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "name": "style",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "set",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 75,
                "name": "cssText",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 61,
                  "end": 75,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 63,
                    "end": 75,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 63,
                        "end": 69
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 72,
                        "end": 75,
                        "typeName": {
                          "type": "Identifier",
                          "start": 72,
                          "end": 75,
                          "name": "Bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": null,
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
      "start": 81,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 94,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 95,
        "end": 136,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 101,
            "end": 115,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "name": "hello",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 134,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "name": "world",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 138,
      "end": 183,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 160,
          "end": 163,
          "expression": {
            "type": "Identifier",
            "start": 160,
            "end": 163,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 164,
        "end": 183,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 170,
            "end": 181,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 175,
              "name": "extra",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 180,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 177,
                "end": 180
              }
            },
            "accessibility": null,
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
