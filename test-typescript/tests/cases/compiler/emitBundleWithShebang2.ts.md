test.ts
```json
'#!' can only be used at the start of a file.
```
test2.ts
```json
{
  "type": "Program",
  "start": 18,
  "end": 61,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 18,
      "end": 31,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 31,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 28,
        "decorators": [],
        "name": "Dood",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 32,
      "end": 61,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 59,
        "end": 61,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 45,
        "decorators": [],
        "name": "Scoobyd",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 54,
        "end": 58,
        "decorators": [],
        "name": "Dood",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
