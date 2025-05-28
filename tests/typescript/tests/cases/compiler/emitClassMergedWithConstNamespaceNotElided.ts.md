__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 196,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 135,
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 135,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "Clone",
          "optional": false,
          "typeAnnotation": null
        },
        "body": {
          "type": "TSModuleBlock",
          "start": 23,
          "end": 135,
          "body": [
            {
              "type": "TSEnumDeclaration",
              "start": 29,
              "end": 133,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 45,
                "decorators": [],
                "name": "LOCAL",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSEnumBody",
                "start": 46,
                "end": 133,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 56,
                    "end": 64,
                    "id": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 60,
                      "decorators": [],
                      "name": "AUTO",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 63,
                      "end": 64,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 74,
                    "end": 83,
                    "id": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 79,
                      "decorators": [],
                      "name": "LOCAL",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 82,
                      "end": 83,
                      "value": 1,
                      "raw": "1"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 93,
                    "end": 105,
                    "id": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 101,
                      "decorators": [],
                      "name": "NO_LOCAL",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 104,
                      "end": 105,
                      "value": 2,
                      "raw": "2"
                    },
                    "computed": false
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 115,
                    "end": 127,
                    "id": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 123,
                      "decorators": [],
                      "name": "NO_LINKS",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 126,
                      "end": 127,
                      "value": 3,
                      "raw": "3"
                    },
                    "computed": false
                  }
                ]
              },
              "const": true,
              "declare": false
            }
          ]
        },
        "kind": "namespace",
        "declare": false,
        "global": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 137,
      "end": 196,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 144,
        "end": 196,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 150,
          "end": 155,
          "decorators": [],
          "name": "Clone",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 156,
          "end": 196,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 162,
              "end": 194,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 169,
                "end": 174,
                "decorators": [],
                "name": "clone",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 174,
                "end": 194,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 175,
                    "end": 186,
                    "decorators": [],
                    "name": "url",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 178,
                      "end": 186,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 180,
                        "end": 186
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 187,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 189,
                    "end": 193
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "decorators": [],
            "name": "Clone",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "decorators": [],
            "name": "Clone",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "value": "./enum",
        "raw": "\"./enum\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 48,
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 42,
          "object": {
            "type": "Identifier",
            "start": 31,
            "end": 36,
            "decorators": [],
            "name": "Clone",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 37,
            "end": 42,
            "decorators": [],
            "name": "clone",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 47,
            "value": "ok",
            "raw": "\"ok\""
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
