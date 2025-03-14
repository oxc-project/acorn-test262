/node_modules/@types/node/index.d.ts
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
/app.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 47,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 47,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 28,
            "end": 45,
            "argument": {
              "type": "Identifier",
              "start": 35,
              "end": 44,
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
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 21,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 16,
          "end": 21,
          "typeName": {
            "type": "Identifier",
            "start": 16,
            "end": 21,
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
