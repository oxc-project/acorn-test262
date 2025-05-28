__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 244,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 17,
        "end": 90,
        "body": [
          {
            "type": "TSDeclareFunction",
            "start": 24,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 36,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 45,
            "end": 67,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 52,
              "end": 67,
              "id": {
                "type": "Identifier",
                "start": 61,
                "end": 64,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSDeclareFunction",
            "start": 73,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": null,
            "expression": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 92,
      "end": 164,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 109,
        "decorators": [],
        "name": "M1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 110,
        "end": 164,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 117,
            "end": 140,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 124,
              "end": 140,
              "id": {
                "type": "Identifier",
                "start": 134,
                "end": 137,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 138,
                "end": 140,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 146,
            "end": 162,
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 160,
              "end": 162,
              "body": []
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 166,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 175,
        "end": 244,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 182,
            "end": 197,
            "id": {
              "type": "Identifier",
              "start": 192,
              "end": 193,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 194,
              "end": 197,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 195,
                  "end": 196,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 195,
                    "end": 196,
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 203,
            "end": 221,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 210,
              "end": 221,
              "id": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 219,
                "end": 221,
                "body": []
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 227,
            "end": 242,
            "id": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "start": 239,
              "end": 242,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 240,
                  "end": 241,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
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
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
