file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 28,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 28,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 26,
          "end": 28,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": null,
        "params": []
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 32,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 15,
        "end": 32,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 30,
          "end": 32,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
file3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 23,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 23,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 21,
          "end": 23,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": null,
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
file4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 25,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 15,
        "end": 25,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module"
}
```
