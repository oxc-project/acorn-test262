__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 50,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 50,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 29,
              "end": 48,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 39,
                "end": 48,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
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
                },
                "body": null,
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
  "end": 45,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 45,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 45,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 44,
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
                        "value": "./a",
                        "raw": "\"./a\""
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 44,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
