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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "name": "symb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 20,
              "end": 28,
              "callee": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "name": "Symbol",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 100,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 100,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 56,
          "name": "TestSymb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 57,
          "end": 100,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 61,
              "end": 70,
              "typeParameters": null,
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
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 73,
              "end": 98,
              "computed": true,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "name": "symb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 90,
                  "end": 97
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
