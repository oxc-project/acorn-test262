__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 120,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 38,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 37,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 24,
                "end": 37,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 26,
                    "end": 35,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 26,
                      "end": 27,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 27,
                      "end": 35,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 29,
                        "end": 35
                      }
                    }
                  }
                ]
              }
            }
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
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 42,
      "end": 120,
      "body": {
        "type": "TSInterfaceBody",
        "start": 73,
        "end": 120,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 88,
            "end": 118,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 91,
                "end": 117,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 101,
                    "end": 111,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 102,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 104,
                        "end": 110
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 68,
          "end": 72,
          "expression": {
            "type": "Identifier",
            "start": 68,
            "end": 72,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 59,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
