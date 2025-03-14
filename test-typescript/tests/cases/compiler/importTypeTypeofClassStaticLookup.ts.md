a.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 50,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 50,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 29,
              "end": 48,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 39,
                "end": 48,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 43,
                    "end": 47
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
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "A",
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
index.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 45,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 44,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 44,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 16,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSTypeQuery",
                  "start": 18,
                  "end": 44,
                  "exprName": {
                    "type": "TSImportType",
                    "start": 25,
                    "end": 44,
                    "argument": {
                      "type": "TSLiteralType",
                      "start": 32,
                      "end": 37,
                      "literal": {
                        "type": "Literal",
                        "start": 32,
                        "end": 37,
                        "raw": "\"./a\"",
                        "value": "./a"
                      }
                    },
                    "options": null,
                    "qualifier": {
                      "type": "TSQualifiedName",
                      "start": 39,
                      "end": 44,
                      "left": {
                        "type": "Identifier",
                        "start": 39,
                        "end": 40,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 44,
                        "decorators": [],
                        "name": "foo",
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "init": null
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
