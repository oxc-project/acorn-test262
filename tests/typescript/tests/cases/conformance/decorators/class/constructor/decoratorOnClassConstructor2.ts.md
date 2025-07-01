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
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 17
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 18,
          "end": 21
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 21
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 21
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 38,
          "end": 41
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "target",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 56
                },
                "typeArguments": null,
                "start": 50,
                "end": 56
              },
              "start": 48,
              "end": 56
            },
            "start": 42,
            "end": 56
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "propertyKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 71,
                    "end": 77
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 80,
                    "end": 86
                  }
                ],
                "start": 71,
                "end": 86
              },
              "start": 69,
              "end": 86
            },
            "start": 58,
            "end": 86
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "parameterIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 104,
                "end": 110
              },
              "start": 102,
              "end": 110
            },
            "start": 88,
            "end": 110
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 112,
          "end": 115
        },
        "expression": false,
        "start": 29,
        "end": 115
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 22,
      "end": 115
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 116
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "base",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 12
          },
          "importKind": "value",
          "start": 8,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0.ts",
        "raw": "\"./0.ts\"",
        "start": 19,
        "end": 27
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 27
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 39
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 36,
            "end": 39
          },
          "importKind": "value",
          "start": 36,
          "end": 39
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./0.ts",
        "raw": "\"./0.ts\"",
        "start": 46,
        "end": 54
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 28,
      "end": 54
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 69
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null,
          "start": 79,
          "end": 83
        },
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 100
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
                    "decorators": [
                      {
                        "type": "Decorator",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 105
                        },
                        "start": 101,
                        "end": 105
                      }
                    ],
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 112,
                        "end": 115
                      },
                      "start": 110,
                      "end": 115
                    },
                    "start": 106,
                    "end": 115
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Super",
                          "start": 127,
                          "end": 132
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 127,
                        "end": 134
                      },
                      "directive": null,
                      "start": 127,
                      "end": 135
                    }
                  ],
                  "start": 117,
                  "end": 141
                },
                "expression": false,
                "start": 100,
                "end": 141
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 89,
              "end": 141
            }
          ],
          "start": 83,
          "end": 143
        },
        "abstract": false,
        "declare": false,
        "start": 62,
        "end": 143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 55,
      "end": 143
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 143
}
```
