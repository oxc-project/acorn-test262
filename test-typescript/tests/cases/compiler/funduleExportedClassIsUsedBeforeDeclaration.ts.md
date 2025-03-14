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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 110,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 59,
            "end": 67,
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
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "C",
                    "optional": false
                  }
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
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 111,
      "end": 137,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 129,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "params": [],
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
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 170,
      "end": 248,
      "body": {
        "type": "TSModuleBlock",
        "start": 187,
        "end": 248,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 193,
            "end": 246,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 200,
              "end": 246,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 208,
                "end": 246,
                "body": []
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 206,
                "end": 207,
                "decorators": [],
                "name": "C",
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
      "declare": true,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 186,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 259,
      "expression": {
        "type": "NewExpression",
        "start": 249,
        "end": 258,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 253,
          "end": 256,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 253,
            "end": 254,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
