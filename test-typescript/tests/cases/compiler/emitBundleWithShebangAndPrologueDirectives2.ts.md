__ESTREE_TEST__:FAIL:
```json
'#!' can only be used at the start of a file.
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 94,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 19,
      "end": 31,
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 19,
        "end": 31,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 50,
      "directive": "Another prologue",
      "expression": {
        "type": "Literal",
        "start": 32,
        "end": 50,
        "raw": "\"Another prologue\"",
        "value": "Another prologue"
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 51,
      "end": 64,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 62,
        "end": 64,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 61,
        "decorators": [],
        "name": "Dood",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 92,
        "end": 94,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 78,
        "decorators": [],
        "name": "Scoobyd",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 87,
        "end": 91,
        "decorators": [],
        "name": "Dood",
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
