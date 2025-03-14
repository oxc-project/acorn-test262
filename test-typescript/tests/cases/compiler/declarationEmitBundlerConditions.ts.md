/node_modules/pkg/index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 39,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 39,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 27,
              "end": 37,
              "accessibility": "private",
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "p",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "value": null
            }
          ]
        },
        "declare": true,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/makeC.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "raw": "\"pkg\"",
        "value": "pkg"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 70,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 32,
        "end": 70,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 49,
          "end": 70,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 53,
              "end": 68,
              "argument": {
                "type": "NewExpression",
                "start": 60,
                "end": 67,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 65,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 41,
          "end": 46,
          "decorators": [],
          "name": "makeC",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 31,
        "raw": "\"./makeC\"",
        "value": "./makeC"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "makeC",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "makeC",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 33,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 40,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 46,
            "end": 57,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 50,
              "end": 57,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 50,
                "end": 55,
                "decorators": [],
                "name": "makeC",
                "optional": false
              },
              "optional": false
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
