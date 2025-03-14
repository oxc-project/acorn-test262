__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 51,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 26,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 23,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 31,
            "end": 49,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 33,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 35,
                "end": 47,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 36,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 38,
                    "end": 47,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 40,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 43,
                        "end": 47
                      }
                    }
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
        "end": 13,
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
