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
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 79,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 39,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 26,
              "end": 31,
              "decorators": [],
              "name": "style",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
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
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 44,
            "end": 77,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "decorators": [],
              "name": "style",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 75,
                "decorators": [],
                "name": "cssText",
                "optional": false,
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
                          "decorators": [],
                          "name": "Bar",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Thing",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 81,
      "end": 136,
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
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 106,
              "decorators": [],
              "name": "hello",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 106,
              "end": 114,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 108,
                "end": 114
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 134,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "decorators": [],
              "name": "world",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 125,
              "end": 133,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 127,
                "end": 133
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 94,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 138,
      "end": 183,
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
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 175,
              "decorators": [],
              "name": "extra",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 180,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 177,
                "end": 180
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 160,
          "end": 163,
          "expression": {
            "type": "Identifier",
            "start": 160,
            "end": 163,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 151,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
