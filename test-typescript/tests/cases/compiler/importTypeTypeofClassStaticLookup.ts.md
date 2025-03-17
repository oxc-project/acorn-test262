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
        "id": {
          "type": "Identifier",
          "start": 21,
          "end": 22,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 50,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 29,
              "end": 48,
              "static": true,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 39,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 39,
                "end": 48,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
                "body": null,
                "declare": false,
                "typeParameters": null,
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
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": null,
        "implements": [],
        "abstract": false,
        "declare": true,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 44,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 44,
              "name": "foo",
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
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 41,
                        "end": 44,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "typeArguments": null
                  },
                  "typeArguments": null
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
