file1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 47,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 24,
          "end": 47,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 30,
              "end": 45,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 30,
                "end": 40,
                "decorators": [],
                "name": "handleChar",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 40,
                "end": 45,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 43,
                  "end": 45,
                  "body": []
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 23,
          "decorators": [],
          "name": "Calculator",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 56,
        "end": 76,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 72,
          "end": 76,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 65,
          "end": 69,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 78,
      "end": 114,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 93,
        "end": 114,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 110,
          "end": 114,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 102,
          "end": 107,
          "decorators": [],
          "name": "test2",
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
file2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 23,
        "raw": "\"./file1\"",
        "value": "./file1"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "d",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
