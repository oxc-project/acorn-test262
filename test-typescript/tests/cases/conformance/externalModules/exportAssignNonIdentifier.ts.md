foo1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSExportAssignment",
      "start": 12,
      "end": 30,
      "expression": {
        "type": "UnaryExpression",
        "start": 21,
        "end": 29,
        "argument": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    }
  ],
  "sourceType": "module"
}
```
foo2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 20,
      "expression": {
        "type": "Literal",
        "start": 9,
        "end": 19,
        "raw": "\"sausages\"",
        "value": "sausages"
      }
    }
  ],
  "sourceType": "module"
}
```
foo3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 23,
      "expression": {
        "type": "ClassExpression",
        "start": 9,
        "end": 22,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 20,
          "end": 22,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 15,
          "end": 19,
          "decorators": [],
          "name": "Foo3",
          "optional": false
        },
        "implements": [],
        "superClass": null
      }
    }
  ],
  "sourceType": "module"
}
```
foo4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 14,
      "expression": {
        "type": "Literal",
        "start": 9,
        "end": 13,
        "raw": "true",
        "value": true
      }
    }
  ],
  "sourceType": "module"
}
```
foo5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 83,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 19,
      "expression": {
        "type": "Identifier",
        "start": 9,
        "end": 18,
        "decorators": [],
        "name": "undefined",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo6.ts
```json
Expression expected.
```
foo7.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 24,
      "expression": {
        "type": "LogicalExpression",
        "start": 9,
        "end": 23,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 9,
          "end": 13,
          "decorators": [],
          "name": "Date",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 17,
          "end": 23,
          "decorators": [],
          "name": "String",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
foo8.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "TSExportAssignment",
      "start": 0,
      "end": 14,
      "expression": {
        "type": "Literal",
        "start": 9,
        "end": 13,
        "raw": "null",
        "value": null
      }
    }
  ],
  "sourceType": "module"
}
```
