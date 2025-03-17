__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 15,
        "end": 41,
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 27,
          "end": 41,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 29,
              "end": 39,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 42,
      "end": 81,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 57,
        "end": 81,
        "id": null,
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 68,
          "end": 81,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 70,
              "end": 79,
              "argument": {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "value": 1,
                "raw": "1"
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 94,
          "end": 98,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 98,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
