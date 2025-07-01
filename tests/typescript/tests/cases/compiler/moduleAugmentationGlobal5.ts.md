__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "A",
        "raw": "\"A\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 61
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 64
                        },
                        "typeAnnotation": null,
                        "accessibility": null,
                        "static": false,
                        "start": 63,
                        "end": 64
                      }
                    ],
                    "start": 62,
                    "end": 65
                  },
                  "declare": false,
                  "start": 42,
                  "end": 65
                }
              ],
              "start": 32,
              "end": 71
            },
            "kind": "global",
            "declare": false,
            "global": true,
            "start": 25,
            "end": 71
          }
        ],
        "start": 19,
        "end": 73
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "B",
        "raw": "\"B\"",
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Something",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 61
                  },
                  "typeParameters": null,
                  "extends": [],
                  "body": {
                    "type": "TSInterfaceBody",
                    "body": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 63,
                          "end": 64
                        },
                        "typeAnnotation": null,
                        "accessibility": null,
                        "static": false,
                        "start": 63,
                        "end": 64
                      }
                    ],
                    "start": 62,
                    "end": 65
                  },
                  "declare": false,
                  "start": 42,
                  "end": 65
                }
              ],
              "start": 32,
              "end": 71
            },
            "kind": "global",
            "declare": false,
            "global": true,
            "start": 25,
            "end": 71
          }
        ],
        "start": 19,
        "end": 73
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 73
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "A",
        "raw": "\"A\"",
        "start": 71,
        "end": 74
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 64,
      "end": 75
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "B",
        "raw": "\"B\"",
        "start": 83,
        "end": 86
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 76,
      "end": 87
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 64,
  "end": 88
}
```
