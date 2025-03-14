replace-in-file/types/index.d.ts
```json
{
  "type": "Program",
  "start": 68,
  "end": 293,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 68,
      "end": 293,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 101,
        "end": 293,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 105,
            "end": 172,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 112,
              "end": 172,
              "async": false,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 121,
                "end": 134,
                "decorators": [],
                "name": "replaceInFile",
                "optional": false
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 135,
                  "end": 150,
                  "decorators": [],
                  "name": "config",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 141,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 143,
                      "end": 150
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 171,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 171,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 160,
                    "end": 171,
                    "params": [
                      {
                        "type": "TSArrayType",
                        "start": 161,
                        "end": 170,
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 161,
                          "end": 168
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 160,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false
                  }
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportDefaultDeclaration",
            "start": 175,
            "end": 204,
            "declaration": {
              "type": "Identifier",
              "start": 190,
              "end": 203,
              "decorators": [],
              "name": "replaceInFile",
              "optional": false
            },
            "exportKind": "value"
          },
          {
            "type": "TSModuleDeclaration",
            "start": 208,
            "end": 291,
            "body": {
              "type": "TSModuleBlock",
              "start": 232,
              "end": 291,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 238,
                  "end": 287,
                  "attributes": [],
                  "declaration": {
                    "type": "TSDeclareFunction",
                    "start": 245,
                    "end": 287,
                    "async": false,
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 258,
                      "decorators": [],
                      "name": "sync",
                      "optional": false
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 259,
                        "end": 274,
                        "decorators": [],
                        "name": "config",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 265,
                          "end": 274,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 267,
                            "end": 274
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 275,
                      "end": 286,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 277,
                        "end": 286,
                        "elementType": {
                          "type": "TSUnknownKeyword",
                          "start": 277,
                          "end": 284
                        }
                      }
                    }
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 218,
              "end": 231,
              "decorators": [],
              "name": "replaceInFile",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 83,
        "end": 100,
        "raw": "'replace-in-file'",
        "value": "replace-in-file"
      }
    }
  ],
  "sourceType": "script"
}
```
