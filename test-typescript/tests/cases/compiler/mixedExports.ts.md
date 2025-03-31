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
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSDeclareFunction",
            "start": 73,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 82,
              "end": 85,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": null,
            "declare": false,
            "typeParameters": null,
            "returnType": null
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
        "name": "M1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 146,
            "end": 162,
            "id": {
              "type": "Identifier",
              "start": 156,
              "end": 159,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                "name": "X",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 227,
            "end": 242,
            "id": {
              "type": "Identifier",
              "start": 237,
              "end": 238,
              "name": "X",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": null,
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
