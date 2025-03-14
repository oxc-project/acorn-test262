/a/node_modules/@types/node/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 39,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 39,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 37,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 28,
              "decorators": [],
              "name": "stack2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
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
        "end": 15,
        "decorators": [],
        "name": "Error",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
/a/app.ts
```json
{
  "type": "Program",
  "start": 30,
  "end": 77,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 77,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 52,
        "end": 77,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 58,
            "end": 75,
            "argument": {
              "type": "Identifier",
              "start": 65,
              "end": 74,
              "decorators": [],
              "name": "undefined",
              "optional": false
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
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 44,
        "end": 51,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 46,
          "end": 51,
          "typeName": {
            "type": "Identifier",
            "start": 46,
            "end": 51,
            "decorators": [],
            "name": "Error",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```
