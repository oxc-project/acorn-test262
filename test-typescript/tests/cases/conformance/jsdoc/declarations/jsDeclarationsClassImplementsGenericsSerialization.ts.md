__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 64,
        "body": {
          "type": "TSInterfaceBody",
          "start": 28,
          "end": 64,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 34,
              "end": 62,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 34,
                "end": 40,
                "decorators": [],
                "name": "encode",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 41,
                  "end": 49,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 46,
                    "end": 49,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 48,
                      "end": 49,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 49,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 50,
                "end": 62,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 52,
                  "end": 62,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 62,
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 24,
          "decorators": [],
          "name": "Encoder",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 24,
          "end": 27,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 25,
              "end": 26,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 25,
                "end": 26,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
