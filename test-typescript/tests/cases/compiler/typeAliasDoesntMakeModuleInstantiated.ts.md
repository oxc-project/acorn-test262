typeAliasDoesntMakeModuleInstantiated.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 365,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 277,
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 277,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 108,
            "end": 151,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 113,
              "end": 121,
              "decorators": [],
              "name": "Selector",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 124,
              "end": 150,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 124,
                  "end": 130
                },
                {
                  "type": "TSArrayType",
                  "start": 132,
                  "end": 140,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 132,
                    "end": 138
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 142,
                  "end": 150,
                  "typeName": {
                    "type": "Identifier",
                    "start": 142,
                    "end": 150,
                    "decorators": [],
                    "name": "Function",
                    "optional": false
                  }
                }
              ]
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 157,
            "end": 240,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 164,
              "end": 240,
              "body": {
                "type": "TSInterfaceBody",
                "start": 182,
                "end": 240,
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 192,
                    "end": 234,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 193,
                        "end": 206,
                        "decorators": [],
                        "name": "selector",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 201,
                          "end": 206,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 203,
                            "end": 206
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 233,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 224,
                        "end": 233,
                        "typeName": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 233,
                          "decorators": [],
                          "name": "IInstance",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 174,
                "end": 181,
                "decorators": [],
                "name": "IStatic",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 245,
            "end": 275,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 252,
              "end": 275,
              "body": {
                "type": "TSInterfaceBody",
                "start": 272,
                "end": 275,
                "body": []
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 262,
                "end": 271,
                "decorators": [],
                "name": "IInstance",
                "optional": false
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 302,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 302,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 302,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 302,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 293,
                  "end": 302,
                  "left": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "m",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 302,
                    "decorators": [],
                    "name": "IStatic",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
