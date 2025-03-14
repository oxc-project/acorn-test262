foo.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 40,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 20,
        "end": 40,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 24,
            "end": 38,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 27,
              "end": 38,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 29,
                "end": 37,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 31,
                  "end": 37
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 19,
        "decorators": [],
        "name": "Thing",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSExportAssignment",
      "start": 41,
      "end": 56,
      "expression": {
        "type": "Identifier",
        "start": 50,
        "end": 55,
        "decorators": [],
        "name": "Thing",
        "optional": false
      }
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 57,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 80,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
a.ts
```json
{
  "type": "Program",
  "start": 34,
  "end": 115,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 34,
      "end": 55,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 41,
        "end": 55,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 47,
            "end": 54,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 51,
              "end": 54,
              "decorators": [],
              "name": "Foo",
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
