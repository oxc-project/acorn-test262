__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 148
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 166,
              "end": 167
            },
            "importKind": "value",
            "start": 155,
            "end": 168
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 181
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "importKind": "value",
            "start": 173,
            "end": 186
          }
        ],
        "start": 149,
        "end": 188
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 137,
      "end": 188
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 200,
        "end": 201
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "importKind": "value",
            "start": 208,
            "end": 221
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 240
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 241,
                "end": 244
              },
              "abstract": false,
              "declare": false,
              "start": 233,
              "end": 244
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 226,
            "end": 244
          }
        ],
        "start": 202,
        "end": 246
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 190,
      "end": 246
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 258,
        "end": 259
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 274
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 278
            },
            "importKind": "value",
            "start": 266,
            "end": 279
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "hello",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 298
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 304,
                    "end": 305
                  },
                  "start": 302,
                  "end": 305
                },
                "typeArguments": null,
                "start": 302,
                "end": 305
              },
              "start": 300,
              "end": 305
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 315,
                    "end": 319
                  },
                  "start": 308,
                  "end": 320
                }
              ],
              "start": 306,
              "end": 322
            },
            "expression": false,
            "start": 284,
            "end": 322
          }
        ],
        "start": 260,
        "end": 324
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 248,
      "end": 324
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 137,
  "end": 324
}
```
