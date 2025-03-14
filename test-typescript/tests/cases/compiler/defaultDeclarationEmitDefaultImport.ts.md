root.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 98,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 64,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 42,
          "end": 64,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 44,
              "end": 62,
              "argument": {
                "type": "TSAsExpression",
                "start": 51,
                "end": 62,
                "expression": {
                  "type": "Literal",
                  "start": 51,
                  "end": 55,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 59,
                  "end": 62
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
          "start": 16,
          "end": 28,
          "decorators": [],
          "name": "getSomething",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 30,
          "end": 41,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 32,
            "end": 41,
            "typeName": {
              "type": "Identifier",
              "start": 32,
              "end": 41,
              "decorators": [],
              "name": "Something",
              "optional": false
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 65,
      "end": 98,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 80,
        "end": 98,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 96,
          "end": 98,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 86,
          "end": 95,
          "decorators": [],
          "name": "Something",
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
main.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 36,
        "end": 44,
        "raw": "\"./root\"",
        "value": "./root"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 12,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 12,
            "decorators": [],
            "name": "Thing",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 16,
          "end": 28,
          "imported": {
            "type": "Identifier",
            "start": 16,
            "end": 28,
            "decorators": [],
            "name": "getSomething",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 16,
            "end": 28,
            "decorators": [],
            "name": "getSomething",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 46,
      "end": 85,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 53,
        "end": 85,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 59,
            "end": 84,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 67,
              "decorators": [],
              "name": "instance",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 70,
              "end": 84,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 70,
                "end": 82,
                "decorators": [],
                "name": "getSomething",
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
