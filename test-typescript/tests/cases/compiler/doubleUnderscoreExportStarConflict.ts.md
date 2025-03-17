__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"./b\"",
        "value": "./b"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 21,
      "end": 41,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 35,
        "end": 40,
        "raw": "\"./c\"",
        "value": "./c"
      }
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
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 41,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 39,
          "end": 41,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "decorators": [],
          "name": "__foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 23,
          "end": 38,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 25,
            "end": 38,
            "types": [
              {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              },
              {
                "type": "TSVoidKeyword",
                "start": 34,
                "end": 38
              }
            ]
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 41,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 39,
          "end": 41,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 21,
          "decorators": [],
          "name": "__foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 23,
          "end": 38,
          "typeAnnotation": {
            "type": "TSUnionType",
            "start": 25,
            "end": 38,
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              },
              {
                "type": "TSVoidKeyword",
                "start": 34,
                "end": 38
              }
            ]
          }
        },
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
