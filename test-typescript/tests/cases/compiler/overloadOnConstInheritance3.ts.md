overloadOnConstInheritance3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 56,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 21,
            "end": 54,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 37,
              "decorators": [],
              "name": "addEventListener",
              "optional": false
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
            "static": false
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
      "start": 57,
      "end": 226,
      "body": {
        "type": "TSInterfaceBody",
        "start": 88,
        "end": 226,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 149,
            "end": 184,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 165,
              "decorators": [],
              "name": "addEventListener",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 166,
                "end": 174,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 167,
                  "end": 174,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 169,
                    "end": 174,
                    "literal": {
                      "type": "Literal",
                      "start": 169,
                      "end": 174,
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
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 189,
            "end": 224,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 205,
              "decorators": [],
              "name": "addEventListener",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 206,
                "end": 214,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 207,
                  "end": 214,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 209,
                    "end": 214,
                    "literal": {
                      "type": "Literal",
                      "start": 209,
                      "end": 214,
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
              "start": 215,
              "end": 223,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 217,
                "end": 223
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 83,
          "end": 87,
          "expression": {
            "type": "Identifier",
            "start": 83,
            "end": 87,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 74,
        "decorators": [],
        "name": "Deriver",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
