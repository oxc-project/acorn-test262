exportDefaultTypeAndClass.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 27,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 27,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 25,
          "end": 27,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 24,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 41,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 39,
        "end": 41,
        "members": []
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 42,
      "end": 60,
      "declaration": {
        "type": "Identifier",
        "start": 57,
        "end": 60,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script"
}
```
