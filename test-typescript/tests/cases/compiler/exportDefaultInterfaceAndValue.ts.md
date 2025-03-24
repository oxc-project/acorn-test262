__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 99,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 15,
        "end": 41,
        "body": {
          "type": "TSInterfaceBody",
          "start": 27,
          "end": 41,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 29,
              "end": 39,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 30,
                "end": 38,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
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
        "async": false,
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
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": [],
        "returnType": null,
        "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 94,
            "end": 98,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 97,
                "end": 98,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
