accessorBodyInTypeContext.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 166,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 39,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 15,
            "end": 37,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 22,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 42,
      "end": 79,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 51,
        "end": 78,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 57,
            "end": 76,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 64,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 65,
                "end": 71,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 71,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 68,
                    "end": 71
                  }
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 81,
      "end": 123,
      "body": {
        "type": "TSInterfaceBody",
        "start": 93,
        "end": 123,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 99,
            "end": 121,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "params": [],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 92,
        "decorators": [],
        "name": "X",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 125,
      "end": 164,
      "body": {
        "type": "TSInterfaceBody",
        "start": 137,
        "end": 164,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 143,
            "end": 162,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 150,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 151,
                "end": 157,
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 152,
                  "end": 157,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 154,
                    "end": 157
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
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
