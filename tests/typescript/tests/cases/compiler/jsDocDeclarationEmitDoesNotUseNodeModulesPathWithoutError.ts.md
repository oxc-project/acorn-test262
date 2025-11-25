__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LionRequestInit",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 27
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "../types/types.js",
            "raw": "'../types/types.js'",
            "start": 37,
            "end": 56
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "LionRequestInit",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 73
          },
          "typeArguments": null,
          "start": 30,
          "end": 73
        },
        "declare": false,
        "start": 7,
        "end": 74
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 74
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "LionRequestInit",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 32
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "body",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 43
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNullKeyword",
                      "start": 46,
                      "end": 50
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 53,
                        "end": 59
                      },
                      "typeArguments": null,
                      "start": 53,
                      "end": 59
                    }
                  ],
                  "start": 46,
                  "end": 59
                },
                "start": 44,
                "end": 59
              },
              "accessibility": null,
              "static": false,
              "start": 39,
              "end": 60
            }
          ],
          "start": 33,
          "end": 62
        },
        "declare": false,
        "start": 7,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 62
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NewAjax",
          "optional": false,
          "typeAnnotation": null,
          "start": 89,
          "end": 96
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "case5_unexpectedlyResolvesPathToNodeModules",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 201
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "init",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 206
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 208,
                  "end": 210
                },
                "expression": false,
                "start": 201,
                "end": 210
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 158,
              "end": 210
            }
          ],
          "start": 97,
          "end": 212
        },
        "abstract": false,
        "declare": false,
        "start": 83,
        "end": 212
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 76,
      "end": 212
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "NewAjax",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 293
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 303
          },
          "optional": false,
          "computed": false,
          "start": 286,
          "end": 303
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "case6_unexpectedlyResolvesPathToNodeModules",
          "optional": false,
          "typeAnnotation": null,
          "start": 304,
          "end": 347
        },
        "optional": false,
        "computed": false,
        "start": 286,
        "end": 347
      },
      "directive": null,
      "start": 286,
      "end": 348
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 76,
  "end": 348
}
```
