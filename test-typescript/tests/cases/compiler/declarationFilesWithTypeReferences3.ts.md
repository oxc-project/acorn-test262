__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 41,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 40,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 40,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 38,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 29,
              "decorators": [],
              "name": "stack2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 37,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 31,
                "end": 37
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
        "end": 16,
        "decorators": [],
        "name": "Error2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 78,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 78,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 78,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 59,
            "end": 76,
            "argument": {
              "type": "Identifier",
              "start": 66,
              "end": 75,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 52,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 46,
          "end": 52,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 46,
            "end": 52,
            "decorators": [],
            "name": "Error2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
