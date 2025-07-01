__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Clone",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 22
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "LOCAL",
                "optional": false,
                "typeAnnotation": null,
                "start": 40,
                "end": 45
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AUTO",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 60
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 63,
                      "end": 64
                    },
                    "computed": false,
                    "start": 56,
                    "end": 64
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LOCAL",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 79
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 82,
                      "end": 83
                    },
                    "computed": false,
                    "start": 74,
                    "end": 83
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NO_LOCAL",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 93,
                      "end": 101
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 104,
                      "end": 105
                    },
                    "computed": false,
                    "start": 93,
                    "end": 105
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NO_LINKS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 115,
                      "end": 123
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 126,
                      "end": 127
                    },
                    "computed": false,
                    "start": 115,
                    "end": 127
                  }
                ],
                "start": 46,
                "end": 133
              },
              "const": true,
              "declare": false,
              "start": 29,
              "end": 133
            }
          ],
          "start": 23,
          "end": 135
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 135
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 135
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Clone",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 155
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
                "name": "clone",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 174
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "url",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 180,
                        "end": 186
                      },
                      "start": 178,
                      "end": 186
                    },
                    "start": 175,
                    "end": 186
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 189,
                    "end": 193
                  },
                  "start": 187,
                  "end": 193
                },
                "body": null,
                "expression": false,
                "start": 174,
                "end": 194
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 162,
              "end": 194
            }
          ],
          "start": 156,
          "end": 196
        },
        "abstract": false,
        "declare": false,
        "start": 144,
        "end": 196
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 137,
      "end": 196
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 196
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
            "name": "Clone",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Clone",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 13
          },
          "importKind": "value",
          "start": 8,
          "end": 13
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./enum",
        "raw": "\"./enum\"",
        "start": 20,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Clone",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 36
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "clone",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 42
          },
          "optional": false,
          "computed": false,
          "start": 31,
          "end": 42
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "ok",
            "raw": "\"ok\"",
            "start": 43,
            "end": 47
          }
        ],
        "optional": false,
        "start": 31,
        "end": 48
      },
      "directive": null,
      "start": 31,
      "end": 49
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
