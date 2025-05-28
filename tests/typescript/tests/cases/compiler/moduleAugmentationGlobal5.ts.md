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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "A",
        "raw": "\"A\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 73,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 25,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 71,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 42,
                  "end": 65,
                  "id": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 61,
                    "decorators": [],
                    "name": "Something",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "global",
            "declare": false,
            "global": true
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 18,
        "value": "B",
        "raw": "\"B\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 19,
        "end": 73,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 25,
            "end": 71,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "global",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 32,
              "end": 71,
              "body": [
                {
                  "type": "TSInterfaceDeclaration",
                  "start": 42,
                  "end": 65,
                  "id": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 61,
                    "decorators": [],
                    "name": "Something",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeParameters": null,
                  "extends": [],
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
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 63,
                          "end": 64,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": null,
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  },
                  "declare": false
                }
              ]
            },
            "kind": "global",
            "declare": false,
            "global": true
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 88,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 64,
      "end": 75,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 71,
        "end": 74,
        "value": "A",
        "raw": "\"A\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 76,
      "end": 87,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 83,
        "end": 86,
        "value": "B",
        "raw": "\"B\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
