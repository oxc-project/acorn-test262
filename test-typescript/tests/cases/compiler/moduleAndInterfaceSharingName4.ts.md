__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 144,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "name": "D3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 144,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 46,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 45,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 45,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 29,
                    "end": 45,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 31,
                      "end": 45,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 31,
                        "end": 45,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 31,
                          "end": 39,
                          "left": {
                            "type": "Identifier",
                            "start": 31,
                            "end": 33,
                            "name": "D3",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 34,
                            "end": 39,
                            "name": "Color",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 45,
                          "name": "Color",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "TSModuleDeclaration",
            "start": 52,
            "end": 142,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "name": "Color",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 65,
              "end": 142,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 75,
                  "end": 136,
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "start": 82,
                    "end": 136,
                    "id": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 97,
                      "name": "Color",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "extends": [],
                    "typeParameters": null,
                    "body": {
                      "type": "TSInterfaceBody",
                      "start": 98,
                      "end": 136,
                      "body": [
                        {
                          "type": "TSPropertySignature",
                          "start": 112,
                          "end": 126,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 112,
                            "end": 118,
                            "name": "darker",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 118,
                            "end": 125,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 120,
                              "end": 125,
                              "typeName": {
                                "type": "Identifier",
                                "start": 120,
                                "end": 125,
                                "name": "Color",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    },
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "type"
                }
              ]
            },
            "kind": "module",
            "declare": false,
            "global": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
