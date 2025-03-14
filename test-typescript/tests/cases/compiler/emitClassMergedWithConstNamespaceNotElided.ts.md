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
      "attributes": [],
      "declaration": {
        "type": "TSModuleDeclaration",
        "start": 7,
        "end": 135,
        "body": {
          "type": "TSModuleBlock",
          "start": 23,
          "end": 135,
          "body": [
            {
              "type": "TSEnumDeclaration",
              "start": 29,
              "end": 133,
              "body": {
                "type": "TSEnumBody",
                "start": 46,
                "end": 133,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 56,
                    "end": 64,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 60,
                      "decorators": [],
                      "name": "AUTO",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 63,
                      "end": 64,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 74,
                    "end": 83,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 74,
                      "end": 79,
                      "decorators": [],
                      "name": "LOCAL",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 82,
                      "end": 83,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 93,
                    "end": 105,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 101,
                      "decorators": [],
                      "name": "NO_LOCAL",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 104,
                      "end": 105,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 115,
                    "end": 127,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 123,
                      "decorators": [],
                      "name": "NO_LINKS",
                      "optional": false
                    },
                    "initializer": {
                      "type": "Literal",
                      "start": 126,
                      "end": 127,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 40,
                "end": 45,
                "decorators": [],
                "name": "LOCAL",
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "global": false,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "Clone",
          "optional": false
        },
        "kind": "namespace"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 137,
      "end": 196,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 144,
        "end": 196,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 156,
          "end": 196,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 162,
              "end": 194,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 169,
                "end": 174,
                "decorators": [],
                "name": "clone",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 174,
                "end": 194,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
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
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 150,
          "end": 155,
          "decorators": [],
          "name": "Clone",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 28,
        "raw": "\"./enum\"",
        "value": "./enum"
      },
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 13,
            "decorators": [],
            "name": "Clone",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 31,
      "end": 49,
      "expression": {
        "type": "CallExpression",
        "start": 31,
        "end": 48,
        "arguments": [
          {
            "type": "Literal",
            "start": 43,
            "end": 47,
            "raw": "\"ok\"",
            "value": "ok"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 31,
          "end": 42,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 31,
            "end": 36,
            "decorators": [],
            "name": "Clone",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 37,
            "end": 42,
            "decorators": [],
            "name": "clone",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
