__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 73,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 73,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 25,
            "end": 71,
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 71,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 42,
                  "end": 65,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 62,
                    "end": 65,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 63,
                        "end": 64,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 61,
                    "decorators": [],
                    "name": "Something",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": true,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "global",
              "optional": false
            },
            "kind": "global"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"A\"",
        "value": "A"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 73,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 73,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 25,
            "end": 71,
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 71,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 42,
                  "end": 65,
                  "body": {
                    "type": "TSInterfaceBody",
                    "start": 62,
                    "end": 65,
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "start": 63,
                        "end": 64,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false
                      }
                    ]
                  },
                  "declare": false,
                  "extends": [],
                  "id": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 61,
                    "decorators": [],
                    "name": "Something",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "global": true,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "global",
              "optional": false
            },
            "kind": "global"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "raw": "\"B\"",
        "value": "B"
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 64,
  "end": 89,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 75,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 74,
        "raw": "\"A\"",
        "value": "A"
      },
      "specifiers": []
    },
    {
      "type": "ImportDeclaration",
      "start": 76,
      "end": 87,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 83,
        "end": 86,
        "raw": "\"B\"",
        "value": "B"
      },
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
