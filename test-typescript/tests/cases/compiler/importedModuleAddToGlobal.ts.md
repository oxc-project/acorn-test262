importedModuleAddToGlobal.ts
```json
{
  "type": "Program",
  "start": 137,
  "end": 315,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 137,
      "end": 185,
      "body": {
        "type": "TSModuleBlock",
        "start": 146,
        "end": 185,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 152,
            "end": 165,
            "id": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 170,
            "end": 183,
            "id": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 187,
      "end": 240,
      "body": {
        "type": "TSModuleBlock",
        "start": 196,
        "end": 240,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 202,
            "end": 215,
            "id": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 220,
            "end": 238,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 227,
              "end": 238,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 235,
                "end": 238,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "B",
                "optional": false
              },
              "implements": [],
              "superClass": null
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
        "start": 194,
        "end": 195,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 242,
      "end": 315,
      "body": {
        "type": "TSModuleBlock",
        "start": 251,
        "end": 315,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 257,
            "end": 270,
            "id": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 275,
            "end": 313,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 297,
              "end": 313,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 299,
                  "end": 311,
                  "argument": {
                    "type": "Literal",
                    "start": 306,
                    "end": 310,
                    "raw": "null",
                    "value": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 289,
              "decorators": [],
              "name": "hello",
              "optional": false
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 296,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 293,
                "end": 296,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 293,
                  "end": 296,
                  "left": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 250,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
