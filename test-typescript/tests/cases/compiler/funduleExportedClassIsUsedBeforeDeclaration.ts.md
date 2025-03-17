__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 110,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 59,
            "end": 67,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 66,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 66,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 63,
                  "end": 66,
                  "left": {
                    "type": "Identifier",
                    "start": 63,
                    "end": 64,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "name": "C",
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
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 111,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 131,
        "end": 136,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 133,
          "end": 136,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 133,
            "end": 136,
            "left": {
              "type": "Identifier",
              "start": 133,
              "end": 134,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 170,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 186,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 187,
        "end": 248,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 193,
            "end": 246,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 200,
              "end": 246,
              "id": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 208,
                "end": 246,
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
      "declare": true,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 259,
      "expression": {
        "type": "NewExpression",
        "start": 249,
        "end": 258,
        "callee": {
          "type": "MemberExpression",
          "start": 253,
          "end": 256,
          "object": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
