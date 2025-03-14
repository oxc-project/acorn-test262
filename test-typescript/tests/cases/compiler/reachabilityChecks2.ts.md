reachabilityChecks2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 118,
  "body": [
    {
      "type": "WhileStatement",
      "start": 0,
      "end": 16,
      "body": {
        "type": "BlockStatement",
        "start": 13,
        "end": 16,
        "body": []
      },
      "test": {
        "type": "Literal",
        "start": 7,
        "end": 11,
        "raw": "true",
        "value": true
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 17,
      "end": 35,
      "body": {
        "type": "TSEnumBody",
        "start": 30,
        "end": 35,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 32,
            "end": 33,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 37,
      "end": 116,
      "body": {
        "type": "TSModuleBlock",
        "start": 47,
        "end": 116,
        "body": [
          {
            "type": "WhileStatement",
            "start": 53,
            "end": 66,
            "body": {
              "type": "EmptyStatement",
              "start": 65,
              "end": 66
            },
            "test": {
              "type": "Literal",
              "start": 60,
              "end": 64,
              "raw": "true",
              "value": true
            }
          },
          {
            "type": "TSModuleDeclaration",
            "start": 71,
            "end": 114,
            "body": {
              "type": "TSModuleBlock",
              "start": 80,
              "end": 114,
              "body": [
                {
                  "type": "TSEnumDeclaration",
                  "start": 90,
                  "end": 108,
                  "body": {
                    "type": "TSEnumBody",
                    "start": 103,
                    "end": 108,
                    "members": [
                      {
                        "type": "TSEnumMember",
                        "start": 105,
                        "end": 106,
                        "computed": false,
                        "id": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 106,
                          "decorators": [],
                          "name": "X",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "const": true,
                  "declare": false,
                  "id": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "decorators": [],
                    "name": "E",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "kind": "module"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 46,
        "decorators": [],
        "name": "A4",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
