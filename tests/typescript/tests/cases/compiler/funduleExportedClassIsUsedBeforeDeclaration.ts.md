__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 64
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "start": 63,
                  "end": 66
                },
                "typeArguments": null,
                "start": 63,
                "end": 66
              },
              "start": 61,
              "end": 66
            },
            "start": 59,
            "end": 67
          }
        ],
        "start": 12,
        "end": 110
      },
      "declare": false,
      "start": 0,
      "end": 110
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 129
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "start": 133,
            "end": 136
          },
          "typeArguments": null,
          "start": 133,
          "end": 136
        },
        "start": 131,
        "end": 136
      },
      "body": null,
      "expression": false,
      "start": 111,
      "end": 137
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 186
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 207
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 208,
                "end": 246
              },
              "abstract": false,
              "declare": false,
              "start": 200,
              "end": 246
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 193,
            "end": 246
          }
        ],
        "start": 187,
        "end": 248
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 170,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 254
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 256
          },
          "optional": false,
          "computed": false,
          "start": 253,
          "end": 256
        },
        "typeArguments": null,
        "arguments": [],
        "start": 249,
        "end": 258
      },
      "directive": null,
      "start": 249,
      "end": 259
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 260
}
```
