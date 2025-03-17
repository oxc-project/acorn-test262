__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 145,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 170,
            "end": 183,
            "id": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 187,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 220,
            "end": 238,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 227,
              "end": 238,
              "id": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 235,
                "end": 238,
                "body": []
              },
              "decorators": [],
              "typeParameters": null,
              "implements": [],
              "abstract": false,
              "declare": false,
              "superTypeArguments": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 242,
      "end": 315,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 250,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "FunctionDeclaration",
            "start": 275,
            "end": 313,
            "id": {
              "type": "Identifier",
              "start": 284,
              "end": 289,
              "name": "hello",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                    "value": null,
                    "raw": "null"
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
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
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 295,
                    "end": 296,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
