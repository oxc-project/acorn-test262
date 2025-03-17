__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "symb",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 20,
              "end": 28,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 100,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 100,
        "body": {
          "type": "TSInterfaceBody",
          "start": 57,
          "end": 100,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 61,
              "end": 70,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 65,
                  "end": 69
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSPropertySignature",
              "start": 73,
              "end": 98,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "symb",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 90,
                  "end": 97
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 56,
          "decorators": [],
          "name": "TestSymb",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
