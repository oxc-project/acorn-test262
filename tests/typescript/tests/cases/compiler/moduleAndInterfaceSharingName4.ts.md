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
        "decorators": [],
        "name": "D3",
        "optional": false,
        "typeAnnotation": null
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 45,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 45,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                            "decorators": [],
                            "name": "D3",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 34,
                            "end": 39,
                            "decorators": [],
                            "name": "Color",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 40,
                          "end": 45,
                          "decorators": [],
                          "name": "Color",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "Color",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeParameters": null,
                    "extends": [],
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
                            "decorators": [],
                            "name": "darker",
                            "optional": false,
                            "typeAnnotation": null
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
                                "decorators": [],
                                "name": "Color",
                                "optional": false,
                                "typeAnnotation": null
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
                  "exportKind": "type",
                  "attributes": []
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
