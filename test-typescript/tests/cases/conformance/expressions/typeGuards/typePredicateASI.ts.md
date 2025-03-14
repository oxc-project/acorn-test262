typePredicateASI.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 81,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 81,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 60,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 21,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 56,
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 56,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 32,
                    "end": 56,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 33,
                        "end": 39,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 39,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 36,
                            "end": 39
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 41,
                        "end": 47,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 42,
                          "end": 47,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 44,
                            "end": 47
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 56,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 52,
                        "end": 56
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 65,
            "end": 79,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 67,
              "decorators": [],
              "name": "is",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 78,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 71,
                "end": 78
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
