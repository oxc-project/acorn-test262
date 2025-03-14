genericAndNonGenericInheritedSignature1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 112,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 37,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 37,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 20,
            "end": 35,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 22,
                "end": 28,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 23,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 25,
                    "end": 28
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 34,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
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
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 38,
      "end": 74,
      "body": {
        "type": "TSInterfaceBody",
        "start": 52,
        "end": 74,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 58,
            "end": 72,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 67,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 67,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 66,
                    "end": 67,
                    "typeName": {
                      "type": "Identifier",
                      "start": 66,
                      "end": 67,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 70,
                "end": 71,
                "typeName": {
                  "type": "Identifier",
                  "start": 70,
                  "end": 71,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 59,
              "end": 62,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 60,
                  "end": 61,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
        "decorators": [],
        "name": "Bar",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 75,
      "end": 111,
      "body": {
        "type": "TSInterfaceBody",
        "start": 108,
        "end": 111,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 99,
          "end": 102,
          "expression": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "decorators": [],
            "name": "Foo",
            "optional": false
          }
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 104,
          "end": 107,
          "expression": {
            "type": "Identifier",
            "start": 104,
            "end": 107,
            "decorators": [],
            "name": "Bar",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 90,
        "decorators": [],
        "name": "Hello",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
